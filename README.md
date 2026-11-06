# Pingo – Premium Modern-Glassy SaaS Website

A modern, dark-themed SaaS website built for **Pingo** with Next.js (App Router), React, TypeScript, and Tailwind CSS. The design strictly follows Pingo's dark visual identity, glassmorphism aesthetics, controlled purple glows, and neon-green accents.

## ✨ Features

- **Exact Visual Identity**: Faithful reproduction of the dark-themed Pingo homepage reference screenshot.
- **Glassmorphic UI**: Custom backdrop blurs, soft translucent borders, and restrained glow effects (`#782BFF`, `#A855F7`, `#B5FF45`).
- **Original Brand Assets**: Direct reuse of the high-fidelity 3D Pingo robot mascot with purple headphones, brand chest mark, and floating labels (*Talk*, *Chat*, *Information*, *Support*), as well as the original 3D Pingo wordmark.
- **Clean Navigation**:
  - Root route `/` loads the homepage by default.
  - Interactive **Features Dropdown** featuring 5 platform capabilities (*Live Chat*, *AI Agents*, *Channels*, *Voice Call*, *Integrations*) with smooth desktop hover and mobile tap support.
  - Dedicated **About Pingo** page (`/about`).
  - Resources section housed exclusively in the footer.
  - Quick-action "Get Started" CTA.
- **Homepage Overview**:
  - Hero section featuring real-time AI value proposition and interactive CTA buttons.
  - Four glassmorphic overview cards (*Talk & Chat*, *Information*, *Customer Service*, *Operations*).
  - Clean layout with the bottom promotional banner omitted as requested.
- **Comprehensive About Pingo Page (`/about`)**:
  - Section 1: About Pingo (Hero & narrative)
  - Section 2: What We Do (6 core capabilities grid)
  - Section 3: Our Vision
  - Section 4: Our Mission
  - Section 5: Who We Are (UIAI Technologies background)
  - Section 6: Why Pingo? (5 value pillars)
- **Dedicated Contact Us Page (`/contact`)**:
  - Full interactive Get in Touch contact section with name, email, and inquiry form.
- **Scalable UI Architecture**:
  - Centralized design tokens via CSS variables (`globals.css`).
  - Separation of content and presentation (`data/` layer for navigation, footer, features, and about content).
  - Reusable components for buttons, cards, and navigation.

---

## 🎨 Color Palette & Design Tokens

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| **Midnight Background** | `#080711` | Primary deep page background |
| **Secondary Background** | `#100D1D` | Alternating section depth |
| **Card Background** | `#141126` | Glassmorphic card base |
| **Primary Purple** | `#782BFF` | Main brand accent and primary buttons |
| **Violet** | `#A855F7` | Gradient text highlights and glows |
| **Deep Purple** | `#4C16B8` | Gradient depth and shadows |
| **Neon Green** | `#B5FF45` | Status dots, badge borders, and highlights |
| **White** | `#FFFFFF` | Primary headers and high-contrast text |
| **Secondary Text** | `#D5D0E5` | Body copy and descriptions |

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS & CSS Custom Properties (`globals.css`)
- **Icons**: Lucide React
- **Animations**: CSS transitions & smooth hover interactions
- **Version Control**: Git & GitHub

---

## 📁 Project Architecture

```
Pingo3/
├── app/
│   ├── about/
│   │   └── page.tsx            # Dedicated About Pingo page
│   ├── contact/
│   │   └── page.tsx            # Dedicated Contact Us page
│   ├── globals.css             # Centralized design tokens and glass styles
│   ├── layout.tsx              # Root layout with shared Navbar and Footer
│   └── page.tsx                # Homepage (Hero + Feature Overview)
├── components/
│   ├── common/
│   │   ├── Button.tsx          # Reusable button with variants
│   │   ├── FeaturesDropdown.tsx# Accessible desktop hover & mobile dropdown
│   │   ├── Footer.tsx          # Reusable footer
│   │   └── Navbar.tsx          # Responsive navigation bar
│   ├── home/
│   │   ├── FeatureCard.tsx     # Glassmorphic overview card
│   │   ├── Hero.tsx            # Hero section with 3D mascot
│   │   └── HomeFeatureSection.tsx # 4-card overview section
│   ├── about/
│   │   ├── AboutHero.tsx       # About hero with telemetry card
│   │   ├── MissionSection.tsx  # Mission statement
│   │   ├── VisionSection.tsx   # Vision statement
│   │   ├── WhatWeDo.tsx        # 6 core capabilities
│   │   ├── WhoWeAre.tsx        # UIAI Technologies backing
│   │   └── WhyPingo.tsx        # 5 value differentiators
│   └── contact/
│       ├── ContactSection.tsx  # Get in Touch interactive form
│       └── EnquirySection.tsx  # Reusable For Enquiries company info
├── data/
│   ├── about.ts                # About page content configuration
│   ├── enquiry.ts              # For Enquiries company data configuration
│   ├── features.ts             # Feature cards & dropdown data
│   ├── footer.ts               # Footer & social links configuration
│   └── navigation.ts           # Navigation structure
├── public/
│   └── images/
│       ├── pingo-logo.png      # Original Pingo wordmark
│       ├── pingo-p.png         # 3D Purple P icon
│       └── pingo-robot.png     # 3D Mascot with floating badges
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested with Node 20 / 24)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Pingo3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📄 License & Attribution

- Built as a product of **UIAI Technologies**.
- © 2026 Pingo. All rights reserved.

