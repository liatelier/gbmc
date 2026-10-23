# Getting globalbusinessmodelcanvas.com found and cited

The site is hosted on Vercel from the GitHub repo liatelier/gbmc. Every push to `main` deploys automatically.

## 1. Domain on Vercel

1. Vercel project → **Settings → Domains** → add `globalbusinessmodelcanvas.com` and `www.globalbusinessmodelcanvas.com`.
2. Make the bare domain (without www) the primary one and let www redirect to it. All the page metadata points to `https://globalbusinessmodelcanvas.com/`, so this must match.
3. Add the DNS records Vercel shows at your domain registrar. HTTPS turns on by itself.

## 2. Google

1. https://search.google.com/search-console → add a **Domain** property for `globalbusinessmodelcanvas.com`, verify with the TXT record.
2. **Sitemaps** → submit `sitemap.xml`.
3. **URL inspection** → request indexing for `/` and `/fr/`.
4. Check the structured data at https://search.google.com/test/rich-results with the home page URL.

## 3. Bing (this also feeds ChatGPT search, Copilot and DuckDuckGo)

1. https://www.bing.com/webmasters → sign in → **Import from Google Search Console** (one click once step 2 is done).
2. Submit `sitemap.xml` there too.
3. Notify Bing and other IndexNow engines instantly by opening this address in a browser once the site is live:

   https://api.indexnow.org/indexnow?url=https://globalbusinessmodelcanvas.com/&key=2f215229cd975ebef4da448b035c1d29

   Do it again for `https://globalbusinessmodelcanvas.com/fr/`, and after any big content change.

## 4. What's already on the site for AI assistants

- `robots.txt` explicitly allows the crawlers of Google, Bing, ChatGPT, Claude, Perplexity, Gemini, Apple, Meta, Mistral and Common Crawl.
- `llms.txt` and `llms-full.txt` give language models a plain-text summary and the full description of every block.
- Every page opens with a one-sentence definition, has a "How to cite" section, and carries structured data naming Martial as the creator.
- The blank PDFs carry the title, author and site address in their metadata.

## 5. What makes AI assistants cite it (the part only people can do)

AI assistants and search engines quote what other trusted sources talk about. The site alone can't do that; these can:

- **LinkedIn**: Martial adds the URL to his headline or Featured section and writes one post presenting the canvas.
- **His schools**: IRIIG, ITECH Lyon and EDHEC link to the site from his profile or a resources page.
- **HAL** (https://hal.science): a short paper or working paper presenting the canvas, deposited in the French open archive. It gets indexed by Google Scholar and is a source AI models trust.
- **Course materials**: the URL in the footer of his slides and handouts, next to the canvas.
- **Students**: theses and reports that use the canvas cite it with the citation on the site.

## 6. Editing content

Text lives in `index.html` (English), `fr/index.html` (French), `llms.txt` and `llms-full.txt`. When a block description changes, update all four so they stay consistent, and update the `lastmod` dates in `sitemap.xml`.

## 7. Keep the domain

Turn on auto-renew, and when convenient transfer the domain to Martial's own account.
