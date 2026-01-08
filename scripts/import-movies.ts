import fs from 'fs';
import Papa from 'papaparse';
import { createClient } from '@supabase/supabase-js';

// Your API keys
const TMDB_API_KEY = 'your_tmdb_api_key_here';
const SUPABASE_URL = 'your_supabase_url';
const SUPABASE_SERVICE_KEY = 'your_supabase_SERVICE_ROLE_key'; // Use service role, not anon!

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

interface CSVRow {
  'Title': string;
  'Original Title': string;
  'URL': string;
  'Title Type': string;
  'IMDb Rating': string;
  'Runtime (mins)': string;
  'Year': string;
  'Genres': string;
}

// Extract IMDB ID from URL
function extractImdbId(url: string): string {
  const match = url.match(/tt\d+/);
  return match ? match[0] : '';
}

// Fetch poster from TMDB
async function fetchPosterFromTMDB(title: string, year: string, type: string): Promise<{ poster: string | null, backdrop: string | null, tmdbId: number | null }> {
  try {
    const mediaType = type.toLowerCase().includes('series') ? 'tv' : 'movie';
    const searchUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const result = data.results[0];
      return {
        poster: result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : null,
        backdrop: result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null,
        tmdbId: result.id,
      };
    }
    
    return { poster: null, backdrop: null, tmdbId: null };
  } catch (error) {
    console.error(`Error fetching poster for ${title}:`, error);
    return { poster: null, backdrop: null, tmdbId: null };
  }
}

// Auto-generate mood tags based on genres
function generateMoodTags(genres: string[]): string[] {
  const moodMap: Record<string, string[]> = {
    'thriller': ['adrenaline-rush', 'edge-of-seat'],
    'mystery': ['mind-blown', 'detective-mode'],
    'horror': ['scary-night', 'nightmare-fuel'],
    'comedy': ['laugh-therapy', 'mood-lifter'],
    'drama': ['emotional-damage', 'deep-feels'],
    'romance': ['date-night', 'feel-good'],
    'action': ['adrenaline-rush', 'popcorn-time'],
    'documentary': ['learning-mode', 'rainy-day'],
    'animation': ['family-time', 'nostalgia'],
    'sci-fi': ['mind-blown', 'future-vibes'],
    'crime': ['detective-mode', 'edge-of-seat'],
  };

  const moods = new Set<string>();
  
  genres.forEach(genre => {
    const genreLower = genre.toLowerCase();
    Object.keys(moodMap).forEach(key => {
      if (genreLower.includes(key)) {
        moodMap[key].forEach(mood => moods.add(mood));
      }
    });
  });

  // Default mood if none matched
  if (moods.size === 0) {
    moods.add('hidden-gem');
  }

  return Array.from(moods);
}

// Main import function
async function importMovies(csvPath: string) {
  const fileContent = fs.readFileSync(csvPath, 'utf-8');
  
  Papa.parse<CSVRow>(fileContent, {
    header: true,
    skipEmptyLines: true,
    complete: async (results) => {
      console.log(`Found ${results.data.length} movies to import...`);
      
      let imported = 0;
      let failed = 0;

      for (const row of results.data) {
        try {
          const title = row['Title'];
          const year = row['Year'];
          const type = row['Title Type'];
          const genres = row['Genres'] ? row['Genres'].split(',').map(g => g.trim()) : [];
          
          console.log(`Processing: ${title} (${year})...`);
          
          // Fetch poster from TMDB
          const { poster, backdrop, tmdbId } = await fetchPosterFromTMDB(title, year, type);
          
          // Generate mood tags
          const moodTags = generateMoodTags(genres);
          
          // Insert into Supabase
          const { error } = await supabase.from('recommendations').insert({
            title: row['Title'],
            original_title: row['Original Title'],
            imdb_url: row['URL'],
            imdb_id: extractImdbId(row['URL']),
            title_type: type,
            imdb_rating: parseFloat(row['IMDb Rating']) || null,
            runtime_mins: parseInt(row['Runtime (mins)']) || null,
            year: parseInt(year) || null,
            genres: genres,
            poster_url: poster,
            backdrop_url: backdrop,
            tmdb_id: tmdbId,
            mood_tags: moodTags,
          });

          if (error) {
            console.error(`Failed to import ${title}:`, error);
            failed++;
          } else {
            console.log(`✓ Imported: ${title}`);
            imported++;
          }

          // Rate limiting (TMDB allows 50 requests per second)
          await new Promise(resolve => setTimeout(resolve, 100));
          
        } catch (error) {
          console.error('Error processing row:', error);
          failed++;
        }
      }

      console.log(`\n✨ Import complete!`);
      console.log(`✓ Successfully imported: ${imported}`);
      console.log(`✗ Failed: ${failed}`);
    },
  });
}

// Run the import
const csvPath = process.argv[2] || './movies.csv';
console.log(`Starting import from: ${csvPath}\n`);
importMovies(csvPath);