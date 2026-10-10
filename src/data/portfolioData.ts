import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import image9 from "../assets/9.jpeg";

export interface SampleItem {
  id: number;
  fileName: string;
  image: string;
  title: string;
  description?: string;
  category?: string;
}

export interface SampleProject {
  id: number;
  imageFileName: string;
  image: string;
  title: string;
  category:
    | "Tech Packs & Specs"
    | "Ribbed Knits"
    | "Graphic & Prints"
    | "Stripes & Yarn-Dyed"
    | "Garment Dye & Washes"
    | "Showroom Lines"
    | "PP Approvals";
  styleCode: string;
  clientMarket: string;
  season: string;
  fabricSpecs: {
    composition: string;
    gsmWeight: string;
    knitWeave: string;
    washTreatment: string;
  };
  summary: string;
  coordinationHighlights: string[];
  techComments: string;
  status:
    | "Approved for Bulk"
    | "Sample Dispatched"
    | "Resolved & Cleared"
    | "Buyer Confirmed"
    | "Showroom Approved";
  tags: string[];
}

export interface EducationItem {
  qualification: string;
  degreeName: string;
  institutionLevel: string;
  year: string;
  result: string;
  statusText: string;
  description: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  timeframe: string;
  objective: string;
  keyResponsibilities: string[];
  deliverable: string;
}

export const COORDINATOR_DATA = {
  name: "MD. AL AMIN",
  bengaliName: "মো. আল আমিন",
  designation: "SAMPLE COORDINATOR",
  subTitle: "Garments & Textile Product Development Specialist",
  company: "Synergies Sourcing Bangladesh",
  department: "Design & Product Development",
  employmentPeriod: "1 February 2022 – Present",
  experienceYears: "4+ Years Active Experience",
  contact: {
    phone: "01902123875",
    phoneInternational: "+880 1902 123875",
    email: "al-amin@synergiesbangladesh.com",
    location: "Dhaka, Bangladesh",
    availability: "Full-Time · Mon - Sat (09:00 - 18:00 BST)",
  },
  bio: "Dedicated Sample Coordinator at Synergies Sourcing Bangladesh with over 4 years of continuous hands-on experience in the textile and apparel export industry. Serving as the vital bridge between international apparel buyers, design houses, technical pattern makers, fabric mills, and manufacturing sample rooms. Specialized in accelerating sample turnaround times, eliminating hold points, translating complex buyer tech packs into flawless prototypes, and securing pre-production approvals with uncompromising precision.",
  corePillars: [
    {
      title: "Sample Development",
      description:
        "Steering prototypes from 1st proto and fit samples to Salesman Samples (SMS), Size Sets, and Pre-Production (PP) samples across knit, woven, and washed garments.",
    },
    {
      title: "Buyer Requirements",
      description:
        "Thoroughly interpreting buyer tech packs, fit comments, grading specs, tolerance charts, and trim placements to eliminate production discrepancies.",
    },
    {
      title: "Sample Follow-up",
      description:
        "Daily floor follow-up with pattern masters, cutting, sewing line supervisors, wash plants, and print embroideries to adhere strictly to critical paths.",
    },
    {
      title: "Cross-Functional Coordination",
      description:
        "Seamless synchronization between Merchandising, Design & Product Development, Fabric Sourcing, Quality Control, and Overseas Liaison Teams.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Rigorous adherence to buyer courier dispatch deadlines, maintaining a 98.5% on-time sample handover track record across high-volume seasons.",
    },
  ],
  stats: [
    { label: "Experience", value: "4+ Years", subtext: "Since Feb 2022" },
    {
      label: "Styles Coordinated",
      value: "350+",
      subtext: "Per Annual Cycles",
    },
    {
      label: "On-Time Dispatch",
      value: "98.5%",
      subtext: "Courier & Handover",
    },
    {
      label: "Buyer Satisfaction",
      value: "99%",
      subtext: "Sample First-Fit Pass",
    },
  ],
};

export const CLIENT_DATA = {
  ...COORDINATOR_DATA,
  samples: [
    {
      id: 1,
      fileName: "1.jpeg",
      image: image1,
      title: "Flat Lay Sample Assortment",
      category: "Showroom Lines",
    },
    {
      id: 2,
      fileName: "2.jpeg",
      image: image2,
      title: "Tech Spec & HOLD Board",
      category: "Tech Packs & Specs",
    },
    {
      id: 3,
      fileName: "3.jpeg",
      image: image3,
      title: "Graphic Tees & Knits Collection",
      category: "Graphic & Prints",
    },
    {
      id: 4,
      fileName: "4.jpeg",
      image: image4,
      title: "Ribbed Crop & Henley Program",
      category: "Ribbed Knits",
    },
    {
      id: 5,
      fileName: "5.jpeg",
      image: image5,
      title: "Two-Tier Showroom Capsule Rack",
      category: "Showroom Lines",
    },
    {
      id: 6,
      fileName: "6.jpeg",
      image: image6,
      title: "Engineered Yarn-Dyed Stripe Polos",
      category: "Stripes & Yarn-Dyed",
    },
    {
      id: 7,
      fileName: "7.jpeg",
      image: image7,
      title: "Double Gauze Summer Resort Shirts",
      category: "Garment Dye & Washes",
    },
    {
      id: 8,
      fileName: "8.jpeg",
      image: image8,
      title: "Embellished & Embroidered Tops",
      category: "Showroom Lines",
    },
    {
      id: 9,
      fileName: "9.jpeg",
      image: image9,
      title: "Total Styles PP Approval Grid",
      category: "PP Approvals",
    },
  ],
};

export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    id: 1,
    imageFileName: "1.jpeg",
    image: image1,
    title: "Multi-Style Flat Lay Tech Assortment",
    category: "Showroom Lines",
    styleCode: "STY-FLT-2024",
    clientMarket: "European High Street Brands",
    season: "Spring / Summer 2024",
    fabricSpecs: {
      composition: "100% Cotton / Cotton-Modal / Polyester-Elastane Blends",
      gsmWeight: "140 - 180 GSM",
      knitWeave: "Single Jersey, Slub Knit, Rib Knit, Allover Prints",
      washTreatment: "Silicone Softener & Enzyme Bio-Polish",
    },
    summary:
      "Comprehensive multi-style flat lay presentation covering 25+ tops, floral prints, graphic tees, and lace trim apparel coordinated for European buyer seasonal range reviews.",
    coordinationHighlights: [
      "Arranged multi-silhouette range layout comparing neckline depths, shoulder drops, and print color harmonies.",
      "Audited fit comments, barcode hangtags, care label placements, and packaging specs prior to buyer review.",
      "Cross-checked shade continuity between garment bodies, rib collars, and decorative lace trims.",
    ],
    techComments:
      "All graphic prints approved under D65 standard light box. Hand-feel meets ultra-soft European hand-touch standard.",
    status: "Showroom Approved",
    tags: [
      "Assortment Review",
      "Multi-Silhouette",
      "Color Harmony",
      "Buyer Presentation",
    ],
  },
  {
    id: 2,
    imageFileName: "2.jpeg",
    image: image2,
    title: "Technical Spec Board & 'HOLD' Resolution System",
    category: "Tech Packs & Specs",
    styleCode: "MAIN-B-SSBL-2441",
    clientMarket: "Main B. Studio 1987 / Synergies Bangladesh",
    season: "Summer Capsule",
    fabricSpecs: {
      composition: "Crinkle Jersey SSBL-2441, Woven Stripe & Viscose Blend",
      gsmWeight: "160 - 210 GSM",
      knitWeave: "Crinkle Crepe Jersey, Textured Woven, Striped Rib",
      washTreatment: "Relaxation Tumble Wash & Anti-Pilling Treatment",
    },
    summary:
      "Real-world tech pack execution board showing critical issue troubleshooting, pattern modifications, crinkle fabric swatches (SSBL-2441), cuff elastic gather specs, and 'HOLD' status clearances.",
    coordinationHighlights: [
      "Resolved 3 high-priority 'HOLD' bottlenecks on leg slit openings (128cm -> 180cm adjustment) and lettuce edge hems.",
      "Attached approved fabric swatches (crinkle jersey and woven stripe) with direct hand-written pattern master notes.",
      "Coordinated with sample pattern room to release Top 1 weekly classic sample in crinkle fabric within 24 hours.",
    ],
    techComments:
      "Elastic gather tension on cuffs calibrated to avoid skin pressure marks. Crinkle pattern grainline verified.",
    status: "Resolved & Cleared",
    tags: [
      "Tech Pack Board",
      "HOLD Clearance",
      "Pattern Revision",
      "Crinkle Jersey SSBL-2441",
    ],
  },
  {
    id: 3,
    imageFileName: "3.jpeg",
    image: image3,
    title: "Graphic & Streetwear Knitwear Program",
    category: "Graphic & Prints",
    styleCode: "GRP-WLD-87",
    clientMarket: "Young Contemporary US/EU Retail",
    season: "Autumn / Back-to-School",
    fabricSpecs: {
      composition: "100% Combed Compact Cotton & 95/5 Cotton Spandex",
      gsmWeight: "180 - 220 GSM",
      knitWeave: "Heavy Single Jersey & 2x2 Rib Collar",
      washTreatment: "Vintage Pigment Dye, Enzyme Wash & Soft Wash",
    },
    summary:
      "Collection of collegiate and lifestyle graphic t-shirts including 'Wild West Cuties', 'Ocean Beach', varsity '87', and 'PA STUDIO' cropped tops with varied collar treatments.",
    coordinationHighlights: [
      "Monitored screen print strike-offs for crack resistance, pigment opacity, and puff print heights.",
      "Coordinated contrast collar ringer rib binding without wavy neckline distortion.",
      "Verified wash shrinkage across high-density chest prints to prevent puckering after domestic laundering.",
    ],
    techComments:
      "Collegiate 87 distress texture signed off. Print registration tolerance within 1.0mm.",
    status: "Buyer Confirmed",
    tags: ["Screen Prints", "Varsity 87", "Ribbed Polo", "Pigment Washes"],
  },
  {
    id: 4,
    imageFileName: "4.jpeg",
    image: image4,
    title: "Multi-Color Ribbed Crop & Henley Program",
    category: "Ribbed Knits",
    styleCode: "RIB-HNL-552",
    clientMarket: "International Fast Fashion",
    season: "Spring / Summer 2024",
    fabricSpecs: {
      composition: "95% Cotton 5% Elastane 2x2 & 4x2 Drop-Needle Rib",
      gsmWeight: "190 - 210 GSM",
      knitWeave: "Drop-Needle Rib, Wide Rib & Flat Knit Rib",
      washTreatment: "Bio-Enzyme Wash & Pre-Shrink Heat Set",
    },
    summary:
      "High-density color palette development of rib-textured crop tops, henley plackets, and notch necklines spanning over 18 seasonal colorways from earth tones to vivid primaries.",
    coordinationHighlights: [
      "Followed up lab dip approvals (A, B, C, D options) across 18 distinct shades with zero metamerism under store lighting.",
      "Ensured button shank spacing and functional henley placket stability with tear-resistant interlinings.",
      "Calibrated fabric recovery elasticity to ensure samples maintain shape after stretch recovery tests.",
    ],
    techComments:
      "Elastane heat setting parameters locked to maintain dimensional stability after 3 washes.",
    status: "Approved for Bulk",
    tags: [
      "Drop-Needle Rib",
      "18 Colorways",
      "Lab Dip Matching",
      "Henley Details",
    ],
  },
  {
    id: 5,
    imageFileName: "5.jpeg",
    image: image5,
    title: "Two-Tier Coordinated Showroom Capsule Rack",
    category: "Showroom Lines",
    styleCode: "SHW-CAP-002",
    clientMarket: "Liaison Buyer Delegation",
    season: "Transitional Season",
    fabricSpecs: {
      composition: "Combed Cotton, Acid Wash Fleece, Viscose Blends",
      gsmWeight: "160 - 240 GSM",
      knitWeave: "French Terry, Jersey, Woven Prints",
      washTreatment: "Acid Marble Wash, Garment Enzyme, Plain Steam",
    },
    summary:
      "Visual merchandising and physical sample staging on two-tier metal showroom racks for visiting buyer delegations and international brand directors.",
    coordinationHighlights: [
      "Organized color-blocked merchandising flow: pastels, neutrals, mineral washes, and printed coordinates.",
      "Supervised sample room pressing and steam finishing to prevent pressing glaze or seam shining.",
      "Created quick-reference barcode hangtags linking every physical hanger directly to Synergies ERP database.",
    ],
    techComments:
      "Garment measurements verified against approved spec sheet tolerances prior to presentation.",
    status: "Showroom Approved",
    tags: [
      "Showroom Presentation",
      "Color Flow",
      "Hanger Styling",
      "Buyer Delegation",
    ],
  },
  {
    id: 6,
    imageFileName: "6.jpeg",
    image: image6,
    title: "Engineered Yarn-Dyed Stripe Polos & Tees",
    category: "Stripes & Yarn-Dyed",
    styleCode: "YDS-POL-108",
    clientMarket: "Casual Menswear & High Street",
    season: "Summer Core Range",
    fabricSpecs: {
      composition: "100% Combed Cotton Yarn-Dyed",
      gsmWeight: "170 - 190 GSM",
      knitWeave: "Feeder Stripe, Engineered Repeat Stripe & Pique",
      washTreatment: "Silicone Wash with Anti-Torque Finishing",
    },
    summary:
      "Precision engineered yarn-dyed stripe program showcasing multiple color repeats (navy/white, camel/white, baby blue/white, and mustard/white) with matching collar ribs.",
    coordinationHighlights: [
      "Enforced exact horizontal stripe matching across front-to-back side seams and sleeve armhole insertions.",
      "Monitored spirality/torque control during knitting to prevent twisted seams after garment washing.",
      "Maintained yarn dye lot consistency to avoid horizontal band shading differences.",
    ],
    techComments:
      "Side seam stripe match verified at 0mm deviation across sizes S to XXL.",
    status: "Approved for Bulk",
    tags: [
      "Yarn-Dyed Stripe",
      "Side-Seam Matching",
      "Torque Control",
      "Engineered Repeats",
    ],
  },
  {
    id: 7,
    imageFileName: "7.jpeg",
    image: image7,
    title: "Double Gauze & Crinkle Cotton Summer Range",
    category: "Garment Dye & Washes",
    styleCode: "GZ-SHR-770",
    clientMarket: "Resortwear & Premium Casual",
    season: "High Summer",
    fabricSpecs: {
      composition: "100% Natural Organic Cotton Double Gauze",
      gsmWeight: "135 - 150 GSM",
      knitWeave: "Breathable Double Muslin Gauze",
      washTreatment: "Garment Reactive Dye & Heavy Sand Wash",
    },
    summary:
      "Lightweight, breathable double gauze button-down resort shirts featuring relaxed roll-up sleeves in a vivid spectrum of garment-dyed fashion colors.",
    coordinationHighlights: [
      "Calibrated garment dyeing shrinkage allowance into pattern drafting (+8% length, +6% width adjustment).",
      "Achieved ultra-soft, crinkled luxury hand-feel without weakening fiber tensile strength at buttonholes.",
      "Verified dye lot levelness on delicate muslin fabric without color streaks or patchy saturation.",
    ],
    techComments:
      "Shade variance between 8 color options checked under TL84 and D65 light sources. Zero crocking detected.",
    status: "Buyer Confirmed",
    tags: ["Double Gauze", "Garment Dyeing", "Sand Wash", "Resort Styling"],
  },
  {
    id: 8,
    imageFileName: "8.jpeg",
    image: image8,
    title: "Embellished Lace & Cut-and-Sew Showroom Display",
    category: "Showroom Lines",
    styleCode: "EMB-FLR-305",
    clientMarket: "European Ladieswear Collection",
    season: "Mid-Season Capsule",
    fabricSpecs: {
      composition:
        "Cotton Jersey with Polyester Guipure Lace & Metallic Thread",
      gsmWeight: "150 - 180 GSM",
      knitWeave: "Jersey Body with Guipure Lace Insertion & Sequin Accents",
      washTreatment: "Delicate Net Bag Gentle Wash",
    },
    summary:
      "Showroom display featuring sophisticated cut-and-sew tops with shoulder floral lace embroidery, sequin embellishments, lace hemlines, and animal print jersey combos.",
    coordinationHighlights: [
      "Ensured embroidery backing stabilizer dissolved completely during wash to prevent skin irritation.",
      "Coordinated placement embroidery alignment so floral motifs mirror symmetrically across both shoulders.",
      "Prevented knit jersey puckering around dense guipure lace trim insertions.",
    ],
    techComments:
      "Pull-test on embroidery threads achieved 45N tensile resistance. No loose sequin hazards.",
    status: "Sample Dispatched",
    tags: [
      "Floral Embroidery",
      "Guipure Lace",
      "Cut & Sew",
      "Applique Placement",
    ],
  },
  {
    id: 9,
    imageFileName: "9.jpeg",
    image: image9,
    title: "'Total Styles' Pre-Production Sample Approval Grid",
    category: "PP Approvals",
    styleCode: "TOT-STY-800",
    clientMarket: "Kenneth Cole / Global High-Volume Accounts",
    season: "Core Annual Program",
    fabricSpecs: {
      composition: "100% Combed Cotton, Cotton Pique, Melange Cotton",
      gsmWeight: "160 - 210 GSM",
      knitWeave: "Single Jersey, Slub Texture, Micro Pique & Printed Jersey",
      washTreatment: "Enzyme Stone Wash, Silicon Soft Wash & Acid Burnout",
    },
    summary:
      "Eight-style comprehensive pre-production catalog grid featuring polo shirts, mineral washed graphic tees, and allover branded crewnecks with sample tracking tickets and buyer approval seals.",
    coordinationHighlights: [
      "Logged and tracked all 8 styles through final proto, fit sample, and pre-production (PP) buyer approvals.",
      "Executed Kenneth Cole brand packaging, woven label placements, and barcode sticker verification.",
      "Completed final factory sample room sign-off, sealing approved reference samples for bulk cutting authorization.",
    ],
    techComments:
      "All 8 styles signed off by buyer QA technical team with green seal for bulk manufacturing kickoff.",
    status: "Approved for Bulk",
    tags: [
      "Total Styles Grid",
      "Kenneth Cole",
      "PP Sample Sign-Off",
      "Bulk Factory Handover",
    ],
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: "01",
    title: "Tech Pack Intake & Feasibility Study",
    timeframe: "Day 1 - 2",
    objective:
      "Analyze buyer design sheets, construction details, and material bills to establish development feasibility.",
    keyResponsibilities: [
      "Scrutinize tech pack sketches, measurement charts, tolerance allowances, and stitch requirements.",
      "Identify high-risk technical elements (e.g. crinkle fabrics, engineered stripes, tight tolerances).",
      "Calculate fabric and trim consumption; initiate raw material indent with mills.",
    ],
    deliverable: "Sample Development Sheet (SDS) & Material Sourcing Request",
  },
  {
    step: "02",
    title: "Fabric Sourcing & Lab Dip Approvals",
    timeframe: "Day 3 - 7",
    objective:
      "Secure base fabrics, test GSM/shrinkage, and match pantone shades under international standard light sources.",
    keyResponsibilities: [
      "Follow up on knit/weave trials, yarn counts (combed/carded), and fabric weight (GSM).",
      "Submit Lab Dips (options A, B, C, D) to buyer under D65, CWF, and TL84 light boxes.",
      "Perform wash fastness, spirality, and dimensional stability pre-tests.",
    ],
    deliverable: "Approved Fabric Swatch Card & Lab Dip Sign-Off",
  },
  {
    step: "03",
    title: "Pattern Drafting & 1st Proto Execution",
    timeframe: "Day 8 - 11",
    objective:
      "Translate 2D tech pack measurements into physical 3D patterns and assemble initial prototypes.",
    keyResponsibilities: [
      "Collaborate with pattern masters to cut paper/CAD patterns incorporating fabric wash shrink factors.",
      "Oversee sample floor sewing, monitor seam stitches (overlock, flatlock, binding tension).",
      "Resolve on-the-spot sewing bottlenecks and eliminate potential 'HOLD' issues.",
    ],
    deliverable: "1st Proto Sample with In-House Measurement Inspection Report",
  },
  {
    step: "04",
    title: "Fit Evaluation & Buyer Feedback Revisions",
    timeframe: "Day 12 - 15",
    objective:
      "Evaluate sample drape on fit mannequins, review buyer comments, and execute pattern corrections.",
    keyResponsibilities: [
      "Review buyer fit comments line-by-line (e.g. chest drop, neck depth, armhole pitch).",
      "Re-cut revised patterns with CAD grading adjustments and stitch modified samples.",
      "Maintain clear communication with merchandising and overseas buyer technical reps.",
    ],
    deliverable: "Revised 2nd Fit Sample & Comment Compliance Matrix",
  },
  {
    step: "05",
    title: "SMS & Size Set Range Coordination",
    timeframe: "Day 16 - 22",
    objective:
      "Manufacture Salesman Samples (SMS) and full grading range (XS to XXL) for retail buyer marketing.",
    keyResponsibilities: [
      "Coordinate high-volume multi-color SMS batches (e.g. 18 colorways in ribbed knits).",
      "Verify grading jump tolerances across all size sets (chest, length, sleeve width).",
      "Apply exact buyer branding, hangtags, price tickets, polybags, and hanger packaging.",
    ],
    deliverable:
      "Complete Salesman Sample (SMS) Collection Ready for Buyer Showrooms",
  },
  {
    step: "06",
    title: "PP Approval & Bulk Production Handover",
    timeframe: "Day 23 - 26",
    objective:
      "Secure final Pre-Production (PP) gold seal approval and hand over production files to manufacturing plants.",
    keyResponsibilities: [
      "Stitch PP samples on bulk production line machines using bulk fabric and actual trims.",
      "Prepare official Trim Cards, shade bands, and approved sealed garment counter samples.",
      "Conduct production pre-start meeting with factory sewing supervisors and quality assurance heads.",
    ],
    deliverable:
      "Buyer Golden Seal PP Sample & Factory Bulk Production Release Note",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    qualification: "B.A. Degree",
    degreeName: "Bachelor of Arts",
    institutionLevel: "Degree Course (3rd Year Running)",
    year: "Ongoing (Studying)",
    result: "Enrolled / In Progress",
    statusText: "Currently Continuing Higher Education",
    description:
      "Balancing active full-time apparel sample coordination with degree coursework in humanities and communication, developing strong management, verbal, and analytical competencies.",
  },
  {
    qualification: "HSC",
    degreeName: "Higher Secondary Certificate",
    institutionLevel: "College Education",
    year: "2022",
    result: "GPA 4.38 (Out of 5.00)",
    statusText: "Passed with High Distinction",
    description:
      "Successfully graduated with outstanding GPA 4.38 while simultaneously joining the textile apparel industry at Synergies Sourcing Bangladesh in February 2022.",
  },
  {
    qualification: "SSC",
    degreeName: "Secondary School Certificate",
    institutionLevel: "Secondary School Education",
    year: "2020",
    result: "GPA 4.32 (Out of 5.00)",
    statusText: "Passed with Distinction",
    description:
      "Graduated with strong analytical foundation, discipline, mathematics, and science grounding, achieving GPA 4.32.",
  },
];

export const DEVELOPER_CREDIT = {
  name: "Khalid Saifullah",
  bengaliName: "খালিদ সাইফুল্লাহ",
  role: "Web & Frontend Engineer",
  email: "khalidsaifullaha4@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/8801902123875",
    portfolio: "#",
  },
  badgeText: "Crafted & Engineered with Pride",
};

export const DEVELOPER_INFO = DEVELOPER_CREDIT;
