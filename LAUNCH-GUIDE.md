# Putting globalbusinessmodelcanvas.com online

About 30 minutes, free apart from the domain.

## 1. Check the content with Martial first

The block descriptions and guiding questions are written from the canvas itself. Ask him to read them and correct anything that doesn't match how he teaches it. Also confirm with him (and IRIIG, since the canvas carries "© IRIIG") that publishing it is fine.

To edit text later, open `index.html` (English) or `fr/index.html` (French) in any text editor, change the words between the tags, save, and upload again.

## 2. Publish the site (Netlify, free)

1. Go to https://app.netlify.com/drop and create a free account.
2. Unzip the folder and drag the whole folder onto the page. The site goes live at a temporary address like `something.netlify.app`. Open it and check it.
3. In Netlify: **Domain management → Add a domain** → type `globalbusinessmodelcanvas.com`.
4. Netlify shows the DNS settings to use. Either switch your domain's nameservers to Netlify's (simplest), or add the records it lists at your registrar. HTTPS turns on automatically within an hour.

Don't delete the `/fr/` folder or `assets/`: both pages use them.

## 3. Tell Google the site exists

1. Go to https://search.google.com/search-console and add a **Domain** property for `globalbusinessmodelcanvas.com`.
2. Verify it with the TXT record Google gives you (add it in your DNS, at Netlify or your registrar).
3. In **Sitemaps**, submit `sitemap.xml`.
4. In **URL inspection**, enter the home page address and click **Request indexing**. Do the same for `/fr/`.

Expect the site to appear for "global business model canvas" within a few days to a few weeks.

## 4. Links that make it rank (the most important step)

Google trusts a new site faster when known sites point to it. Ask Martial to:

- Add the URL to his LinkedIn: headline or **Featured** section, and a post presenting the canvas.
- Ask IRIIG and ITECH Lyon to link to it from his profile page or a resources page.
- Put the URL in the footer of his course slides, next to the canvas.
- Mention it in any article, conference talk or paper about the canvas.

## 5. Keep the domain

Turn on auto-renew, and when convenient transfer the domain to Martial's own account so he controls it.
