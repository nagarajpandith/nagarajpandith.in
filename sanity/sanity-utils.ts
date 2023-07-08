import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "image": image.asset->url,
            "slug": slug.current,
        }`
  );
}
