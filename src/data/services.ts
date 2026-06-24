export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  id: string; // Used as the slug in URL
  title: string;
  category: "consultation" | "dermatology" | "diagnostics" | "wellness";
  description: string;
  iconName: "Stethoscope" | "Sparkles" | "Layers" | "ShieldAlert" | "Heart" | "Activity";
  details: string[];
  duration: string;
  price: string;
  
  // Detailed fields for individual service routes
  overview: string;
  symptoms: string[];
  benefits: string[];
  process: string[];
  faqs: ServiceFaq[];
}

export const servicesData: Service[] = [
  {
    id: "general-consultation",
    title: "General Consultation",
    category: "consultation",
    description: "Comprehensive health evaluations, routine medical checks, and preventative health coaching.",
    iconName: "Stethoscope",
    details: [
      "Physical examination & vitals check",
      "Chronic condition coaching & management",
      "Preventative health screening recommendations",
      "Referrals to clinical specialists as needed"
    ],
    duration: "30 mins",
    price: "₹1,500",
    overview: "Our General Consultation service acts as the foundation of your healthcare journey. We conduct comprehensive physiological assessments, review your medical history, and establish a personalized healthcare baseline to support your longevity.",
    symptoms: [
      "Unexplained fatigue or low energy",
      "Routine health checks or physicals",
      "Initial screening for cardiovascular or metabolic risks",
      "Need for lifestyle or preventative wellness coaching"
    ],
    benefits: [
      "Complete medical history baseline formulation",
      "Early screening and identification of potential health issues",
      "Actionable preventative nutrition and lifestyle advice",
      "Coordinated referrals to top clinical specialists"
    ],
    process: [
      "Initial Intake & Vitals: Brief review of symptoms and measurement of blood pressure, heart rate, and metabolic indicators.",
      "Comprehensive Dialogue: Direct 1-on-1 consultation with the physician detailing medical history, diet, stress, and goals.",
      "Physiological Assessment: Standard medical examinations including abdominal, chest, and nerve reflex checkups.",
      "Care Protocol Formulation: Developing your personalized health screening plan and prescribing immediate care steps."
    ],
    faqs: [
      {
        q: "How often should I book a general consultation?",
        a: "We recommend that active adults schedule a general consultation once a year as a routine baseline wellness check."
      },
      {
        q: "Can I discuss multiple health concerns during one session?",
        a: "Yes, our consultations are longer than average consultation slots (30 minutes) specifically to allow for a comprehensive discussion of multiple health indicators."
      }
    ]
  },
  {
    id: "acne-treatment",
    title: "Acne Treatment",
    category: "dermatology",
    description: "Targeted clinical acne care combining state-of-the-art procedures with customized topical plans.",
    iconName: "Sparkles",
    details: [
      "Deep pore extractions & cleaning",
      "Custom chemical peeling sessions",
      "Laser therapy for acne scarring reduction",
      "Personalized topical & oral prescriptions"
    ],
    duration: "45 mins",
    price: "₹4,500",
    overview: "Our clinical Acne Treatment focuses on targeting the root biological causes of acne, including excess sebum production, bacteria, and hormonal fluctuations. We formulate bespoke therapeutic chemical peels and laser treatments to restore skin balance.",
    symptoms: [
      "Persistent inflammatory acne (papules, pustules)",
      "Severe cystic acne or painful nodules",
      "Post-acne hyperpigmentation or dark spots",
      "Atrophic or hypertrophic acne scarring"
    ],
    benefits: [
      "Substantial reduction in active acne lesions and outbreaks",
      "Enhanced skin cellular turnover for smoother texture",
      "Reduced inflammation, redness, and dermal swelling",
      "Long-term scar reduction and skin tone balancing"
    ],
    process: [
      "Dermal Assessment: High-resolution photographic skin analysis to evaluate oil production, pore congestion, and scar depth.",
      "Pore Extraction: Gentle, clinical extraction of open and closed comedones under strict sterile conditions.",
      "Therapeutic Application: Administering a custom salicylic or glycolic acid chemical peel matching your skin sensitivity.",
      "Home Regime Setup: Designing a bespoke daily topical skincare routine (cleansers, retinoids, sunscreens) to maintain results."
    ],
    faqs: [
      {
        q: "How many acne treatment sessions will I need?",
        a: "While active inflammation begins to subside after the first session, most patients require 3 to 6 sessions spaced 2-4 weeks apart for optimal skin clearing."
      },
      {
        q: "Will chemical peels cause my skin to peel heavily?",
        a: "We customize peel strengths. Most patients experience only mild, manageable flaking or dryness for 3-5 days post-treatment."
      }
    ]
  },
  {
    id: "hair-fall-consultation",
    title: "Hair Fall Consultation",
    category: "dermatology",
    description: "Scientific scalp mapping and clinical hair restoration therapies to resolve thinning.",
    iconName: "Layers",
    details: [
      "Digital microscopic scalp analysis",
      "Platelet-rich therapy (PRP) evaluation",
      "Clinical hair growth stimulating factors",
      "Nutritional & topical regrowth planning"
    ],
    duration: "45 mins",
    price: "₹6,000",
    overview: "Our Hair Fall Consultation provides a deep, scientific review of hair loss causes. We utilize advanced high-resolution trichoscopy to evaluate follicular health, hair density, and scalp hydration before executing clinical regrowth procedures.",
    symptoms: [
      "Excessive hair shedding during washing or brushing",
      "Visible thinning at the crown or receding hairline",
      "Localized hair loss patches (alopecia signs)",
      "Dry, inflamed, or highly congested scalp conditions"
    ],
    benefits: [
      "Accurate scientific diagnosis of hair loss root causes",
      "Restoration of optimal scalp micro-circulation and health",
      "Reactivation of dormant hair follicles for natural regrowth",
      "Strengthened hair shafts and improved hair density"
    ],
    process: [
      "Trichoscopic Scan: Microscopic digital imaging of the scalp to count active hairs per follicle and measure shaft thickness.",
      "Lab Evaluation: Reviewing blood panels for hormonal, nutritional, and autoimmune indicators linked to alopecia.",
      "Treatment Selection: Customizing clinical hair treatments (e.g. PRP micro-injections, topical peptide growth factors).",
      "Nutritional Mapping: Outlining mineral and vitamin supplementation strategies to support healthy hair production from within."
    ],
    faqs: [
      {
        q: "How long does it take to see results from hair therapies?",
        a: "Hair growth operates on a biological cycle. Visible improvement in hair density and reduction in shedding typically takes 3 to 6 months of consistent clinical therapy."
      },
      {
        q: "Is hair fall treatment painful?",
        a: "Micro-injection scalp treatments involve minimal discomfort. We apply a local topical numbing cream to ensure the procedure is comfortable."
      }
    ]
  },
  {
    id: "skin-allergy-treatment",
    title: "Skin Allergy Treatment",
    category: "dermatology",
    description: "Allergen screening, diagnostic patch testing, and advanced immunological treatments.",
    iconName: "ShieldAlert",
    details: [
      "Diagnostic patch and allergy testing",
      "Contact dermatitis screening & reporting",
      "Advanced anti-inflammatory prescriptions",
      "Avoidance strategy consultations"
    ],
    duration: "30 mins",
    price: "₹3,500",
    overview: "Our Skin Allergy Treatment targets chronic hives, eczema, and contact dermatitis. Through localized diagnostic patch testing and comprehensive allergen panels, we identify trigger agents and design precise immunological relief strategies.",
    symptoms: [
      "Chronic hives, skin rashes, or persistent itching",
      "Eczema flare-ups (atopic dermatitis)",
      "Contact allergy symptoms from metals, chemicals, or cosmetics",
      "Sudden localized swelling, redness, or blister formations"
    ],
    benefits: [
      "Immediate identify of external allergy triggers and contact irritants",
      "Rapid reduction in intense itching and localized inflammation",
      "Custom preventative avoidance strategies to prevent flares",
      "Bespoke anti-inflammatory and barrier-repair topical formulas"
    ],
    process: [
      "Patch Test Placement: Applying standardized allergen patches to the back to monitor delayed contact sensitivity reactions.",
      "Reaction Reading: Evaluating the skin after 48 and 72 hours to score allergic reactions to specific test substances.",
      "Symptom Control: Administering soothing topical treatments or advanced anti-histamines to provide immediate itch relief.",
      "Avoidance Protocol: Compiling a custom list of ingredients, chemicals, or foods to avoid based on test indicators."
    ],
    faqs: [
      {
        q: "How long must I wear the patch test?",
        a: "The diagnostic patches must remain in contact with your skin for 48 hours. You should avoid showering or intense sweating during this period."
      },
      {
        q: "Is the allergy test safe?",
        a: "Yes, clinical patch testing uses highly controlled, minute quantities of allergens applied topically, which is extremely safe for diagnosing contact allergies."
      }
    ]
  },
  {
    id: "cardiovascular-screening",
    title: "Cardiovascular Screening",
    category: "diagnostics",
    description: "Detailed cardiovascular health checkups including ECGs, lipid profile checks, and stress testing.",
    iconName: "Heart",
    details: [
      "12-Lead Electrocardiogram (ECG)",
      "High-sensitivity lipid profile review",
      "Risk assessment index reporting",
      "Personalized cardiac nutrition plan"
    ],
    duration: "60 mins",
    price: "₹8,000",
    overview: "Our Cardiovascular Screening service is an exhaustive, non-invasive assessment of your heart health. We combine electrocardiogram scans, lipid panels, and calculated arterial stiffness indexing to build a complete cardiovascular risk dashboard.",
    symptoms: [
      "Chest tightness, fluttering, or mild heart palpitations",
      "Family history of high blood pressure or early heart disease",
      "Unexplained shortness of breath during physical exertion",
      "Elevated cholesterol or lipid index levels on basic blood tests"
    ],
    benefits: [
      "Accurate baseline tracking of electrical cardiac activity",
      "Comprehensive breakdown of advanced lipid and inflammation markers",
      "Early identification of arterial plaque or coronary issues",
      "Tailored exercise and heart-healthy dietary protocols"
    ],
    process: [
      "Vascular Intake: Registering resting blood pressure and measuring peripheral oxygen saturation levels.",
      "ECG Recording: Placing electrodes to record the heart's electrical rhythm (12-Lead ECG).",
      "Blood Draw: Extracting samples for high-sensitivity C-reactive protein (hs-CRP) and advanced lipid fraction panels.",
      "Review & Strategy: In-depth consultation explaining cardiovascular risk indicators and outlining cardiovascular prevention plans."
    ],
    faqs: [
      {
        q: "Should I fast before the screening?",
        a: "Yes, we recommend fasting (water only) for 10-12 hours prior to your cardiovascular blood draw to ensure accurate triglyceride and blood sugar readings."
      },
      {
        q: "Does this screening replace a cardiologist consultation?",
        a: "This screening provides a comprehensive diagnostic profile. If abnormal electrical rhythms or high-risk biomarkers are detected, we arrange an immediate direct referral to our Chief Cardiologist."
      }
    ]
  },
  {
    id: "executive-wellness-scan",
    title: "Executive Wellness Scan",
    category: "wellness",
    description: "Premium full-body bio-metrical scans and metabolic diagnostics for active individuals.",
    iconName: "Activity",
    details: [
      "Bioelectrical impedance body composition",
      "Metabolic health biomarker reporting",
      "Cellular oxidative stress evaluations",
      "Longevity & fitness planning consult"
    ],
    duration: "90 mins",
    price: "₹15,000",
    overview: "Our Executive Wellness Scan is designed for high-performance individuals seeking to optimize their biological age. We conduct cellular stress evaluations, metabolic index readings, and detailed bio-impedance composition mapping.",
    symptoms: [
      "Need to optimize biological age and metabolic performance",
      "Chronic mental fatigue, stress, or brain fog",
      "Desire to build high-performance exercise and longevity plans",
      "Tracking muscle-to-fat balance with clinical accuracy"
    ],
    benefits: [
      "Deep understanding of cellular inflammation and oxidative load",
      "Precise analysis of skeletal muscle mass and visceral fat zones",
      "Identification of early warning metabolic and thyroid indicators",
      "Comprehensive biological age report and longevity roadmaps"
    ],
    process: [
      "Body Composition Scan: Clinical bio-impedance analysis mapping muscle segment distribution and visceral fat areas.",
      "Biomarker Collection: Specialized testing for cellular stress markers, thyroid hormones, and nutritional deficiencies.",
      "Metabolic Rate Test: Measuring resting metabolic oxygen exchange to establish precise caloric targets.",
      "Longevity consultation: Synthesizing diagnostic outputs into a comprehensive exercise, sleep, and longevity schedule."
    ],
    faqs: [
      {
        q: "How does body composition analysis work?",
        a: "Our clinical bio-impedance scanner passes a minute, imperceptible electrical current through the body to measure water resistance, yielding highly accurate tissue density mappings."
      },
      {
        q: "What is included in the longevity roadmap?",
        a: "Your roadmap details custom caloric needs, ideal target heart rate zones for fat oxidation, sleep supplements recommendations, and bio-age biomarkers to track annually."
      }
    ]
  }
];
export type { Service as ServiceType };
