# PREVA.ai Website

Official website for **PREVA** (formerly FuseOS) — *Your AI. Always.*

**Live URL:** [https://preva.ai](https://preva.ai)  
**Netlify URL:** [https://preva-ai.netlify.app](https://preva-ai.netlify.app)

## 🚀 Deployment

**Deploy via Netlify CLI (NOT git push):**

```bash
cd ~/clawd/preva-website
npx netlify-cli deploy --prod --dir=.
```

> ⚠️ Git push does NOT auto-deploy. You must use the Netlify CLI.

**Netlify Project ID:** `a57a6ddf-febe-480c-b359-c71a24ea9f84`  
**Netlify Account ID:** `697a51fbe4ce5254fc04f104`

## 🎨 Brand Identity (v1.3)

Based on the brand guidelines established Feb 22, 2026 by Nick Murray & Aria.

### Typography
- **Primary Font:** Inter (Google Fonts)
- **Fallback:** Helvetica Neue, Arial, sans-serif
- **Wordmark:** Extra Bold (800), `letter-spacing: 14px` (or `0.3em` scaled)
- **Headings:** Extra Bold (800) / Bold (700)
- **Body:** Regular (400)

### Color Palette (Dark Hero)
| Token | Hex | Usage |
|-------|-----|-------|
| `--hero-dark` | `#1A1A2E` | Primary background |
| `--surface-dark` | `#242438` | Cards, chat window |
| `--border-dark` | `#2E2E44` | Dividers, borders |
| `--white` | `#FFFFFF` | Primary text, logo |
| `--muted` | `#8A8A9A` | Secondary text |
| `--sunlight` | `#E4C8A8` | Accent, CTAs, particles |
| `--sunlight-dim` | `rgba(228,200,168,0.15)` | Subtle glows |

### Assets
- **Logo:** CSS-rendered text wordmark "PREVA" (no image file)
- **Icons:** Inline SVGs (monoline, sunlight accent)
- **Favicon:** White "P" on Hero Dark background

## ✨ Interactive Features (v3 — Feb 23, 2026)

| Feature | Description |
|---------|-------------|
| **Particle Constellation Hero** | Canvas-based particle system with inter-particle connections, warm gold glow |
| **"The Awakening"** | Particles assemble from center on first load, tagline types out character by character |
| **Memory Timeline Scroll** | Day One → Week One → Month One → Always, each with mini canvas visualization |
| **Scroll Reveal Animations** | All sections fade up + slide on viewport entry via Intersection Observer |
| **Kinetic Typography** | Headlines animate in with stagger reveal, key words pulse with glow |
| **Living Feature Cards** | Subtle breathing/float animation, hover lift with box-shadow |
| **"Welcome Back" Returning Visitor** | localStorage check — first visit: awakening animation; return visit: "Welcome back." |
| **"Ask PREVA" Chat FAQ** | Chat window interface with typing indicator, 12 clickable question pills |
| **Pull Quote Section** | Full-width editorial quote with radial gradient glow |
| **Footer Constellation** | Canvas particle network that slowly contracts toward center |
| **Neural Pulse Transitions** | Gradient lines expand from center when sections enter viewport |
| **prefers-reduced-motion** | All animations respect reduced motion preference |

## 🛠️ Technical Stack

- **Stack:** Pure HTML5 / CSS3 / Vanilla JS — no frameworks, no build step
- **Hosting:** Netlify (auto-SSL via Let's Encrypt)
- **DNS:** Netlify DNS
- **Animations:** CSS @keyframes, transitions, Intersection Observer API, HTML5 Canvas
- **No external dependencies** — everything is inline in a single HTML file

## 📂 File Structure

```
/
├── index.html              # Single-page site (all code inline)
├── favicon-16x16.png       # Browser tab icon
├── favicon-32x32.png       # Retina tab icon
├── favicon-192x192.png     # PWA/Android icon
├── assets/                 # Static assets
├── js/                     # Legacy JS (not used in current version)
├── PREVA-Brand-Guidelines-v1.3.pdf  # Brand reference
└── README.md               # This file
```

## 📝 Version History

| Date | Version | Changes |
|------|---------|---------|
| Feb 22, 2026 | v1.0 | Initial launch — static site with Three.js hero |
| Feb 23, 2026 | v2.0 | Full copy rewrite by Aria — narrative style, waitlist-only |
| Feb 23, 2026 | v3.0 | Interactive prototype — particles, chat FAQ, scroll animations, welcome back |

## ⚠️ Important Notes

- **This repo is for preva.ai ONLY.** fuseos.ai has its own repo (`fuseos-ai/fuseos-website`).
- **Do NOT alter fuseos.ai** from this repo.
- **Brand colors use warm gold (#E4C8A8), NOT purple.** This is intentional.
- **The site is a single HTML file** with all CSS and JS inline for maximum portability.
