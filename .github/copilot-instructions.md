# Copilot instructions for this repository

Purpose
-------
This file gives repository-specific guidance for future Copilot sessions and other AI assistants to work effectively in this Jekyll site repository. It also includes publishing and research notes used during the 2026-07-25 content session so assistants can continue the same workflow.

1) Build, test, and lint commands (exact)
---------------------------------------
- Install dependencies (local dev):
  - ruby + bundler recommended (rbenv or system ruby)
  - bundle install

- Bootstrap (project-provided):
  - ./script/bootstrap
    - Installs bundler and jekyll, then runs `bundle install`.

- Local preview (serve):
  - bundle exec jekyll serve
    - Serves the site at http://localhost:4000 by default (auto-regenerates).

- Full site build (CI / static output):
  - bundle exec jekyll build
  - OR use the project script: ./script/cibuild (runs bundle install + jekyll build)

- Single-post / single-page quick check (lightweight "single test"):
  - bundle exec jekyll build && grep -R "<Post Title or unique text>" _site || echo "not found"
  - Or build then curl the local server path: curl -fsS http://localhost:4000/path/to/page

- Dependency / vulnerability checks (as referenced in README):
  - gem install bundle-audit
  - bundler-audit download
  - bundler-audit check .

- CI-specific extras (used in .travis.yml):
  - The Travis script runs `./script/cibuild` and then executes a gitleaks scan:
    - bash <(curl -s https://raw.githubusercontent.com/zricethezav/gitleaks-ci/master/gitleaks.sh)

Notes: there is no dedicated unit test runner or linter configured in the repo. If tests are added, prefer adding a thin script in /script and documenting how to run a single test file.

2) High-level architecture (big picture)
----------------------------------------
- Static site generator: Jekyll (site built from markdown in `_posts`, content folders and `_layouts`).
- Key content locations:
  - Pages: root .html files (index.html, about.html, etc.)
  - Posts: _posts/*.md
  - People collection: _people/*.md
  - Products: _products/* (organized by type subfolders)
  - Certifications: _certifications/*
  - Static assets: /images, /css (scss in css/screen.scss)
  - Layout templates: _layouts/*.html
  - Data files: _data/*.yml (navigation, footer used in layouts)
- Build flow:
  - `bundle exec jekyll build` reads content, applies layouts and plugins (see Gemfile) and writes a static site to `_site/`.
  - `bundle exec jekyll serve` runs a local server and watcher.
- Plugins used (Gemfile): jekyll-archives, jekyll-paginate, jekyll-sitemap, jekyll-seo-tag, jekyll-feed; these affect routing, feeds, and site metadata.

3) Key repository conventions (specific patterns)
------------------------------------------------
- Post front matter conventions (observed):
  - date, title, categories (array), author_people, comments: true|false
  - Use category names like `Success-Story`, `Market-Insight` where applicable.
- People collection: each person has a .md in _people/ and templates include `relative-src.html` for image and link resolution — follow existing pattern for new people entries.
- Product organization: create new product pages under `_products/<category>/Name.md` and follow existing front matter patterns.
- Image handling:
  - Images live in /images. README includes an example resizing command using ImageMagick; filenames should avoid spaces (README includes a helper command to rename files with spaces to underscores).
- Scripts:
  - script/bootstrap — install dependencies
  - script/cibuild — canonical build used by CI; prefer invoking this in automation rather than duplicating steps.
- CI & security:
  - .travis.yml exists and uses Ruby 2.3.0 + script/cibuild and a gitleaks scan. Dependabot config exists at .github/dependabot.yml (needs enabling/configuring).
- Commit metadata:
  - When making commits via automation that will be pushed to the repository, include the Co-authored-by trailer if following project policy (used by Copilot commits elsewhere). Ensure that automated commits include valid authorship and no sensitive data.

4) Where to look when creating new posts or editing content
----------------------------------------------------------
- Check `_layouts/post.html` (layout used for posts) for required front matter and markup.
- Use `_data/navigation.yml` and `_data/footer.yml` to keep navigation and footers consistent.
- For testimonials or farmer stories, reference existing `_posts/2021-09-26-Testimonial.md` and `_posts/2018-07-14-Grub-Guard.md` for tone, formatting, and inclusion of downloadable PDFs.

5) Assistant-specific behaviors to follow
----------------------------------------
- Preserve front matter fields and existing categories; do not invent new top-level fields without checking layouts.
- When adding images, update references using the same include used in `people.html` (`relative-src.html`) where applicable.
- Do not commit binary assets or large media without an explicit LOCALLY tracked process (add to LFS or host externally) — repository currently stores images directly, but keep file sizes reasonable.
- If adding automated checks or new CI steps, put scripts in `/script/` and reference them from CI (maintain the existing pattern).

6) Helpful quick commands
------------------------
- Preview new post locally:
  - bundle exec jekyll serve --watch
  - open browser to http://localhost:4000 and inspect the post URL (or use curl to fetch a specific path)
- Reproduce CI build locally:
  - ./script/cibuild
- Check for missing front matter or broken links (manual approach):
  - bundle exec jekyll build && grep -R "<broken|WARNING|ERROR>" _site || true

7) Files and configs to check before opening a PR
-------------------------------------------------
- Gemfile / Gemfile.lock (update via `bundle install` and commit lockfile if changing gems)
- Any new scripts in /script (ensure executable bit + documentation in README)
- Images referenced in posts are uploaded to /images and named without spaces
- If adding external citations or PII (farmer contacts), confirm permissions and redact contact info unless authorized

8) AI/assistant configs discovered and incorporated
---------------------------------------------------
- Dependabot config: .github/dependabot.yml (needs proper ecosystem value)
- No other AI assistant rule files (CLAUDE.md, .cursorrules, AGENTS.md etc.) were found. If such files are added, include them here.

9) Publishing & Research notes (session: 2026-07-25)
---------------------------------------------------
This section documents the research, outputs, and recommended follow-ups from the content session run on 2026-07-25. Keep this updated when future content sessions are run so Copilot and other assistants can pick up context quickly.

What was done on 2026-07-25
- Read the live site content (local repo): index.html, about.html, people.html, product pages, README.
- Located and reviewed on-site success stories and testimonials:
  - _posts/2021-09-26-Testimonial.md (BioBlight — R. Chetan Nandan, Kamala Farms)
  - _posts/2018-07-14-Grub-Guard.md (Krishi - GrubGuard white-grub control)
- Created a new blog post draft: _posts/2026-07-25-Soil-to-Sale-Gokulam-Market-Insight.md
  - Focus: market context, farmer pain points, product benefits, simple ROI checklist, trial guidance, and case stories.
- Performed targeted web lookups for market context (high-level): biofertilizer market growth, liquid formulation advantages, state support and buyer demand. (Detailed citations can be added on request.)

Key site facts & messaging (authoritative)
- Brand position: "Pioneers in liquid formulations of biofertilizers, biopesticides and biofungicides."
- Messaging hooks on the site: "No Chemicals and No Side Effects", "Improve your harvest using organic products".
- Technical claim: liquid formulations with shelf life > 1 year (used in product copy).
- Products and kits exist for specific crops (banana, sugarcane, pomegranate cases highlighted).

Market insights (summary)
- Macro demand: buyers and export markets increasingly require low-residue produce, favoring biological inputs.
- Adoption drivers: government promotion, exporter requirements, farmer interest in lowering chemical cost and improving soil health.
- Product advantages to emphasize: easy dosing, longer shelf life (liquid), integrated crop-specific kits, local advisory support.

Files touched
- index.html
- about.html
- people.html
- README.md
- _posts/2021-09-26-Testimonial.md
- _posts/2018-07-14-Grub-Guard.md
- _posts/2026-07-25-Soil-to-Sale-Gokulam-Market-Insight.md (new)

Practical next steps (recommended)
1. Add 2–3 verified market stats and cite sources (Fortune Business Insights, IMARC, Mordor, ICAR, NCOF) to strengthen the Market snapshot.
2. Build a one-page ROI calculator (spreadsheet or embedded markdown table) for 2 priority crops (e.g., pomegranate, sugarcane).
3. Collect/obtain permissions for farmer photos and short quotes. Add photos to /images and include alt text + credits.
4. Create a short social kit: 2–3 shareable lines and a 60–90s farmer video script.
5. Add metadata (og:image, twitter:card) to post front matter for improved sharing.
6. Run a local test: `bundle exec jekyll serve` and validate the new post under /_site.

How to add future posts (quick template)
Create a new file in `_posts/` with this front matter header:

```
---
date: 2026-07-26
title: "Post Title"
categories:
  - Success-Story
  - Market-Insight
author_people: prabhakaran
comments: true
---
```

Write a short lead, a 5–8 item checklist / action, and include a pull quote or farmer testimonial. Keep reading time ~5–10 minutes.

Research & citation checklist (for each post)
- 2–3 market sources (report + URL)
- 1–2 farmer testimonials (written permission + contact)
- 1 product page link on site
- 1 supporting technical note or extension source (e.g., ICAR)
- Save raw source links to the repo or the session inbox_entries table for later tracking.

Publishing workflow (suggested)
1. Draft locally in `_posts/`.
2. Preview: `bundle exec jekyll serve` and inspect locally.
3. Commit to a feature branch: `git checkout -b post/feature-name`.
4. Push and open a PR describing source links and approvals; include the Co-authored-by trailer if desired.
5. Merge and monitor traffic for 2 weeks; amplify via social and distributor newsletters.

Notes & reminders
- Always ask for explicit permission before publishing farmer photos or identifiable contact info.
- Keep product claims aligned with existing site wording or R&D-confirmed language.
- When adding market stats, prefer public government / academic sources first, then paid research citations.

If you want, next action items can be automated as todos in the session DB (collect citations, build ROI sheet, request photos). Tell me which to start.

10) Files and configs to check before opening a PR
-------------------------------------------------
- Gemfile / Gemfile.lock (update via `bundle install` and commit lockfile if changing gems)
- Any new scripts in /script (ensure executable bit + documentation in README)
- Images referenced in posts are uploaded to /images and named without spaces
- If adding external citations or PII (farmer contacts), confirm permissions and redact contact info unless authorized

11) AI/assistant configs discovered and incorporated
---------------------------------------------------
- Dependabot config: .github/dependabot.yml (needs proper ecosystem value)
- No other AI assistant rule files (CLAUDE.md, .cursorrules, AGENTS.md etc.) were found. If such files are added, include them here.

Summary
-------
This file documents exact build commands, CI scripts, content and asset conventions, publishing session notes, and practical checks used day-to-day in this Jekyll site repo. Use `./script/bootstrap` and `./script/cibuild` for consistent local/CI behavior and follow the post/front-matter patterns found in `_posts` and `_layouts`.

Would you like me to configure any MCP servers (e.g., Playwright for front-end checks) for this project now? If yes, say which checks you want automated and I will add recommended MCP server settings and scripts.

If you want changes to the file (add a checklist for PR reviewers, add a sample post front-matter template, or include a small ROI spreadsheet generator), tell me which area to expand.