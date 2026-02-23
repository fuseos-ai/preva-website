# PREVA.ai Website

Official website for **PREVA** (formerly FuseOS) — *Your AI. Always.*

**Live URL:** [https://preva.ai](https://preva.ai)  
**Netlify URL:** [https://preva-ai.netlify.app](https://preva-ai.netlify.app)

## 🎨 Brand Identity (v1.3)

Based on the brand guidelines established Feb 22, 2026 by Nick Murray & Aria.

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Fallback:** Helvetica Neue, Arial, sans-serif
- **Wordmark:** Extra Bold (800), `letter-spacing: 14px` (or `0.3em` scaled)
- **Headings:** Extra Bold (800) / Bold (700)
- **Body:** Regular (400)

### Color Palette (Dark Hero)
- **Hero Dark (Bg):** `#1A1A2E` (Primary)
- **Surface Dark:** `#242438` (Cards)
- **Border Dark:** `#2E2E44` (Dividers)
- **White:** `#FFFFFF` (Text, Logo)
- **Muted Silver:** `#8A8A9A` (Secondary Text)
- **Sunlight:** `#E4C8A8` (Accent/CTA)

### Assets
- **Logo:** CSS-rendered text wordmark (no image file).
- **Icons:** Inline SVGs (monoline, sunlight accent).
- **Favicon:** White "P" on Hero Dark background (in `/favicon-*.png`).

## 🛠️ Technical Implementation

- **Stack:** Pure HTML5 / CSS3. No frameworks, no build step.
- **Hosting:** Netlify (Project ID: `a57a6ddf-febe-480c-b359-c71a24ea9f84`).
- **Deployment:** Auto-deploys from `main` branch.
- **DNS:** Netlify DNS (`dns1.p09.nsone.net` etc).
- **SSL:** Let's Encrypt (auto-provisioned by Netlify).

## 📂 File Structure

```text
/
├── index.html          # Single-page site (all styles inline for portability)
├── favicon-16x16.png   # Browser tab icon
├── favicon-32x32.png   # Retina tab icon
├── favicon-192x192.png # PWA/Android icon
└── PREVA-Brand-Guidelines-v1.3.pdf # Reference documentation
```

## 🚀 Deployment

To update the site, simply commit and push to `main`:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Netlify listens to the repo and deploys automatically (~10-20s).
