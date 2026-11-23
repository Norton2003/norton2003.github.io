# Riley Norton — Portfolio site

A static website: no build step and nothing to install. It runs on GitHub Pages, the same way as Lock-in.

## Put it online (one time, about 10 minutes)
1. On GitHub, create a new **public** repo named `your-username.github.io`. That name gives you the cleanest URL.
2. Upload everything in this folder to the repo: drag and drop works, or use GitHub Desktop.
3. Go to the repo's **Settings → Pages → Source: Deploy from a branch → main / (root)** and save.
4. After a minute, your site is live at `https://your-username.github.io`.
5. Optional: buy a domain (e.g. `rileynorton.com`) and enter it under **Settings → Pages → Custom domain**. Then follow GitHub's DNS instructions.

## Edit content
Almost everything lives in **`data/content.js`**:
- Replace the email, LinkedIn and GitHub placeholders at the top.
- Fill in the project fields marked "Describe…" or "Add…".
- Once your photos are in, set `showSlotPaths: false`. This hides the file names shown in empty photo slots.

## Add photos, videos and PDFs
Each empty slot on the site shows the exact file path it is waiting for. Save a file with that name and it appears automatically.

| What | Where |
|---|---|
| Headshot | `assets/images/portrait.jpg` (portrait, about 4:5) |
| Résumé | `assets/docs/Riley_Norton_Resume.pdf` |
| Project photos/videos | `assets/projects/<project>/...` |
| Welding photos/reel | `assets/welding/...` |
| Other PDFs (reports, certs, outlines) | `assets/docs/...` |

Tips:
- Use JPGs about 1600px wide, compressed to under ~500 KB each.
- Keep videos as MP4 under 25 MB. Longer videos go on YouTube: use `{ type: "youtube", src: "VIDEO_ID" }`.
- GitHub rejects files over 100 MB.
- Don't post anything covered by an NDA (internship work, sponsor data).

## Add a future project
Copy one `{ ... }` block in `projects` and paste it at the **top** of the list. Give it a new `id` and edit the fields. Make a folder `assets/projects/<id>/` for its media. Commit, and the site updates within a minute.

## Share a project directly
Each project has its own link: `your-site/#formula-heat-exchanger` opens straight to that case study. This is handy for a resume QR code or a LinkedIn "Featured" link.
