export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  isChiefGuest?: boolean;
}

export interface AgendaItem {
  time: string;
  title: string;
  category?: string;
  highlight?: boolean;
}

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  tier: 'patronage' | 'tier1' | 'tier2' | 'media' | 'past';
  width?: string;
}

export interface Theme {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  image?: string;
}

export const EVENT_DATA = {
  title: "FINTECH REVOLUTION SUMMIT",
  edition: "NIGERIA 2026",
  tagline: "TRANSFORMING AFRICA'S FINANCIAL & PAYMENTS REVOLUTION",
  subtitle: "Connect. Transform. Lead.",
  date: "NOVEMBER 2026",
  location: "Balmoral Convention Centre Ikeja - Sheraton Lagos",
  mapUrl: "https://www.google.com/maps?sca_esv=6d76dc318ac9b9d4&output=search&q=Balmoral+Convention+Centre+Ikeja+-+Sheraton+Lagos",
  whatsappUrl: "https://wa.me/919901857629",
  targetDate: "2026-11-15T09:00:00",
  organizer: {
    name: "TRAICON EVENTS",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/tce-logo.png",
    site: "https://traiconevents.com/"
  }
};

export const CHIEF_GUEST = {
  name: "Dr. Emomotimi John Agama",
  role: "Director-General",
  company: "Securities and Exchange Commission (SEC) Nigeria",
  image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Dr.%20Emomotimi%20John%20Agama.webp",
  bio: [
    "Dr. Emomotimi John Agama is the Director-General of the Securities and Exchange Commission (SEC), Nigeria’s apex regulatory institution for the capital market. A distinguished economist, financial analyst, and chartered management accountant, Dr Agama brings over three decades of professional experience spanning capital market regulation, financial strategy, economic policy, and institutional leadership.",
    "His appointment as Director-General marked the continuation of a remarkable career dedicated to strengthening Nigeria’s capital market ecosystem and aligning it with global best practices.",
    "Prior to his appointment, Dr Agama served as the Managing Director of the Nigerian Capital Market Institute (NCMI), where he led transformative capacity-building and regulatory education programs across Nigeria and Africa. He previously oversaw regulatory frameworks for exchanges, depositories, and clearing houses as Head of Market Infrastructure and Innovation at the SEC.",
    "Under his stewardship, the SEC is pursuing an ambitious transformation agenda anchored on digitalisation, youth inclusion, market integrity, and investor protection. Dr. Agama has championed the modernisation of regulatory frameworks to accommodate emerging technologies, including digital assets and virtual exchanges, while ensuring investor confidence and systemic stability."
  ],
  credentials: [
    "PhD in Economics (Nile University of Nigeria)",
    "Graduate Certificate in Capital Markets (George Washington University, USA)",
    "Dual Master's in Economics & Banking/Finance (University of Benin)",
    "Chartered Global Management Accountant (CGMA)",
    "Fellow, CIMA UK & Fellow, Chartered Institute of Stockbrokers (FCIS)",
    "Vice Chairman, Africa/Middle East Regional Committee (AMERC) of IOSCO"
  ]
};

export const STATS: StatItem[] = [
  { value: 200, suffix: "+", label: "PRE-SCREENED", sublabel: "DELEGATES", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n1.webp" },
  { value: 50, suffix: "+", label: "MEDIA", sublabel: "MENTIONS", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n2.webp" },
  { value: 100, suffix: "+", label: "LEADING", sublabel: "ORGANIZATIONS", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n3.webp" },
  { value: 30, suffix: "+", label: "INDUSTRY", sublabel: "EXPERTS", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n4.webp" },
  { value: 25, suffix: "+", label: "SOLUTION", sublabel: "PROVIDERS", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n5.webp" },
  { value: 8, suffix: "+", label: "HOURS OF", sublabel: "NETWORKING", image: "https://fintechrevolutionseries.com/nigeria/assets/images/n6.webp" }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "sec-agama",
    name: "Dr. Emomotimi John Agama",
    role: "Director-General",
    company: "Securities and Exchange Commission Nigeria",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Dr.%20Emomotimi%20John%20Agama.webp",
    isChiefGuest: true
  },
  {
    id: "spk-1",
    name: "Echezona Agubata",
    role: "Chief Technology Officer",
    company: "Coronation Merchant Bank",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Echezona%20Agubata.webp"
  },
  {
    id: "spk-2",
    name: "Omowunmi Odumusi",
    role: "Head, Public Sector Payments & Partnerships",
    company: "Wema Bank Plc",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Omowunmi%20Odumusi.webp"
  },
  {
    id: "spk-3",
    name: "Dr. Frances Undelikwo",
    role: "CISO / Data Protection Officer",
    company: "NOVA Bank",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Dr.%20Frances%20Undelikwo.webp"
  },
  {
    id: "spk-4",
    name: "Dr. Chinyere Tony-Eke",
    role: "Group Head, Digital Banking & Partnerships",
    company: "Globus Bank",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Dr.%20Chinyere%20Tony-Eke.webp"
  },
  {
    id: "spk-5",
    name: "Babafemi Oluyemi",
    role: "Head of Online Banking",
    company: "First Bank of Nigeria",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Babafemi%20Oluyemi.webp"
  },
  {
    id: "spk-6",
    name: "Frank Atat",
    role: "Divisional Head of Payment & Solutions",
    company: "First City Monument Bank Limited (FCMB)",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Frank%20Atat.webp"
  },
  {
    id: "spk-7",
    name: "Oluremi Tinuolu-Gabriel",
    role: "Director, Retail and Digital Financial Services",
    company: "United Capital PLC",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Oluremi%20Tinuolu-Gabriel.webp"
  },
  {
    id: "spk-8",
    name: "Ebenezer Akinyemi",
    role: "Chief Digital Officer",
    company: "Abbey Mortgage Bank Plc",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Ebenezer%20Akinyemi%20(2).webp"
  },
  {
    id: "spk-9",
    name: "Esther ObiekweChukwu",
    role: "Head Retail & SME Banking",
    company: "NOVA Bank",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Esther%20ObiekweChukwu.webp"
  },
  {
    id: "spk-10",
    name: "Oluwaseyi Onanuga",
    role: "Head - Treasury & Trade Solutions",
    company: "Rand Merchant Bank Nigeria",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Oluwaseyi%20Onanuga%20(1).webp"
  },
  {
    id: "spk-11",
    name: "Oluwaseun Adesoye",
    role: "Chief Executive Officer",
    company: "Myrtle Assets Limited",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Oluwaseun%20Adesoye.webp"
  },
  {
    id: "spk-12",
    name: "Shawn-Marc Melo",
    role: "Founder and CEO",
    company: "deepidv",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/speakers/new/Shawn-Marc%20Melo.webp"
  }
];

export const AUDIENCE_SECTORS = [
  { name: "Banks", percentage: 32, color: "#3ad59f" },
  { name: "Financial Institutions (Non-Banking)", percentage: 22, color: "#05ae70" },
  { name: "Insurance Companies", percentage: 14, color: "#06df90" },
  { name: "Capital Markets / Brokerages / Exchanges", percentage: 10, color: "#51fabd" },
  { name: "Telecom & Payment Service Providers", percentage: 9, color: "#9effeb" },
  { name: "Retailers / Merchants", percentage: 5, color: "#ecef90" },
  { name: "SMEs", percentage: 3, color: "#f7fd4b" },
  { name: "VCs / Investment Firms", percentage: 3, color: "#c8ce12" },
  { name: "Regulators, Startups & Academia", percentage: 2, color: "#f6ff00" }
];

export const AUDIENCE_PROFILES = [
  "CEO, CTO, COO, CDO, CIO, CISO, CFO",
  "Chief Retail & Wholesale Banking",
  "Chief Banking Officer",
  "Director / VP / Head of Digital & Technology",
  "Director / VP / Head of Retail & Wholesale Banking",
  "Director / VP / Head of Payments & Cards",
  "Director / VP / Head of Fraud & Financial Crime",
  "Director / VP / Head of eKYC & Onboarding",
  "Director / VP / Head of AML, Risk & Compliance",
  "Director / VP / Head of IT, Data & Cybersecurity",
  "Director / VP / Head of Finance & Operations",
  "Director / VP / Head of CX & Loyalty"
];

export const SPENDING_BUDGET = [
  { range: "US$50K – US$100K", percentage: 48 },
  { range: "US$100K – US$500K", percentage: 34 },
  { range: "Up to US$1 Million+", percentage: 18 }
];

export const THEMES: Theme[] = [
  { id: "1", title: "Banking Automation", category: "Core Banking", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/banking-automations.jpg" },
  { id: "2", title: "Open Banking", category: "Integration", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/open-banking.jpg" },
  { id: "3", title: "Regtech", category: "Compliance", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/regtech.jpg" },
  { id: "4", title: "Wealthtech", category: "Investments", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/wealthtech.jpg" },
  { id: "5", title: "Digital Payment", category: "Transactions", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/digital_payment.jpg" },
  { id: "6", title: "Payment Gateway", category: "Infrastructure", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/gateway.jpg" },
  { id: "7", title: "KYC / AML", category: "Verification", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/aml.jpg" },
  { id: "8", title: "Biometric Security", category: "Authentication", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/biometric.jpg" },
  { id: "9", title: "Cross Border Payment", category: "Remittance", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/Cross%20Broder%20Payment.jpg" },
  { id: "10", title: "Digital Lending", category: "Credit", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/digital-lending.jpg" },
  { id: "11", title: "IoT Based Applications", category: "Smart Finance", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/iot.jpg" },
  { id: "12", title: "Financial Inclusion", category: "Access", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/financial.jpg" },
  { id: "13", title: "Finance Crime / Fraud", category: "Cyber Risk", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/CrimeFraud.jpg" },
  { id: "14", title: "Artificial Intelligence", category: "Cognitive Tech", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/ai.jpg" },
  { id: "15", title: "APIs / Cloud / Data", category: "Infrastructure", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/cloud.jpg" },
  { id: "16", title: "Cybersecurity", category: "Protection", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/cyber-mana.jpg" },
  { id: "17", title: "Embedded Finance", category: "B2B2C", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/transaction-platforms.jpg" },
  { id: "18", title: "UX / CX", category: "Customer", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/cutomer-ex.jpg" },
  { id: "19", title: "SaaS / BaaS", category: "Software", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/forex-softwares.jpg" },
  { id: "20", title: "Digitalization", category: "Transformation", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/data.jpg" },
  { id: "21", title: "Crypto / Blockchain", category: "Web3", image: "https://fintechrevolutionseries.com/nigeria/assets/images/themes/blockchain.jpg" }
];

export const MARKET_DATA = [
  { value: "USD 1.13 B", title: "Fintech Market Size in 2024", desc: "Rapidly expanding ecosystem backed by regulatory support." },
  { value: "USD 15.2 Bn", title: "Digital Payments Market in 2025", desc: "Explosive growth in instant transfer networks and mobile money." },
  { value: "200+", title: "Licensed Financial Institutions", desc: "Dynamic commercial, merchant, and microfinance banking landscape." },
  { value: "Apx. USD 3.4 Tn", title: "Digital Commerce Transactions", desc: "Leading transaction velocity across Sub-Saharan Africa." },
  { value: "US $2.5 Bn", title: "Projected Transaction Value by 2028", desc: "Sustained compound annual growth rate in fintech services." },
  { value: "107 M", title: "Active Internet Users", desc: "Massive digital-first demographic driving cashless adoption." }
];

export const HIGHLIGHTS = [
  {
    num: "01",
    title: "ONE TO ONE Meetings",
    desc: "Pre-screened and curated matchmaking connecting buyers, enterprise technology chiefs, and solution providers for direct deal-making.",
    tag: "High Conversion"
  },
  {
    num: "02",
    title: "Keynote Speaking – Conference",
    desc: "A premier stage to present breakthrough innovations, regulatory roadmaps, and next-generation frameworks to 200+ decision makers.",
    tag: "Thought Leadership"
  },
  {
    num: "03",
    title: "Product Showcase – Exhibition",
    desc: "Dedicated exhibition spaces giving enterprise and government buyers hands-on experience with cutting-edge fintech applications.",
    tag: "Brand Visibility"
  }
];

export const WHY_EXHIBIT = [
  {
    id: "comp",
    title: "INCREASING COMPETITION",
    subtitle: "Establish Your Fintech Authority",
    desc: "Competition is the #1 challenge reported by industry executives. Showcase your competitive advantage, market validation, and authoritative leadership to stand out and capture high-value contracts.",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/why/why1.webp"
  },
  {
    id: "deals",
    title: "GENERATE NEW BUSINESS",
    subtitle: "Network with 200+ Verified Decision-Makers",
    desc: "With 200+ pre-screened C-suite attendees across Nigeria's top tier financial institutions, connect directly with verified budget holders actively looking for vetted software, security, and banking solutions.",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/why/why2.webp"
  },
  {
    id: "network",
    title: "NETWORK WITH INDUSTRY BUYERS & LEADERS",
    subtitle: "Engage Nigeria’s Financial Power Players",
    desc: "Connect where 80% of attendees are top decision-makers from Commercial Banks, Insurance, Microfinance, and Capital Markets, complemented by 20% key regulatory authorities.",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/why/why3.webp"
  },
  {
    id: "exposure",
    title: "INCREASE BRAND EXPOSURE",
    subtitle: "Year-Round Exposure for Exhibiting Brands",
    desc: "Gain premium brand positioning across digital campaigns, media partner press releases, printed materials, and live stage features before, during, and after the summit.",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/why/why4.webp"
  },
  {
    id: "launch",
    title: "LAUNCH NEW PRODUCTS",
    subtitle: "Reach an Engaged Audience Seeking Fintech Solutions",
    desc: "The region's dedicated fintech stage is your launchpad for major product debuts, API rollouts, AI security models, and partnership announcements.",
    image: "https://fintechrevolutionseries.com/nigeria/assets/images/why/why5.webp"
  }
];

export const AGENDA: AgendaItem[] = [
  { time: "08:00 – 09:00", title: "Registration + Welcome Drinks with Networking", category: "Networking" },
  { time: "09:00 – 09:05", title: "Event Announcement + Opening Remarks", category: "Ceremony" },
  { time: "09:05 – 09:10", title: "Ribbon Cutting Ceremony & Keynote Address by Chief VIP Guest", category: "VIP Keynote", highlight: true },
  { time: "09:10 – 09:30", title: "Reimagining Nigeria’s Financial Ecosystem: Catalyzing Growth Through Fintech and Innovation", category: "Keynote" },
  { time: "09:30 – 09:50", title: "Digital Payments are moving fast. What’s now and what’ next?", category: "Panel" },
  { time: "09:50 – 10:00", title: "Driving Speed and Trust with AI in Credit Decisioning and Insurance Automation", category: "Session" },
  { time: "10:00 – 10:10", title: "AI-Powered Personalization: Crafting Seamless and Loyal Customer Experiences in Finance", category: "Session" },
  { time: "10:10 – 10:20", title: "Reimagining Banking Transformation: Building the Digital Core for a Connected Financial Future", category: "Session" },
  { time: "10:20 – 10:30", title: "Defending KYC Integrity: Combating Deepfake and AI-Enabled Identity Threats", category: "Security", highlight: true },
  { time: "10:30 – 10:40", title: "Trust, Transformation, and Technology: Navigating the New Financial Landscape", category: "Leadership" }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "Securities and Exchange Commission Nigeria",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/sponsors/new/securities%20and%20exchange%20commission.svg",
    tier: "patronage",
    width: "280px"
  },
  {
    name: "Zigram",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/sponsors/new/zigram-dark%20(1).png",
    url: "https://www.zigram.tech/",
    tier: "tier1"
  },
  {
    name: "DeepIDV",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/sponsors/new/deepidv.svg",
    url: "https://www.deepidv.com/",
    tier: "tier1"
  },
  {
    name: "CryptoBrowser",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/cryptobrowser.svg",
    url: "https://cryptobrowser.io/",
    tier: "media"
  },
  {
    name: "Cryptoken Media",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/cryptoken_media.webp",
    url: "https://cryptoken.media",
    tier: "media"
  },
  {
    name: "IT Knowledge Zone",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/IT_knowledge_zone.png",
    url: "https://itknowledgezone.com/",
    tier: "media"
  },
  {
    name: "ExpoTobi",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/ExpoTobi%20HD.png",
    url: "https://expotobi.com/",
    tier: "media"
  },
  {
    name: "BFM Times",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/bfm.png",
    url: "https://bfmtimes.com/",
    tier: "media"
  },
  {
    name: "CIO Review",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/cio-review.png",
    url: "https://www.cioreview.com/",
    tier: "media"
  },
  {
    name: "Capitalbay News",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/Capitalbay%20News%20-1023X531.svg",
    url: "https://www.capitalbay.news/",
    tier: "media"
  },
  {
    name: "StartupNews.fyi",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/startupnews.png",
    url: "https://startupnews.fyi/",
    tier: "media"
  },
  {
    name: "Times of AI",
    logo: "https://fintechrevolutionseries.com/nigeria/assets/images/media/timesofai%2001.png",
    url: "https://www.timesofai.com/",
    tier: "media"
  },
  {
    name: "Security Middle East",
    logo: "https://fintechrevolutionseries.com/assets/images/media/sme_logo_highrez.png",
    url: "https://securitymiddleeastmag.com/",
    tier: "media"
  }
];

export const PAST_PARTNERS = [
  "Global iTS", "Kyvos", "ManageEngine", "Oliver Wyman", "SFA", "System Technologies",
  "Tap Payments", "TerraPay", "Thunes", "UTC", "VeriPark", "Xpence", "DevRev", "EasyLodge",
  "eMango Pay", "Entrust", "EPIC", "Fenergo", "ITRS", "Perfios", "Sumsub", "Rudder",
  "Secuna", "Zoho", "Backbase", "Braxtone", "Freshworks", "Netcore"
];

export const GALLERY_IMAGES = [
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal1.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal2.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal3.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal4.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal5.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal6.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal7.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal8.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal9.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal10.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal11.webp",
  "https://fintechrevolutionseries.com/nigeria/assets/images/gallery/gal12.webp"
];
