# House Of BN — Website

A responsive, static landing page for House Of BN, an IT firm offering software development, Android application development, and Competency-Based Training and Assessment (CBT&A) for Level 04 and Level 05.

## Project files

```text
house-of-bn/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── house-of-bn-logo.png
```

## Preview locally

No build tools or dependencies are required.

1. Extract the project ZIP.
2. Open `index.html` in a modern browser.

For a local HTTP preview, run this command from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

1. Open `script.js`.
2. Replace `YOUR_EMAIL@example.com` in `CONTACT_EMAIL` with the real monitored contact email address.
3. Review the training details and add confirmed programme information if desired.
4. Add verified company contact details and social links only when available.

### Contact form behavior

The form validates required fields in the browser. It does not submit to a server, store information, or send anything automatically. Once `CONTACT_EMAIL` is replaced, a valid submission opens the visitor's default email application with a prefilled message. The visitor must review and send that email.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload the contents of this project folder (not the ZIP file).
2. Ensure `index.html` is in the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The site uses relative asset paths, so it supports repository subpaths.

## Design and implementation notes

- Deep navy, royal blue, white, and restrained silver/blue-grey palette.
- Supplied logo is retained as an asset and displayed proportionally.
- Semantic sections, skip link, keyboard-accessible mobile navigation, visible focus styles, form labels, validation feedback, and reduced-motion support are included.
- SEO title, description, viewport, theme color, and favicon are included.
- No backend, database, login, admin panel, fake testimonials, invented client references, or unverified company contact details are included.
- Google Fonts are loaded remotely; system sans-serif fallbacks are provided if the fonts cannot load.

## Known placeholders

- `YOUR_EMAIL@example.com` must be replaced before the contact form's email action can be used.
- Company address, phone, social profiles, detailed training schedules, entry requirements, and programme availability are intentionally omitted because they were not supplied.
