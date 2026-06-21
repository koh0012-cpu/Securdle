# Securdle

A daily Wordle-style guessing game for IT/security root-cause scenarios, in Easy and Hard modes.

## Why this structure

The answer data used to live in the page's JavaScript, which meant anyone could open dev tools
and read tomorrow's (and every) answer straight out of the source. This version moves the case
data (`netlify/functions/_shared/cases-data.js`) behind three serverless functions so the browser
never receives an answer until the round is actually over:

- `GET /api/get-case?mode=easy|hard` → today's clues only (no answer, no explainer)
- `GET /api/get-master-list?mode=easy|hard` → the full list of possible answers, for the
  autocomplete dropdown (safe — it doesn't say which one is today's)
- `POST /api/guess` `{ mode, guess, guessNumber }` → tells you if you're right, and only includes
  `answer`/`explainer` in the response once the round ends (a correct guess, or your 5th guess)

## Deploying to Netlify (free)

1. Create a GitHub repo and push this whole folder (`netlify.toml`, `netlify/`, `public/`) to it.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
   → connect the repo.
3. Netlify will read `netlify.toml` automatically:
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
   - No build command needed — it's a static page + functions, nothing to compile.
4. Click Deploy. You'll get a live URL like `https://your-site-name.netlify.app`.
5. (Optional) In Site settings → Domain management, you can add a custom domain or just rename
   the free `netlify.app` subdomain.

### Local testing before you deploy
If you install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`npm install -g netlify-cli`),
running `netlify dev` from this folder will serve `public/` and wire up `/api/*` to the functions
exactly like production, so you can play-test it on `localhost` first.

## Notes on the daily puzzle

The day number is computed from UTC midnight (`Date.UTC(2026, 0, 1)` = day 1), entirely on the
server. Easy and Hard cycle through their own lists independently (offset by 17) so they don't
land on the same numbered case. Per-browser progress/streaks are still stored in `localStorage`,
same as before — only the answer secrecy moved server-side.
