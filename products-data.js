/**
 * TechSphere - Official Electronics & Gadgets Catalog
 * Curated flagship consumer electronics with verified specs and high-res visuals.
 */

const TECH_PRODUCTS = [
  // Laptops & Computers
  {
    id: "ts-lap-01",
    name: "Apple MacBook Pro 16\" (M3 Max)",
    brand: "Apple",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 945000,
    originalPrice: 1050000,
    priceUSD: 3399,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 384,
    stock: 6,
    isFlashDeal: true,
    badge: "Flagship Beast",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    description: "Powered by the groundbreaking 16-core M3 Max chip with 40-core GPU, 36GB unified memory, and 16.2-inch Liquid Retina XDR 120Hz ProMotion display. Up to 22 hours battery life.",
    specs: {
      processor: "Apple M3 Max (16-Core CPU, 40-Core GPU)",
      ram: "36GB Unified Memory",
      storage: "1TB Ultra-Fast NVMe SSD",
      display: "16.2\" Liquid Retina XDR (3456x2234, 120Hz)",
      battery: "100Wh (Up to 22 Hours)",
      warranty: "1 Year Official Apple Care International"
    }
  },
  {
    id: "ts-lap-02",
    name: "ASUS ROG Zephyrus G16 OLED (2024)",
    brand: "ASUS ROG",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 685000,
    originalPrice: 750000,
    priceUSD: 2450,
    discount: "9% OFF",
    rating: 4.8,
    reviewsCount: 219,
    stock: 4,
    isFlashDeal: true,
    badge: "Esports Choice",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
    description: "Ultra-slim CNC aluminum gaming powerhouse with Intel Core Ultra 9, NVIDIA GeForce RTX 4080 (12GB VRAM), and 2.5K 240Hz ROG Nebula OLED display with G-Sync.",
    specs: {
      processor: "Intel Core Ultra 9 185H (16 cores, 5.1GHz)",
      ram: "32GB LPDDR5X 7467MHz",
      storage: "2TB PCIe 4.0 NVMe M.2 SSD",
      display: "16\" 2.5K OLED 240Hz (0.2ms, 100% DCI-P3)",
      gpu: "NVIDIA GeForce RTX 4080 (12GB GDDR6)",
      warranty: "2 Years Asus Global Warranty"
    }
  },
  {
    id: "ts-lap-03",
    name: "Dell XPS 15 9530 (OLED Touch)",
    brand: "Dell",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 595000,
    originalPrice: 660000,
    priceUSD: 2150,
    discount: "10% OFF",
    rating: 4.7,
    reviewsCount: 165,
    stock: 7,
    badge: "Creator Favorite",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
    description: "The gold standard for creators. 13th Gen Intel Core i9, NVIDIA RTX 4070, CNC machined aluminum chassis with carbon fiber palm rest and 3.5K InfinityEdge OLED Touch display.",
    specs: {
      processor: "Intel Core i9-13900H (14 cores, 5.4GHz)",
      ram: "32GB DDR5 4800MHz Dual Channel",
      storage: "1TB PCIe Gen4 SSD",
      display: "15.6\" 3.5K OLED Touch (3456x2160, 400 nits)",
      gpu: "NVIDIA GeForce RTX 4070 (8GB)",
      warranty: "1 Year Dell Onsite ProSupport"
    }
  },
  {
    id: "ts-lap-04",
    name: "Lenovo Legion Pro 7i Gen 9",
    brand: "Lenovo",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 720000,
    originalPrice: 799000,
    priceUSD: 2599,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 142,
    stock: 5,
    badge: "Hardcore Gaming",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80",
    description: "AI-tuned ultimate gaming rig. Intel Core i9-14900HX paired with RTX 4090 16GB, Coldfront Vapor Chamber thermal cooling, and 240Hz PureSight 16\" IPS display.",
    specs: {
      processor: "Intel Core i9-14900HX (24 cores, 5.8GHz)",
      ram: "32GB Overclocked DDR5 5600MHz",
      storage: "2TB (2x 1TB) NVMe RAID 0",
      display: "16\" WQXGA 240Hz (500 nits, DisplayHDR 400)",
      gpu: "NVIDIA GeForce RTX 4090 16GB (175W TGP)",
      warranty: "1 Year Official Warranty"
    }
  },

  // Smartphones
  {
    id: "ts-phn-01",
    name: "Apple iPhone 16 Pro Max (512GB)",
    brand: "Apple",
    category: "phones",
    categoryLabel: "Smartphones",
    price: 525000,
    originalPrice: 565000,
    priceUSD: 1499,
    discount: "7% OFF",
    rating: 4.9,
    reviewsCount: 512,
    stock: 9,
    isFlashDeal: true,
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    description: "Forged in Grade 5 Titanium with larger 6.9-inch Super Retina XDR display, A18 Pro chip, 48MP Fusion Camera, and dedicated Camera Control touch sensor. PTA Approved.",
    specs: {
      processor: "Apple A18 Pro (6-core CPU, 6-core GPU, 16-core NPU)",
      ram: "8GB High-Speed LPDDR5X",
      storage: "512GB NVMe Storage",
      camera: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
      display: "6.9\" Super Retina XDR OLED (120Hz ProMotion)",
      ptaStatus: "PTA Official Approved (Sim Active)"
    }
  },
  {
    id: "ts-phn-02",
    name: "Samsung Galaxy S24 Ultra (AI Titanium)",
    brand: "Samsung",
    category: "phones",
    categoryLabel: "Smartphones",
    price: 435000,
    originalPrice: 479000,
    priceUSD: 1399,
    discount: "9% OFF",
    rating: 4.8,
    reviewsCount: 420,
    stock: 11,
    isFlashDeal: true,
    badge: "Galaxy AI",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    description: "Titanium armor frame, embedded S-Pen, Galaxy AI live translation and Circle to Search, 200MP Quad Tele camera system, and 2600 nits anti-reflective Dynamic AMOLED 2X display.",
    specs: {
      processor: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ram: "12GB LPDDR5X",
      storage: "512GB UFS 4.0",
      camera: "200MP + 50MP 5x + 10MP 3x + 12MP Ultra-wide",
      display: "6.8\" Dynamic AMOLED 2X (120Hz, 2600 nits)",
      battery: "5000mAh (45W Super Fast Charging)"
    }
  },
  {
    id: "ts-phn-03",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    category: "phones",
    categoryLabel: "Smartphones",
    price: 385000,
    originalPrice: 420000,
    priceUSD: 1199,
    discount: "8% OFF",
    rating: 4.8,
    reviewsCount: 194,
    stock: 8,
    badge: "Pure Android",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    description: "Gemini Nano on-device AI with Google Tensor G4 chip, 16GB RAM for heavy multi-modal tasks, Super Actua display, and industry-leading computational photography.",
    specs: {
      processor: "Google Tensor G4 with Titan M2 security",
      ram: "16GB LPDDR5X",
      storage: "256GB UFS 3.1",
      camera: "50MP Octa PD main + 48MP Quad PD tele + 48MP ultrawide",
      display: "6.8\" Super Actua LTPO OLED (1-120Hz, 3000 nits)",
      updates: "7 Years of Guaranteed OS & Security Drops"
    }
  },

  // Audio & Acoustics
  {
    id: "ts-aud-01",
    name: "Sony WH-1000XM5 ANC Headphones",
    brand: "Sony",
    category: "audio",
    categoryLabel: "Audio & Acoustics",
    price: 115000,
    originalPrice: 135000,
    priceUSD: 399,
    discount: "15% OFF",
    rating: 4.9,
    reviewsCount: 820,
    stock: 18,
    isFlashDeal: true,
    badge: "#1 ANC King",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    description: "Industry-leading noise cancellation powered by two processors and 8 microphones. Hi-Res Audio wireless with LDAC, crystal-clear hands-free calling, and 30-hour battery life with quick charge.",
    specs: {
      driver: "30mm Precision-Engineered Carbon Fiber Driver",
      anc: "Integrated Processor V1 + HD NC Processor QN1",
      battery: "30 Hours with ANC on (3 min charge = 3 hours)",
      codecs: "LDAC, AAC, SBC, Hi-Res Audio Wireless",
      weight: "250g Ultra-Comfort Lightweight"
    }
  },
  {
    id: "ts-aud-02",
    name: "Apple AirPods Max (USB-C 2024)",
    brand: "Apple",
    category: "audio",
    categoryLabel: "Audio & Acoustics",
    price: 189000,
    originalPrice: 210000,
    priceUSD: 549,
    discount: "10% OFF",
    rating: 4.8,
    reviewsCount: 310,
    stock: 7,
    badge: "Spatial Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. Anodized aluminum cups, breathable knit mesh canopy, and Personalized Spatial Audio with dynamic head tracking.",
    specs: {
      connectivity: "USB-C Audio & Lossless support + Bluetooth 5.3",
      chip: "Dual Apple H1 headphone chips (10 audio cores each)",
      anc: "Pro-Level Active Noise Cancellation & Transparency Mode",
      battery: "Up to 20 Hours with Spatial Audio Enabled",
      material: "Stainless steel frame with acoustically engineered cups"
    }
  },
  {
    id: "ts-aud-03",
    name: "Bose QuietComfort Ultra Earbuds",
    brand: "Bose",
    category: "audio",
    categoryLabel: "Audio & Acoustics",
    price: 88000,
    originalPrice: 105000,
    priceUSD: 299,
    discount: "16% OFF",
    rating: 4.7,
    reviewsCount: 245,
    stock: 14,
    badge: "Immersive Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    description: "World-class noise cancellation quieter than ever before. Breakthrough Bose Immersive Audio spatializes what you hear. CustomTune technology automatically shapes sound to your ear.",
    specs: {
      anc: "CustomTune Active Noise Cancelling",
      spatial: "Bose Immersive Audio Spatializer",
      battery: "6 Hours (24 hours total with wireless case)",
      waterResistance: "IPX4 Sweat & Weather Resistant",
      connectivity: "Bluetooth 5.3 with Snapdragon Sound aptX Adaptive"
    }
  },

  // Wearables & Smartwatches
  {
    id: "ts-wea-01",
    name: "Apple Watch Ultra 2 (Titanium 49mm)",
    brand: "Apple",
    category: "wearables",
    categoryLabel: "Wearables & Watches",
    price: 275000,
    originalPrice: 310000,
    priceUSD: 799,
    discount: "11% OFF",
    rating: 4.9,
    reviewsCount: 388,
    stock: 9,
    isFlashDeal: true,
    badge: "Extreme Durability",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "The most rugged and capable Apple Watch. Aerospace-grade 49mm titanium case, precision dual-frequency GPS, up to 36 hours of battery life, and 3000 nits brightest display ever.",
    specs: {
      caseSize: "49mm Natural Titanium (100m Water Resistant)",
      display: "Always-On Retina OLED (3000 nits Peak)",
      battery: "Up to 36 Hours (72 Hours in Low Power Mode)",
      features: "ECG, Blood Oxygen, Depth Gauge & Water Temp Sensor",
      connectivity: "Cellular + GPS Dual Frequency L1 & L5"
    }
  },
  {
    id: "ts-wea-02",
    name: "Samsung Galaxy Watch 6 Classic (47mm)",
    brand: "Samsung",
    category: "wearables",
    categoryLabel: "Wearables & Watches",
    price: 98000,
    originalPrice: 120000,
    priceUSD: 369,
    discount: "18% OFF",
    rating: 4.7,
    reviewsCount: 215,
    stock: 12,
    badge: "Rotating Bezel",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80",
    description: "The iconic rotating physical bezel returns. Comprehensive body composition BIA analysis, personalized heart rate zones, advanced sleep coaching, and Sapphire Crystal glass.",
    specs: {
      bezel: "Physical Stainless Steel Rotating Bezel",
      display: "1.5\" Super AMOLED (480x480, Sapphire Crystal)",
      os: "Wear OS Powered by Samsung (One UI 5 Watch)",
      sensors: "BioActive (Optical Heart + Electrical Heart + BIA)",
      battery: "425mAh (Fast Wireless Charging)"
    }
  },

  // Gaming Gear & Consoles
  {
    id: "ts-gam-01",
    name: "Sony PlayStation 5 Pro Console (2TB)",
    brand: "Sony",
    category: "gaming",
    categoryLabel: "Gaming & Esports",
    price: 255000,
    originalPrice: 285000,
    priceUSD: 749,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 467,
    stock: 5,
    isFlashDeal: true,
    badge: "4K 60FPS Ray Tracing",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
    description: "Experience enhanced PlayStation Spectral Super Resolution (PSSR) AI upscaling, 67% more Compute Units GPU, advanced Ray Tracing, 2TB high-speed SSD, and Wi-Fi 7 readiness.",
    specs: {
      gpu: "Upgraded RDNA 3 with Advanced Ray Tracing Hardware",
      storage: "2TB Ultra-High Speed Custom NVMe SSD",
      resolution: "Up to 8K Output / 4K 120Hz with PSSR AI",
      controller: "DualSense Wireless Controller with Haptic Feedback",
      audio: "Tempest 3D AudioTech"
    }
  },
  {
    id: "ts-gam-02",
    name: "Valve Steam Deck OLED (1TB Edition)",
    brand: "Valve",
    category: "gaming",
    categoryLabel: "Gaming & Esports",
    price: 215000,
    originalPrice: 240000,
    priceUSD: 649,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 310,
    stock: 7,
    badge: "Handheld Beast",
    image: "https://images.unsplash.com/photo-1612287233207-62887a02241f?auto=format&fit=crop&w=900&q=80",
    description: "Brighter 7.4-inch 90Hz HDR OLED screen with pure blacks, 6nm AMD APU for improved efficiency, 50Wh battery for 3-12 hours gaming, and ultra-fast Wi-Fi 6E.",
    specs: {
      display: "7.4\" 90Hz HDR OLED (1000 nits peak, 110% DCI-P3)",
      processor: "6nm AMD Zen 2 (4c/8t) + 8 RDNA 2 CUs",
      ram: "16GB LPDDR5 6400 MT/s",
      storage: "1TB NVMe High-Speed SSD with Anti-Glare Etched Glass",
      battery: "50Wh (30-50% longer than LCD model)"
    }
  },
  {
    id: "ts-gam-03",
    name: "Logitech G Pro X Superlight 2 Lightspeed",
    brand: "Logitech",
    category: "gaming",
    categoryLabel: "Gaming & Esports",
    price: 49500,
    originalPrice: 58000,
    priceUSD: 159,
    discount: "14% OFF",
    rating: 4.8,
    reviewsCount: 630,
    stock: 22,
    badge: "Pro Esports",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80",
    description: "Weighing only 60 grams with hybrid optical-mechanical LIGHTFORCE switches, HERO 2 sensor with up to 32,000 DPI and 44,000 FPS tracking, USB-C, and 95 hours battery life.",
    specs: {
      weight: "60 grams ultra-lightweight chassis",
      sensor: "HERO 2 (100 to 32,000 DPI, >500 IPS)",
      pollingRate: "Up to 4000Hz Report Rate",
      switches: "LIGHTFORCE Optical-Mechanical Hybrid",
      battery: "95 Hours continuous motion"
    }
  },

  // Drones & Optics
  {
    id: "ts-drn-01",
    name: "DJI Mini 4 Pro Drone (Fly More Combo)",
    brand: "DJI",
    category: "drones",
    categoryLabel: "Drones & Optics",
    price: 365000,
    originalPrice: 410000,
    priceUSD: 1099,
    discount: "11% OFF",
    rating: 4.9,
    reviewsCount: 180,
    stock: 6,
    badge: "Omni Obstacle",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80",
    description: "Sub-249g ultra-lightweight drone with omnidirectional obstacle sensing, 4K/60fps HDR True Vertical Shooting, 20km FHD video transmission with DJI O4, and 34 mins flight time.",
    specs: {
      weight: "< 249 g (No FAA/CAA registration in many regions)",
      camera: "1/1.3-inch CMOS Sensor, 48MP, 4K/60fps HDR",
      transmission: "DJI O4 (Up to 20 km range 1080p/60fps)",
      sensing: "Omnidirectional Vision Sensing with ActiveTrack 360",
      package: "Includes DJI RC 2 with screen + 3 Batteries + Hub"
    }
  },
  {
    id: "ts-drn-02",
    name: "Sony Alpha A7 IV Full-Frame Mirrorless",
    brand: "Sony",
    category: "drones",
    categoryLabel: "Drones & Optics",
    price: 720000,
    originalPrice: 799000,
    priceUSD: 2498,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 145,
    stock: 3,
    badge: "Pro Hybrid",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    description: "The baseline has been redefined. 33MP Exmor R back-illuminated CMOS sensor, BIONZ XR processing engine with 8x more power, 4K 60p 10-bit 4:2:2 video, and real-time Eye AF.",
    specs: {
      sensor: "33.0 Megapixel 35mm Full-Frame Exmor R CMOS",
      video: "4K 60p in Super 35 / 4K 30p 7K oversampled Full-Frame",
      autofocus: "759 phase-detection points (Human/Animal/Bird)",
      stabilization: "5-axis in-body optical image stabilization (5.5 stops)",
      viewfinder: "3.68 million-dot Quad-VGA OLED EVF"
    }
  }
];

// Available discount coupons
const PROMO_COUPONS = {
  "TECH10": { discountPercent: 10, label: "TechSphere 10% Off", minOrder: 50000 },
  "WELCOME20": { discountPercent: 20, label: "New Member 20% Off", minOrder: 100000 },
  "COD5": { discountPercent: 5, label: "Cash on Delivery Perk 5% Off", minOrder: 0 },
  "VIP15": { discountPercent: 15, label: "VIP Customer 15% Off", minOrder: 200000 }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TECH_PRODUCTS, PROMO_COUPONS };
}
