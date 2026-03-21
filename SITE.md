# How This Site Works

Built with [Astro](https://astro.build/), a static site generator. The site compiles to plain HTML/CSS with almost no client-side JavaScript. Deployed to Netlify.

## Running locally

```bash
npm install        # first time only
npx astro dev      # starts dev server at http://localhost:4321
npx astro build    # builds to dist/
npx astro preview  # previews the production build
```

## Project structure

```
src/
  content/         # all site content as Markdown files
    art/           # art pieces (.md or .mdx)
    projects/      # software projects (.md)
    blog/          # blog posts (.md)
    config.ts      # content collection schemas
  components/      # reusable Astro components
    TopBar.astro   # site header with nav
    FeedItem.astro # single item in a feed list
    FeedList.astro # list of feed items, supports filtering
  layouts/
    BaseLayout.astro  # HTML shell used by all pages
  pages/           # each file becomes a URL
    index.astro    # homepage (mixed feed of everything)
    art/
      index.astro       # art-only feed
      gallery.astro     # image grid view
      [...slug].astro   # art detail pages (generated from content)
    projects/
      index.astro       # projects-only feed
      [...slug].astro   # project detail pages
    blog/
      index.astro       # blog-only feed
      [...slug].astro   # blog post pages
    about.astro    # about page (hardcoded, not from content)
  styles/
    global.css     # all site styles
public/
  img/             # all images (copied as-is to the built site)
  favicon.png
```

## Adding content

### New blog post

Create a file in `src/content/blog/`, e.g. `my-post.md`:

```markdown
---
title: My post title
date: 2026-04-15
description: A short summary that appears in the feed.
---

Post content goes here. Regular Markdown.
```

### New art piece

Create a file in `src/content/art/`, e.g. `my-piece.md`:

```markdown
---
title: My Piece
date: 2026-04-15
thumbnail: /img/my-piece-thumb.jpg
images:
    - /img/my-piece-full.jpg
description: >
    A short description for the feed.
externalLinks:
    - label: fxhash
      url: https://www.fxhash.xyz/generative/12345
featured: false
exhibitions: []
---
```

Put images in `public/img/`. The thumbnail shows in the feed and gallery. If you want a detail page with a writeup, add Markdown body content below the `---` and rename the file to `.mdx`.

### New project

Create a file in `src/content/projects/`, e.g. `my-project.md`:

```markdown
---
title: My Project
date: 2026-04-15
thumbnail: /img/my-project.jpg
description: >
    What it is.
links:
    - label: Website
      url: https://example.com
featured: false
---
```

### Updating the about page

Edit `src/pages/about.astro` directly. It's not generated from content files.

## Deployment

Push to main. Netlify builds and deploys automatically.

## Styling

All styles live in `src/styles/global.css`. The color theme uses CSS custom properties defined in `:root` at the top of the file.

## Adding interactive content to posts

Blog posts and art writeups can use `.mdx` instead of `.md` to embed interactive components (e.g. live sketches). Regular Markdown covers most needs.
