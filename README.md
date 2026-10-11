# Mikhael Victor Official Website V1

A production-quality, responsive, bilingual personal brand website for **Mikhael Victor** (Spiritual Guidance · Energy Wellness · Conscious Living).

Created with **Next.js App Router (v16)**, **TypeScript**, **Tailwind CSS (v4)**, **Lucide Icons**, and modern luxury editorial aesthetics.

---

## ✧ Brand & Design Direction

- **Brand:** MIKHAEL VICTOR
- **Tagline (EN):** *Awaken Awareness. Restore Harmony. Transform Within.*
- **Headline (ZH):** *回到内在，遇见更清晰的自己。*
- **Aesthetic Ratio:** **Modern Spiritual Luxury** (70% Professional Personal Brand, 20% Premium Lifestyle Editorial, 10% Ethereal Light).
- **Color Palette:**
  - Warm Ivory (`#FAF9F6`)
  - Deep Plum (`#332748`)
  - Muted Lavender (`#ADA0BE`)
  - Champagne Gold (`#B99C72`)
  - Soft Sage (`#A7B4A5`)
  - Charcoal Body Text (`#28252C`)
- **Typography:** Editorial Serif headings (`Playfair Display` / `Noto Serif SC`) paired with clean contemporary Sans-serif body (`Plus Jakarta Sans` / PingFang SC / system fallbacks).
- **Core Stance & Ethics:** Strict non-medical framing. Spiritual concepts, angel card readings, ALT therapy, flower essences, and meditation are presented as personal contemplative practices and practitioner philosophy. Zero fabricated credentials, fake testimonials, or unsubstantiated medical claims.

---

## ✧ Complete Site Structure (10 Pages)

| Route | Page | Key Content |
|---|---|---|
| `/` | **Home** | Hero with authentic portrait placeholder, trust strip, about preview, 5 services, interactive path selector, private sessions pricing, I.S.G.A roadmap, 1996–2006+ timeline, sample insights, final CTA. |
| `/about` | **About Mikhael Victor** | Full bilingual biography, 12 international teaching locations (Klang, KK, Muar, Malacca, Penang, Singapore, HK, Taiwan, Brunei, UK, Spain, Belgium), verified qualifications timeline. |
| `/sessions` | **Private Sessions** | Detailed 3-tier comparison (RM50 20m, RM200 60m, RM444 90m + 3-session enquiry), preparation guide, included vs excluded boundaries, online vs in-person modes, FAQ accordion. |
| `/alt-therapy` | **ALT Therapy** | Proprietary Angelic Light Therapy ritual overview, intended subjective experience, 90-min session & 3-session package inquiry, responsible wellness boundary. |
| `/aura-prema` | **Aura Prema** | Luxury product editorial with 4 categories: 7 Archangel Sprays (100ml), 12 Quintessence variations (30ml), Shuddhi pink-violet shower gel, and 4th line marked as "Details Forthcoming". |
| `/meditation` | **I.S.G.A Meditation** | 6-stage progressive curriculum (Heart Meditation prep, Shuddhi, Atma Jyoti activation across 4 in-person weekend days, Atma Jyoti internal structure, Prajna, advanced undisclosed stage). |
| `/access-chi` | **Access Chi Feng Shui** | Practitioner's belief-based space alignment: Home & Commercial, Vehicles, Space-Cleansing Ritual, illustrative 2-visit process, no EMF/medical claims. |
| `/insights` | **Editorial Insights** | Contemplative essays with category filters and interactive modal reader (demonstration sample articles). |
| `/booking` | **Session Booking** | Full interactive consultation request form with service selector, preferred date/time, meeting mode, contact fields, WhatsApp URL builder, and demo-only safety confirmation. |
| `/contact` | **Contact & Studio** | Klang, Selangor studio details (appointment-only policy), enquiry form, WhatsApp direct launch, social channel placeholders. |

---

## ✧ Getting Started

### Prerequisites
- Node.js `v18.18+` or `v20+`
- npm `v10+`

### Installation
```bash
# Clone or navigate to the project directory
cd "Victor Website"

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
# Typecheck and production build
npm run build

# Start production server
npm run start

# ESLint validation
npm run lint
```

---

## ✧ Editable Content & Configuration

### 1. Brand, Contact & WhatsApp Configuration
File: [`src/config/siteConfig.ts`](file:///Users/rms/Desktop/Ai%20Project/Victor%20Website/src/config/siteConfig.ts)

Update the contact placeholders with verified credentials:
```typescript
export const siteConfig = {
  brand: {
    name: "Mikhael Victor",
    location: "Klang, Selangor, Malaysia",
    // ...
  },
  contact: {
    whatsappNumber: "60123456789", // Replace with genuine WhatsApp number (no + or spaces)
    whatsappFormatted: "+60 12-345 6789",
    email: "consultation@mikhaelvictor.com",
    phoneDisplay: "+60 12-345 6789",
    wechatId: "MikhaelVictor_Official",
    instagramHandle: "@mikhaelvictor.official",
  },
  // ...
};
```

### 2. Bilingual Content Dictionary
File: [`src/data/content.ts`](file:///Users/rms/Desktop/Ai%20Project/Victor%20Website/src/data/content.ts)

All site copy in Chinese (`zh`) and English (`en`) is centralized here. You can edit headlines, pricing, session descriptions, course syllabus, and FAQs without touching component logic.

---

## ✧ Image Replacement Checklist

The current site utilizes elegant, branded placeholder components with soft halos and labeled badges (`PlaceholderImage`). Prior to formal public release, replace with real high-resolution photographic assets:

| # | Location | Asset Needed | Recommended Specs | Tone & Setting |
|---|---|---|---|---|
| 1 | Home & About Hero | **Mikhael Victor Official Portrait** | 3:4 or 4:5 ratio, min 1600x2000px | Natural warm daylight, soft ivory/linen attire, gentle approachable gaze, neutral background. |
| 2 | Home & About Studio | **Klang Consultation Sanctuary** | 4:3 ratio, min 1600x1200px | Minimalist quiet interior, singing bowl / meditation cushion, warm diffused light. |
| 3 | Aura Prema Sprays | **7 Archangel Spray Packshots** | 1:1 or 4:3, min 1200x1200px | 100ml amber or frosted glass bottles with color labels (Blue, Green, Pink, White, Olive, Gold, Purple). |
| 4 | Aura Prema Quintessence | **Quintessence 12 Colors Drops** | 1:1, min 1200x1200px | 30ml dropper bottles displaying subtle color tints. |
| 5 | Aura Prema Shower Gel | **Shuddhi Shower Gel Packshot** | 1:1, min 1200x1200px | Elegant pink-violet aesthetic bottle in natural bathroom marble setting. |
| 6 | Access Chi | **Spatial Consultation in Action** | 16:9, min 1920x1080px | Natural residential or boutique architectural setting with warm sunlight. |

---

## ✧ Checklist of Facts Required Before Public Launch

- [ ] **WhatsApp Number:** Provide genuine Malaysian mobile number to connect WhatsApp booking CTAs.
- [ ] **Official Email:** Update `consultation@mikhaelvictor.example.com` to verified domain inbox.
- [ ] **Historical Certificates:** Confirm archiving of 1999 Reiki lineage, 2003 Phytobiophysics, and 2005 Angel Therapy study records before removing "Pending Verification" tags.
- [ ] **Klang Studio Address:** Provide full address and parking instructions for confirmed booking notices.
- [ ] **Aura Prema 4th Product Line:** Supply product name, specifications, and volume once formula is finalized.
- [ ] **I.S.G.A. Advanced Level 05:** Confirm if Level 05 syllabus remains private or if public teaser text should be added.
- [ ] **Payment & Calendar Integration:** Connect real payment gateways (Stripe / ToyyibPay / FPX) and Google Calendar / Cal.com when ready.

---

## ✧ License & Copyright
© 2026 Mikhael Victor. All rights reserved.
