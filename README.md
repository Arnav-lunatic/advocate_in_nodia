# Advocate in Noida — Professional Law Firm Website

An authoritative, premium, and fully responsive digital showcase for **Advocate Jasvir Singh**, an esteemed legal counsel practicing in Noida, Greater Noida, Bulandshahr, and surrounding jurisdictions. 

This website is engineered for maximum performance, clean code modularity, and search engine dominance. It presents a streamlined interface that couples cinematic visual aesthetics with conversion-focused, authoritative legal content.

---

## 🌟 Key Features

- **Framework Architecture:** Built on **Astro** for static-site optimization and near-zero clientside JavaScript overhead.
- **Premium Design System:** Handcrafted using **Vanilla CSS**, featuring modern gradients, sleek shadows, glassmorphism UI accents, and high-quality legal hero visuals.
- **Service Center Expansion:** Eight fully integrated, structurally identical legal service pages, including:
  1. ⚖️ **Criminal Lawyer:** Courtroom trials, regular/anticipatory bails, and FIR quashing petitions.
  2. 🌐 **Cyber Crime Lawyer:** Phishing, online scams, data privacy breaches, and IT Act complaints.
  3. 🏢 **Corporate & Industrial Disputes:** Partnership agreements, NCLT insolvency, commercial contracts, and labor tribunals.
  4. 🛍️ **Consumer Protection:** Product liability, deficient services, builder disputes, and insurance claims.
  5. 📜 **Civil Dispute Lawyer:** Partition suits, recovery suits, permanent injunctions, landlord-tenant, and Wills.
  6. 🔑 **Property Registration:** Sale deed execution, due diligence title verification, mutations, and sub-registrar liaisoning.
  7. ✒️ **Notary Public:** certified notarizations of affidavits, GPA/SPA deeds, and certified copy attestations.
  8. 🏗️ **RERA Lawyer:** Protection under the RERA Act, possession delays, refund interest decrees, and DM recovery executions.
- **Local SEO Optimized:** Hand-tailored meta titles, semantic HTML hierarchy (H1/H2), keyword density controls, and targeted city indexing ("Lawyer in Noida").
- **Dynamic Meta Management:** Centralized `<Layout>` component configured to receive page-specific page titles and descriptions for maximum crawl relevance.
- **Interactive Navigation & CTAs:** Complete desktop services hover navigation, a responsive slide-out drawer menu for mobile visitors, and persistent floating communication anchors (WhatsApp and direct calling).

---

## 📂 Codebase Architecture

```filepath
advocate_in_nodia/
├── public/                  # Static assets served at the root URL
│   ├── favicon.ico          # Browser tab shortcut icon
│   ├── favicon.svg          # High-resolution vector icon
│   └── images/              # Premium generated cinematic legal service hero images
│       ├── civil_lawyer_hero.png
│       ├── consumer_protection_hero.png
│       ├── corporate_disputes_hero.png
│       ├── criminal_lawyer_hero.png
│       ├── cyber_crime_hero.png
│       ├── notary_lawyer_hero.png
│       ├── property_registration_hero.png
│       └── rera_lawyer_hero.png
│
├── src/
│   ├── assets/              # Local media assets processed by Astro pipelines
│   ├── components/          # Reusable UI sections and layout templates
│   │   ├── CivilLawyers.astro          # Civil Lawyers detail component
│   │   ├── ConsumerLawyers.astro       # Consumer Protection details
│   │   ├── ContactUs.astro             # Dedicated contact & enquiry forms
│   │   ├── CorporateLawyers.astro      # Corporate disputes details
│   │   ├── CriminalLawyers.astro       # Criminal defense details
│   │   ├── CyberLawyers.astro          # Cyber Law details (Gold standard)
│   │   ├── FloatingContactButtons.astro# persistent float icons (Call & WhatsApp)
│   │   ├── Footer.astro                # Site-wide semantic footer component
│   │   ├── HeroSection.astro           # Homepage primary hero banner
│   │   ├── NavBar.astro                # Mobile-drawer & desktop menu nav bar
│   │   ├── NotaryLawyers.astro         # Notary public attestation details
│   │   ├── PropertyRegistration.astro  # Vetting & registration details
│   │   ├── ReraLawyers.astro           # RERA buyer disputes details
│   │   ├── ServicesSection.astro       # Grid of legal service highlight cards
│   │   └── TeamSection.astro           # Professional profiles
│   │
│   ├── layouts/
│   │   └── Layout.astro     # Main shell layout receiving title & description props
│   │
│   ├── pages/               # File-based routing folder (Astro Pages)
│   │   ├── about.astro                 # About Advocate Jasvir Singh page
│   │   ├── civil-lawyers.astro         # /civil-lawyers route
│   │   ├── consumer-lawyers.astro      # /consumer-lawyers route
│   │   ├── contact.astro               # /contact route
│   │   ├── corporate-lawyers.astro     # /corporate-lawyers route
│   │   ├── criminal-lawyers.astro      # /criminal-lawyers route
│   │   ├── cyber-lawyers.astro         # /cyber-lawyers route
│   │   ├── index.astro                 # Homepage route (/)
│   │   ├── notary-lawyer.astro         # /notary-lawyer route
│   │   ├── property-registration.astro # /property-registration route
│   │   └── rera-lawyer.astro           # /rera-lawyer route
│   │
│   ├── scripts/             # Client-side helper scripts
│   └── styles/
│       └── global.css       # Core typography variables and global reset styles
│
├── astro.config.mjs         # Astro compiler and asset configuration file
├── package.json             # Build dependencies and utility script hooks
└── tsconfig.json            # Strict TypeScript compilation rules
```

---

## 🛠️ Getting Started

Follow these instructions to spin up the local development server or compile the site for production.

### Prerequisites

Ensure you have **Node.js** (v18.x or higher) and **npm** installed on your workstation.

### Installation

Clone your repository locally, navigate into the project root directory, and fetch all package dependencies:

```bash
# Install required dependencies
npm install
```

### Development Server

Launch the hot-reloading development environment to view layout modifications immediately:

```bash
# Starts local server at http://localhost:4321
npm run dev
```

### Production Compile

Build a highly optimized static bundle inside the `/dist` directory, fully primed for deployment to static hosts like Netlify, Vercel, Firebase Hosting, or Apache servers:

```bash
# Compiles pages to static HTML/CSS structure
npm run build
```

### Local Preview

Verify the production build locally before executing remote deployment routines:

```bash
# Serves the compiled dist folder locally
npm run preview
```

---

## 🔍 SEO & Meta Architecture

Every page on this site utilizes a structured, schema-ready metadata format inside [Layout.astro](file:///Users/akshuavr/Code/advocate_in_nodia/src/layouts/Layout.astro):

```astro
<!-- Under the page's Astro frontmatter block -->
<Layout 
  title="Criminal Lawyer in Noida | Criminal Defense & Bail | Advocate Jasvir Singh"
  description="Need immediate bail or facing criminal charges? Contact Advocate Jasvir Singh, a top-rated criminal defense lawyer in Noida with 18+ years of court trial experience."
>
  <NavBar />
  <CriminalLawyersSection />
  <Footer />
</Layout>
```

### Core Image Guidelines
To maintain fast load-times (Core Web Vitals) and visual excellence:
- Keep all hero banner dimensions standard across pages.
- Hero images are located in `/public/images/` and must be compressed (WebP/PNG formats) under 300KB where possible.
- Each service page includes an optimized `alt` attribute describing the visual setting for accessibility and search crawls.

---

## ⚖️ Legal Disclaimer

The information provided on this website does not, and is not intended to, constitute formal legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Readers should contact their legal counsel to obtain advice with respect to any particular legal matter.
