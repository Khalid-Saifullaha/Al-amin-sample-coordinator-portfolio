<div align="center">

# 🧵 Md. Al-Amin | Professional Sample Coordinator Portfolio

  <p align="center">
    <strong>A modern, high-performance, responsive portfolio platform tailored for garments & apparel product development liaison.</strong>
  </p>

  <p align="center">
    <a href="https://md-al-amin.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-md--al--amin.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Next.js-Architecture-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-Motion%20Engine-black?style=flat-square&logo=framer&logoColor=white" alt="Motion" />
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

  <br />

  <p align="center">
    <a href="#-project-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Architecture</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-contact--engineer">Author</a>
  </p>
</div>

---

## 🌟 Project Overview

This project is a bespoke, industry-targeted portfolio engineered for **Md. Al-Amin**, a dedicated **Garments Sample Coordinator** at Synergies Sourcing Bangladesh.

Rather than relying on generic creative templates, this application was architected from the ground up to reflect the exact operational requirements of the global apparel manufacturing industry:

- Translating complex buyer tech packs into tangible production workflows.
- Managing critical path timelines (Prototypes, SMS, Size Sets, and PP Approvals).
- Enabling frictionless liaison between international brands and floor pattern rooms.

---

## ✨ Key Features

- **🎯 Niche Industry Domain Presentation:** Structured showcase covering multi-style assortments, yarn-dyed programs, ribbed knit collections, and buyer "HOLD" resolution boards.
- **⚡ Ultra-Clean Dark Aesthetic:** Tailored high-contrast dark theme built with Tailwind CSS, utilizing warm amber accents for key interactive affordances.
- **🪄 Micro-Interactions & Transitions:** Fluid layout entrances, interactive hover elevations, and dynamic elements powered by `motion/react`.
- **📫 Secure Inquiry Pipeline:** Contact system integrated with Web3Forms API, routing buyer and business inquiries directly to the coordinator's verified inbox without exposing sensitive backend tokens.
- **💬 Instant Direct Liaison:** One-click WhatsApp pre-filled inquiry builder and instant clipboard actions for rapid buyer communication.
- **📱 Fully Responsive Layout:** Strict mobile-first and high-DPI desktop viewports with fluid grid hierarchies.

---

## 🛠 Tech Stack

| Category              | Technology                       |
| :-------------------- | :------------------------------- |
| **Framework & Core**  | React 19, Next.js / TypeScript   |
| **Styling & Design**  | Tailwind CSS, Lucide Icons       |
| **Animations**        | Motion (`motion/react`)          |
| **Forms & Inquiries** | Web3Forms Serverless Form Engine |
| **Tooling & Engine**  | Vite / Bun runtime               |
| **Hosting & CI/CD**   | Vercel Edge Network              |

---

## 📁 Project Structure

```text
├── public/                 # Static visual assets & favicons
├── src/
│   ├── assets/             # Garment samples, swatches, and showroom photography
│   ├── components/         # Reusable UI components
│   │   ├── ContactSection.tsx   # Direct inquiry form & quick liaisons
│   │   ├── Navbar.tsx           # Responsive header navigation
│   │   └── ...                  # Specialized showcase & timeline views
│   ├── data/
│   │   └── portfolioData.ts     # Master coordinator credentials & project datasets
│   ├── styles/             # Global Tailwind styling rules
│   └── App.tsx             # Root application orchestrator
├── .env.local              # Local environment secrets (ignored by Git)
├── package.json            # Dependencies and scripts manifest
└── vite.config.ts          # Build pipeline and bundling configuration
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/khalidsaifullaha/md-al-amin-portfolio.git
cd md-al-amin-portfolio
```

### 2. Install Dependencies

```bash
bun install
# or
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run Development Server

```bash
bun run dev
# or
npm run dev
```

Open your browser at `http://localhost:3000` to preview the site.

### 5. Build for Production

```bash
bun run build
# or
npm run build
```

---

## 🔒 Security Best Practices

- Environment variables are isolated via `.env.local` and never committed to the public Git tree.
- Deployment builds ingest the API keys securely via **Vercel Project Settings > Environment Variables**.

---

## 👨‍💻 Engineer & Author

Designed, architected, and built with precision by **Khalid Saifullah**.

- **GitHub:** [@khalidsaifullaha](https://github.com/Khalid-Saifullaha)
- **LinkedIn:** [Khalid Saifullah](https://www.linkedin.com/in/khalid-saifullaha/)
- **Direct Mail:** [khalidsaifullaha3@gmail.com](mailto:khalidsaifullaha3@gmail.com)
- **Live Deployment:** [https://md-al-amin.vercel.app](https://md-al-amin.vercel.app)

---

<div align="center">
  <sub>Crafted with passion, modern frontend standards, and industry precision. ⭐ Star this repo if you find it helpful!</sub>
</div>
