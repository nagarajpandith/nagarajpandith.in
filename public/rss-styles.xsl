<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: #faf8f3;
            padding: 2rem 1rem;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-transform: lowercase;
          }
          .description {
            color: #666;
            font-size: 1.125rem;
          }
          .info {
            background: rgba(0,0,0,0.05);
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
          }
          .info h2 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
          .info p {
            color: #666;
            font-size: 0.95rem;
          }
          .items {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .item {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            transition: transform 0.2s;
          }
          .item:hover {
            transform: translateY(-2px);
          }
          .item h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .item h3 a {
            color: #1a1a1a;
            text-decoration: none;
          }
          .item h3 a:hover {
            opacity: 0.7;
          }
          .item .meta {
            color: #999;
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }
          .item .description {
            color: #666;
          }
          code {
            background: rgba(0,0,0,0.05);
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.9em;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="description">
              <xsl:value-of select="/rss/channel/description"/>
            </p>
          </header>
          
          <div class="info">
            <h2>📡 what is an rss feed?</h2>
            <p>
              this is an rss feed. subscribe using your favorite rss reader (like feedly, inoreader, or newsblur) 
              to get notified when new posts are published. copy this page's url: 
              <code><xsl:value-of select="/rss/channel/atom:link/@href"/></code>
            </p>
          </div>

          <div class="items">
            <xsl:for-each select="/rss/channel/item">
              <article class="item">
                <h3>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </h3>
                <div class="meta">
                  <xsl:value-of select="pubDate"/>
                </div>
                <p class="description">
                  <xsl:value-of select="description"/>
                </p>
              </article>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>