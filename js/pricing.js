// ── Industry Data ─────────────────────────────────────────────────────────
const industryMeta = {
    // MICRO TIER
    gifts:      { label: "🎀 Gifts & Crafts",          tier: "micro" },
    homebaker:  { label: "🧁 Home Baker & Food",        tier: "micro" },
    fashion:    { label: "👗 Fashion & Accessories",    tier: "micro" },
    freelancer: { label: "📸 Freelancer & Creator",     tier: "micro" },
    // MEDIUM TIER
    restaurant: { label: "🍽️ Restaurant & Cafe",        tier: "medium" },
    beauty:     { label: "💇 Beauty & Wellness",        tier: "medium" },
    education:  { label: "🏫 Education & Coaching",     tier: "medium" },
    retail:     { label: "🛍️ Retail Shop",              tier: "medium" },
    fitness:    { label: "🏋️ Fitness & Sports",         tier: "medium" },
    trades:     { label: "🔧 Services & Trades",        tier: "medium" },
    // PREMIUM TIER
    healthcare:  { label: "🏥 Healthcare",              tier: "premium" },
    travel:      { label: "✈️ Travel & Tourism",        tier: "premium" },
    hotel:       { label: "🏨 Hotel & Resort",          tier: "premium" },
    realestate:  { label: "🏠 Real Estate",             tier: "premium" },
    corporate:   { label: "💼 Corporate & Legal",       tier: "premium" },
    ecommerce:   { label: "🛒 E-Commerce Brand",        tier: "premium" },
    // EVENT TIER
    wedding:       { label: "🎊 Wedding & Occasions",   tier: "event" },
    concert:       { label: "🎤 Concert & Shows",       tier: "event" },
    sports:        { label: "🏆 Sports Tournament",     tier: "event" },
    collegefest:   { label: "🎓 College & Uni Fest",    tier: "event" },
    corporateevent:{ label: "💼 Corporate Event",       tier: "event" },
};

// ── Pricing Cards by Industry ─────────────────────────────────────────────
const pricingData = {

    // ── MICRO industries (same cards, INR/USD aware) ──
    _micro_cards: (inr) => [
        {
            tier: "Starter",
            name: "Catalogue Website",
            price_inr: "Starting from ₹1,499",
            price_usd: "Starting from $60",
            suffix: "",
            features: ["3–4 page website", "Mobile responsive", "WhatsApp order button", "Instagram link", "1 revision"],
            featured: false
        },
        {
            tier: "Logo Design",
            name: "Brand Logo",
            price_inr: "Starting from ₹299",
            price_usd: "Starting from $15",
            suffix: "",
            features: ["1 logo concept", "2 revisions", "PNG & JPG files", "White & colour versions", "3-day delivery"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Post Designs",
            price_inr: "Starting from ₹499",
            price_usd: "Starting from $25",
            suffix: "/month",
            features: ["8 social media posts", "Festival & promo posts", "Instagram & Facebook ready", "Brand colours applied", "WhatsApp delivery"],
            featured: false
        },
        {
            tier: "Starter Bundle",
            name: "Website + Logo + Social",
            price_inr: "Starting from ₹2,999",
            price_usd: "Starting from $120",
            suffix: "",
            features: ["3-page website", "Logo design", "8 social media posts", "WhatsApp button", "Best value for new brands"],
            featured: true,
            badge: "Best Value"
        }
    ],

    // ── MEDIUM industries — per-industry cards ──
    restaurant: (inr) => [
        {
            tier: "Website",
            name: "Restaurant Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Menu page with photos", "Google Maps integration", "Reservation / contact form", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Brand Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design (3 concepts)", "Colour palette", "Menu card design", "Visiting card design", "All file formats"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Food Social Package",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["16 posts/month", "Food photography edits", "Offer & festival posts", "Instagram + Facebook", "Monthly performance report"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Restaurant Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo + Brand kit", "3 months social media", "Google Business setup", "Swiggy/Zomato banner design", "3 months support"],
            featured: false
        }
    ],

    beauty: (inr) => [
        {
            tier: "Website",
            name: "Salon Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Services & pricing page", "Gallery / before-after", "Appointment form", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Brand Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design (3 concepts)", "Colour palette", "Price list design", "Visiting card", "All file formats"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Beauty Social Package",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["16 posts/month", "Before & after reels covers", "Offer & festive posts", "Instagram + Facebook", "Story templates"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Salon Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo", "3 months social media", "Google Business setup", "Local SEO setup", "3 months support"],
            featured: false
        }
    ],

    education: (inr) => [
        {
            tier: "Website",
            name: "Coaching Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Courses & fees page", "Admission / enquiry form", "Faculty profiles", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Brand Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design", "Colour palette", "Admission flyer design", "Visiting card", "All file formats"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Education Social Package",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["16 posts/month", "Result announcements", "Batch start promotions", "Instagram + Facebook", "WhatsApp status posts"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Education Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo", "3 months social media", "Google Business setup", "Local SEO", "3 months support"],
            featured: false
        }
    ],

    retail: (inr) => [
        {
            tier: "Website",
            name: "Shop Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Product showcase", "WhatsApp order button", "Google Maps", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Brand Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design", "Shop signboard design", "Carry bag design", "Visiting card", "All file formats"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Retail Social Package",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["16 posts/month", "Offer & sale posts", "New arrival announcements", "Instagram + Facebook", "Festival promotions"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Retail Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo", "3 months social media", "Google Business setup", "Local SEO", "3 months support"],
            featured: false
        }
    ],

    fitness: (inr) => [
        {
            tier: "Website",
            name: "Gym / Academy Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Membership plans page", "Class schedule", "Enquiry / registration form", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Brand Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design", "T-shirt / uniform mockup", "Membership card design", "Visiting card", "All file formats"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Fitness Social Package",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["16 posts/month", "Transformation posts", "Motivational content", "Instagram + Facebook", "Reel cover designs"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Fitness Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo", "3 months social media", "Google Business setup", "Local SEO", "3 months support"],
            featured: false
        }
    ],

    trades: (inr) => [
        {
            tier: "Website",
            name: "Services Website",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["5-page website", "Services listing", "WhatsApp call-to-action", "Google Maps", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Logo + Visiting Card",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Logo design", "Visiting card design", "Invoice / bill template", "All file formats", "3-day delivery"],
            featured: false
        },
        {
            tier: "Social Media",
            name: "Local Business Posts",
            price_inr: "Starting from ₹2,499",
            price_usd: "Starting from $100",
            suffix: "/month",
            features: ["12 posts/month", "Before & after work photos", "Service highlight posts", "Instagram + Facebook", "WhatsApp status posts"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Complete",
            name: "Full Local Bundle",
            price_inr: "Starting from ₹12,999",
            price_usd: "Starting from $550",
            suffix: "",
            features: ["Website + Logo", "3 months social media", "Google Business setup", "Local SEO", "3 months support"],
            featured: false
        }
    ],

    // ── PREMIUM industries ──
    healthcare: (inr) => [
        {
            tier: "Website",
            name: "Clinic / Hospital Website",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Custom multi-page website", "Doctor profiles & specialties", "Appointment booking form", "Department / services listing", "Mobile responsive + fast loading"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Medical Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + full brand kit", "Letterhead & prescription pad", "Visiting card design", "Signboard design", "All print-ready files"],
            featured: false
        },
        {
            tier: "SEO & Social",
            name: "Healthcare Digital Growth",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $350",
            suffix: "/month",
            features: ["Local SEO for clinic", "Google Business optimisation", "16 social media posts", "Patient awareness content", "Monthly performance report"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Complete Package",
            name: "Full Clinic Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Custom website + branding", "6 months SEO", "Social media management", "Google Ads setup", "Appointment system", "Priority support"],
            featured: false
        }
    ],

    travel: (inr) => [
        {
            tier: "Website",
            name: "Travel Agency Website",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Custom multi-page website", "Tour packages showcase", "Enquiry & booking form", "Photo / video gallery", "WhatsApp integration"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Travel Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + full brand kit", "Tour brochure design", "Visiting card design", "Social media kit", "All file formats"],
            featured: false
        },
        {
            tier: "SEO & Social",
            name: "Tourism Digital Growth",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $350",
            suffix: "/month",
            features: ["SEO for tour packages", "Google Business optimisation", "20 social media posts", "Destination highlight content", "Monthly performance report"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Complete Package",
            name: "Full Travel Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Custom website + branding", "6 months SEO", "Social media management", "Google & Meta Ads", "Seasonal campaign creatives", "Priority support"],
            featured: false
        }
    ],

    hotel: (inr) => [
        {
            tier: "Website",
            name: "Hotel / Resort Website",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Custom multi-page website", "Room showcase & gallery", "Online booking / enquiry form", "Amenities & tariff page", "Mobile responsive + SEO ready"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Hospitality Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + full brand kit", "Menu & tariff card design", "Room keytag & stationery", "Social media kit", "All print-ready files"],
            featured: false
        },
        {
            tier: "SEO & Social",
            name: "Hotel Digital Growth",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $350",
            suffix: "/month",
            features: ["Local SEO for hotel", "Google Business & Maps optimisation", "20 social media posts", "Season & offer promotions", "Booking enquiry tracking"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Complete Package",
            name: "Full Hotel Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Custom website + branding", "6 months SEO", "Social media management", "Google & Meta Ads", "OTA listing optimisation", "Priority support"],
            featured: false
        }
    ],

    realestate: (inr) => [
        {
            tier: "Website",
            name: "Real Estate Website",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Custom multi-page website", "Property listings with filters", "Lead capture forms", "Map integration", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Property Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + full brand kit", "Property brochure design", "Visiting card design", "Site hoarding design", "All file formats"],
            featured: false
        },
        {
            tier: "SEO & Social",
            name: "Real Estate Digital Growth",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $350",
            suffix: "/month",
            features: ["Local & national SEO", "Property listing promotion", "16 social media posts", "Google Business management", "Monthly lead report"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Complete Package",
            name: "Full Real Estate Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Custom website + branding", "6 months SEO", "Social media management", "Google & Meta Ads", "Property brochures", "Priority support"],
            featured: false
        }
    ],

    corporate: (inr) => [
        {
            tier: "Website",
            name: "Corporate Website",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Custom multi-page website", "Services & team pages", "Client / case study section", "Lead capture forms", "Fast & SEO optimised"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Corporate Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + full brand kit", "Letterhead & email signature", "Presentation template", "Visiting card design", "Brand manual PDF"],
            featured: false
        },
        {
            tier: "SEO & Social",
            name: "Corporate Digital Growth",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $350",
            suffix: "/month",
            features: ["National SEO strategy", "LinkedIn + social media", "Thought leadership content", "Google Business management", "Monthly analytics report"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Complete Package",
            name: "Full Corporate Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Custom website + branding", "6 months SEO", "Social media management", "Google Ads setup", "Email marketing setup", "Priority support"],
            featured: false
        }
    ],

    ecommerce: (inr) => [
        {
            tier: "Website",
            name: "E-Commerce Store",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $800",
            suffix: "",
            features: ["Full online store", "Product management", "Payment gateway integration", "Order tracking", "Shopify / WooCommerce"],
            featured: false
        },
        {
            tier: "Branding",
            name: "Brand Identity",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $180",
            suffix: "",
            features: ["Logo + brand kit", "Packaging design", "Product label design", "Social media kit", "All file formats"],
            featured: false
        },
        {
            tier: "SEO & Marketing",
            name: "E-Commerce Growth",
            price_inr: "Starting from ₹9,999",
            price_usd: "Starting from $450",
            suffix: "/month",
            features: ["Product SEO optimisation", "Google Shopping setup", "Social media ads", "20 product posts/month", "Sales & traffic report"],
            featured: true,
            badge: "Best ROI"
        },
        {
            tier: "Complete Package",
            name: "Full E-Commerce Bundle",
            price_inr: "Starting from ₹39,999",
            price_usd: "Starting from $1,800",
            suffix: "",
            features: ["Store + branding", "6 months SEO", "Google & Meta Ads", "Social media management", "Email marketing", "Priority support"],
            featured: false
        }
    ],

    // ── EVENT industries ──
    wedding: (inr) => [
        {
            tier: "Basic",
            name: "Wedding Page",
            price_inr: "Starting from ₹1,999",
            price_usd: "Starting from $80",
            suffix: "",
            features: ["Single page", "Couple names & date", "Venue info & Google Maps", "RSVP form", "Shareable link"],
            featured: false
        },
        {
            tier: "Standard",
            name: "Wedding Website",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $160",
            suffix: "",
            features: ["Multi-page website", "Photo gallery", "Countdown timer", "Story / timeline section", "Mobile responsive"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Premium",
            name: "Premium Wedding Site",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $320",
            suffix: "",
            features: ["Custom animations", "Video background", "Live stream link", "Password protected", "Guest RSVP management"],
            featured: false
        },
        {
            tier: "Add-ons",
            name: "Invitation Design",
            price_inr: "Starting from ₹499",
            price_usd: "Starting from $25",
            suffix: "",
            features: ["Digital invitation design", "WhatsApp invitation video", "Social media save-the-date", "Event posters", "Printable versions"],
            featured: false
        }
    ],

    concert: (inr) => [
        {
            tier: "Basic",
            name: "Event Landing Page",
            price_inr: "Starting from ₹1,499",
            price_usd: "Starting from $60",
            suffix: "",
            features: ["Single landing page", "Event details & lineup", "WhatsApp ticket booking", "Countdown timer", "Shareable link"],
            featured: false
        },
        {
            tier: "Standard",
            name: "Event Website",
            price_inr: "Starting from ₹2,999",
            price_usd: "Starting from $120",
            suffix: "",
            features: ["Multi-section website", "Ticket booking integration", "Artist profiles", "Photo & video gallery", "Mobile responsive"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Premium",
            name: "Full Event Site",
            price_inr: "Starting from ₹5,999",
            price_usd: "Starting from $250",
            suffix: "",
            features: ["Online payment integration", "QR ticket system", "Sponsors section", "Live updates page", "Post-event gallery"],
            featured: false
        },
        {
            tier: "Add-ons",
            name: "Event Promotion Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Event poster designs (3)", "Instagram story templates", "WhatsApp broadcast banner", "Facebook event cover", "Print-ready files"],
            featured: false
        }
    ],

    sports: (inr) => [
        {
            tier: "Basic",
            name: "Tournament Page",
            price_inr: "Starting from ₹1,999",
            price_usd: "Starting from $80",
            suffix: "",
            features: ["Event info page", "Team / player registration form", "Schedule & fixtures", "Contact details", "Shareable link"],
            featured: false
        },
        {
            tier: "Standard",
            name: "Tournament Website",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $160",
            suffix: "",
            features: ["Full tournament website", "Team profiles", "Bracket / knockout display", "Live score update section", "Photo gallery"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Premium",
            name: "Full Tournament Platform",
            price_inr: "Starting from ₹7,999",
            price_usd: "Starting from $320",
            suffix: "",
            features: ["Online registration + payment", "Automated schedule", "Player stats page", "Sponsors section", "Results archive"],
            featured: false
        },
        {
            tier: "Add-ons",
            name: "Sports Promo Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Tournament poster design", "Team jersey number cards", "Trophy photo template", "Social media announcement posts", "WhatsApp status graphics"],
            featured: false
        }
    ],

    collegefest: (inr) => [
        {
            tier: "Basic",
            name: "Fest Info Page",
            price_inr: "Starting from ₹1,999",
            price_usd: "Starting from $80",
            suffix: "",
            features: ["Event info page", "Events listing", "Registration form", "Schedule", "Shareable link"],
            featured: false
        },
        {
            tier: "Standard",
            name: "Fest Website",
            price_inr: "Starting from ₹3,999",
            price_usd: "Starting from $160",
            suffix: "",
            features: ["Multi-event website", "Team registration", "Coordinators listing", "Sponsors section", "Mobile responsive"],
            featured: true,
            badge: "Most Popular"
        },
        {
            tier: "Premium",
            name: "Full Fest Platform",
            price_inr: "Starting from ₹8,999",
            price_usd: "Starting from $380",
            suffix: "",
            features: ["Registration + payment", "Results & winners page", "Gallery section", "Merchandise page", "Post-fest highlights"],
            featured: false
        },
        {
            tier: "Add-ons",
            name: "Fest Promo Kit",
            price_inr: "Starting from ₹999",
            price_usd: "Starting from $45",
            suffix: "",
            features: ["Event poster (print ready)", "Instagram story templates", "Facebook event cover", "WhatsApp promo graphics", "Sponsorship proposal design"],
            featured: false
        }
    ],

    corporateevent: (inr) => [
        {
            tier: "Basic",
            name: "Event Landing Page",
            price_inr: "Starting from ₹4,999",
            price_usd: "Starting from $200",
            suffix: "",
            features: ["Event landing page", "Agenda / schedule", "Speaker profiles", "Registration form", "Mobile responsive"],
            featured: false
        },
        {
            tier: "Standard",
            name: "Conference Website",
            price_inr: "Starting from ₹9,999",
            price_usd: "Starting from $420",
            suffix: "",
            features: ["Full conference site", "Paid registration system", "Attendee downloads (agenda PDF)", "Sponsors section", "Post-event highlights page"],
            featured: true,
            badge: "Recommended"
        },
        {
            tier: "Premium",
            name: "Full Event Platform",
            price_inr: "Starting from ₹19,999",
            price_usd: "Starting from $850",
            suffix: "",
            features: ["Live streaming integration", "Attendee portal / login", "Networking directory", "On-demand recordings page", "Certificate download"],
            featured: false
        },
        {
            tier: "Add-ons",
            name: "Corporate Event Kit",
            price_inr: "Starting from ₹2,999",
            price_usd: "Starting from $120",
            suffix: "",
            features: ["Event branding design", "Email invite design", "LinkedIn event banner", "Delegate badge design", "Post-event social posts"],
            featured: false
        }
    ]
};

// Micro industries all use the same card set
['gifts','homebaker','fashion','freelancer'].forEach(k => {
    pricingData[k] = pricingData._micro_cards;
});

// ── Geo detection ─────────────────────────────────────────────────────────
let isIndia = true; // default India since Kerala market
(async () => {
    try {
        const r = await fetch('https://ipapi.co/json/');
        const d = await r.json();
        isIndia = (d.country_code === 'IN');
    } catch(e) { isIndia = true; }
})();

// ── Render ────────────────────────────────────────────────────────────────
function renderPricing(industry) {
    const meta  = industryMeta[industry];
    const cards = pricingData[industry]?.(isIndia);
    if (!cards) return;

    document.getElementById('pricingDefault').style.display = 'none';
    const output = document.getElementById('pricingOutput');
    output.style.display = 'block';
    document.getElementById('industryLabel').textContent = meta.label;

    const grid = document.getElementById('pricingCards');
    grid.innerHTML = '';

    cards.forEach(card => {
        const price = isIndia ? card.price_inr : card.price_usd;
        const suffix = card.suffix ? `<span>${card.suffix}</span>` : '';
        const featuredClass = card.featured ? 'featured' : '';
        const badge = card.badge ? `<div class="pricing-badge">${card.badge}</div>` : '';
        const features = card.features.map(f => `<li><i class="fa-solid fa-check-circle"></i>${f}</li>`).join('');
        const contactUrl = `contact.html?industry=${industry}&service=${encodeURIComponent(card.name)}`;

        grid.innerHTML += `
            <div class="col-lg-3 col-md-6 d-flex pricing-card-wrap">
                <div class="pricing-card ${featuredClass} w-100">
                    ${badge}
                    <div class="pricing-tier">${card.tier}</div>
                    <div class="pricing-name">${card.name}</div>
                    <div class="pricing-starting">Starting from</div>
                    <div class="pricing-price">${price}${suffix}</div>
                    <hr class="pricing-divider">
                    <ul class="pricing-features">${features}</ul>
                    <a href="${contactUrl}" class="pricing-cta">Get Started →</a>
                </div>
            </div>`;
    });
}

// ── Event listeners ───────────────────────────────────────────────────────
document.querySelectorAll('.industry-pill').forEach(pill => {
    pill.addEventListener('click', function() {
        document.querySelectorAll('.industry-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        renderPricing(this.dataset.industry);
        // Smooth scroll to results
        setTimeout(() => {
            document.getElementById('pricingOutput').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
});

document.getElementById('changeIndustryBtn').addEventListener('click', function() {
    document.getElementById('pricingOutput').style.display = 'none';
    document.getElementById('pricingDefault').style.display = 'block';
    document.querySelectorAll('.industry-pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.industry-selector').scrollIntoView({ behavior: 'smooth', block: 'start' });
});