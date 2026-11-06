# irangareddy.in

A Vite + React personal website inspired by the restrained editorial feel of [luthira.com](https://www.luthira.com/), adapted into a reusable one-page layout for your own domain.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Personalize the content

Update the copy in `src/content.js`:

- name and email
- intro paragraphs
- featured work and wall topics
- contact links

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Vercel will detect Vite automatically.
4. Use `npm run build` as the build command if you want to override defaults.
5. Deploy.


## Portfolio homepage

Current local baseline approved on 2026-11-06: preserve the visible written biography, its text/tokens switch, the two-font pairing (instrument sans and courier prime), the lowercase layout, sage filter borders, inline project disclosures, and the realistic panda's walking/resting/bamboo behaviors. Restore point: `portfolio-panda-baseline-2026-11-06`. Earlier baseline tags preserve previous designs. Keep future visual experiments on a separate branch until requested. This local baseline has not been published.

The text-first homepage is the complete portfolio. The short biography is visible directly beneath the name, with a small text/tokens switch. Project rows expand in place to show attribution, the full description, and a public destination when one is available. The searchable code archive is a collapsible section below the list. Notes live at `/wall` and are linked from the footer.

Visible copy is lowercase, including technology labels, repository display names/languages, and the GPT token caption. Keep canonical casing in source metadata, identifiers, and destination URLs. The biography's credentials use full words on two lines rather than degree abbreviations.

- `src/work.js`: grouped work entries, with team/prototype/coursework attribution and public links.
- `src/content.js`: biography and featured entries selected from the complete work record.
- `src/repositories.json`: public GitHub repository snapshot from November 2026. Forks are marked; no private repository metadata is included.

The archive includes learning repositories and tutorials. Its repository count is not a shipped-product count. The candidate authorized naming and linking Beet on 2026-11-05. Keep client details and private repository URLs out of public content. Do not update LinkedIn without a separate request.


### In-place work filters

The homepage defaults to Featured. All includes every documented work entry. Category chips and the Open source filter update the homepage list in place.

Muted sage (`#B8C7B2`) marks only the selected filter's border and successful email-copy checkmark. Technology labels stay neutral and appear inside expanded project details. `technologies` in `src/work.js` records stacks supported by the project description or verified career master; omit labels when the stack is not documented.

Old `/work` URLs resolve to the homepage; project fragments select the full list and open the matching entry. The old `/work#context` URL opens the biography. Email can be opened normally or copied with the adjacent button, which confirms success or displays the address if clipboard access fails. Icons use Hugeicons' free Stroke Rounded set through `@hugeicons/react`. Filters update immediately; only their surface, link arrows, disclosure chevrons, and the cat respond with brief feedback. Keyboard link feedback is immediate, and `prefers-reduced-motion` disables animation and transitions.

Open source is an overlapping facet: it includes work entries with a verified public repository and an identified MIT or Apache-2.0 license in the November 2026 review. A public GitHub URL alone does not set the flag. Update `openSource` and `license` in `src/work.js` when licensing changes. The 124-repository archive remains separate and includes clearly marked forks and learning repositories.

### GPT token biography

The approved visible biography has an optional token view. Its boundaries and IDs come from OpenAI's Python `tiktoken` library using `o200k_base`, encoded across the complete biography including paragraph separators. Phrase links wrap consecutive tokens without merging or recoloring token boundaries. All token colors are scoped to the biography; plain text remains the default.

The generated `src/bio-tokens.json` ships only the small bio token sequence, not the tokenizer vocabulary. Builds verify it still matches `intro` and reconstructs the original text. After editing the bio, install `scripts/requirements-tokenizer.txt` in a Python environment and run `npm run tokenize:bio`. Ordinary builds require only Node and the checked-in token data. Hovering a token shows its ID.

### Panda character

`src/PandaPet.jsx` and `src/PandaPet.css` animate six generated, fur-textured giant-panda poses from `public/panda-realistic-walk.png`. The panda walks on four paws and turns at the screen edges. After roughly half a minute it lowers itself, sits for a short rest, eats bamboo, stands, and resumes its paused walking path. Clicking it offers bamboo immediately. Sitting, blinking, eating, and rising poses come from `public/panda-realistic-behaviors.png`; natural pauses vary slightly between cycles. Its fixed bottom position is exactly zero; per-frame crop offsets align the weight-bearing paws directly with the viewport's bottom edge, without a bottom margin or padding. The source sprite sheet stays unmodified. Sizing and travel duration adapt to viewport width, and reduced-motion preferences show a stationary pose. This version is committed locally and has not been published.
