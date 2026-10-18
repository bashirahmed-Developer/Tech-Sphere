/**
 * TechSphere - Electronics & Tech Catalog Data
 * Comprehensive collection of top-tier consumer electronics & gadgets
 */

const TECH_PRODUCTS = [
  // Laptops & Computers
  {
    id: "ts-lap-01",
    name: "MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 3499,
    originalPrice: 3899,
    discount: "10% OFF",
    rating: 4.9,
    reviewsCount: 342,
    stock: 8,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "Equipped with the M3 Max chip, 16-core CPU, 40-core GPU, 36GB unified memory, and Liquid Retina XDR display.",
    specs: {
      processor: "Apple M3 Max (16-core)",
      ram: "36GB Unified Memory",
      storage: "1TB Ultra-Fast SSD",
      display: "16.2\" Liquid Retina XDR (120Hz)",
      battery: "Up to 22 hours",
      warranty: "1 Year Official Apple Care"
    }
  },
  {
    id: "ts-lap-02",
    name: "ASUS ROG Zephyrus G16 (OLED)",
    brand: "ASUS ROG",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 2299,
    originalPrice: 2599,
    discount: "12% OFF",
    rating: 4.8,
    reviewsCount: 198,
    stock: 5,
    badge: "Gaming Beast",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    description: "Intel Core Ultra 9 with NVIDIA GeForce RTX 4080, stunning 2.5K OLED 240Hz ROG Nebula Display.",
    specs: {
      processor: "Intel Core Ultra 9 185H",
      ram: "32GB LPDDR5X",
      storage: "2TB PCIe 4.0 NVMe",
      display: "16\" OLED 2.5K (240Hz, 0.2ms)",
      battery: "90Wh fast-charging",
      warranty: "2 Years Global ASUS Warranty"
    }
  },
  {
    id: "ts-lap-03",
    name: "Dell XPS 14 Core Ultra 7",
    brand: "Dell",
    category: "laptops",
    categoryLabel: "Laptops & PCs",
    price: 1699,
    originalPrice: 1899,
    discount: "11% OFF",
    rating: 4.7,
    reviewsCount: 124,
    stock: 12,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    description: "Precision CNC aluminum chassis with invisible glass touchpad, seamless touch function row, and RTX 4050.",
    specs: {
      processor: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5X",
      storage: "512GB NVMe SSD",
      display: "14.5\" 3.2K OLED Touch",
      battery: "Up to 15 hours",
      warranty: "1 Year Dell ProSupport"
    }
  },

  // Smartphones & Tablets
  {
    id: "ts-mob-01",
    name: "iPhone 16 Pro Max 256GB",
    brand: "Apple",
    category: "smartphones",
    categoryLabel: "Smartphones & Tablets",
    price: 1199,
    originalPrice: 1299,
    discount: "8% OFF",
    rating: 5.0,
    reviewsCount: 512,
    stock: 14,
    badge: "New Release",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "Grade 5 Titanium design with Camera Control button, 48MP Fusion camera system, and the ultra-powerful A18 Pro chip.",
    specs: {
      processor: "Apple A18 Pro (3nm)",
      ram: "8GB RAM",
      storage: "256GB NVMe",
      display: "6.9\" Super Retina XDR OLED (120Hz)",
      battery: "All-day battery life (MagSafe 25W)",
      warranty: "1 Year Official Apple Warranty"
    }
  },
  {
    id: "ts-mob-02",
    name: "Samsung Galaxy S24 Ultra AI",
    brand: "Samsung",
    category: "smartphones",
    categoryLabel: "Smartphones & Tablets",
    price: 1299,
    originalPrice: 1419,
    discount: "9% OFF",
    rating: 4.9,
    reviewsCount: 420,
    stock: 9,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    description: "Titanium exterior, built-in S Pen stylus, Galaxy AI capabilities, 200MP Quad Telephoto camera system.",
    specs: {
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      ram: "12GB RAM",
      storage: "512GB UFS 4.0",
      display: "6.8\" Dynamic AMOLED 2X 2600 nits",
      battery: "5000mAh with 45W Super Fast Charging",
      warranty: "1 Year Official Samsung Warranty"
    }
  },
  {
    id: "ts-mob-03",
    name: "iPad Pro 13\" M4 Ultra-Thin",
    brand: "Apple",
    category: "smartphones",
    categoryLabel: "Smartphones & Tablets",
    price: 1299,
    originalPrice: 1399,
    discount: "7% OFF",
    rating: 4.9,
    reviewsCount: 231,
    stock: 11,
    badge: "Pro Pick",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "Unbelievably thin 5.1mm design with Ultra Retina XDR Tandem OLED technology and the game-changing Apple M4 chip.",
    specs: {
      processor: "Apple M4 Chip (9-core)",
      ram: "8GB Unified Memory",
      storage: "256GB Storage",
      display: "13\" Tandem OLED (1000 nits full-screen)",
      battery: "10 hours web surfing on Wi-Fi",
      warranty: "1 Year Apple Care"
    }
  },

  // Audio & Soundbars
  {
    id: "ts-aud-01",
    name: "Sony WH-1000XM5 Wireless ANC",
    brand: "Sony",
    category: "audio",
    categoryLabel: "Audio & Sound",
    price: 348,
    originalPrice: 399,
    discount: "13% OFF",
    rating: 4.9,
    reviewsCount: 885,
    stock: 22,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Industry-leading noise canceling with two processors and 8 microphones for unparalleled calls and immersive audio.",
    specs: {
      battery: "30 Hours playback with ANC on",
      driver: "30mm precision-engineered drivers",
      connectivity: "Bluetooth 5.2, Multipoint, LDAC, Hi-Res",
      features: "Speak-to-Chat, Quick Attention, Touch Sensor",
      weight: "250 grams lightweight comfort",
      warranty: "1 Year Sony Official Warranty"
    }
  },
  {
    id: "ts-aud-02",
    name: "AirPods Pro (2nd Gen) USB-C",
    brand: "Apple",
    category: "audio",
    categoryLabel: "Audio & Sound",
    price: 199,
    originalPrice: 249,
    discount: "20% OFF",
    rating: 4.8,
    reviewsCount: 960,
    stock: 18,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    description: "Apple H2 chip, Pro-level Active Noise Cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio.",
    specs: {
      battery: "Up to 6 hours (30 hours total with Case)",
      charging: "USB-C, MagSafe, Apple Watch charger",
      resistance: "IP54 dust, sweat, and water resistant",
      audio: "Custom high-excursion Apple driver",
      warranty: "1 Year Apple Warranty"
    }
  },
  {
    id: "ts-aud-03",
    name: "Bose SoundLink Revolve+ II 360°",
    brand: "Bose",
    category: "audio",
    categoryLabel: "Audio & Sound",
    price: 299,
    originalPrice: 329,
    discount: "9% OFF",
    rating: 4.7,
    reviewsCount: 310,
    stock: 7,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    description: "Engineered to deliver true 360° sound for consistent, uniform coverage with deep bass in every direction.",
    specs: {
      battery: "Up to 17 hours rechargeable battery",
      durability: "IP55 water and dust resistant",
      connectivity: "Bluetooth range up to 30 ft, NFC",
      features: "Flexible fabric handle, voice prompts",
      warranty: "1 Year Bose International Warranty"
    }
  },

  // Smartwatches & Wearables
  {
    id: "ts-wat-01",
    name: "Apple Watch Ultra 2 Titanium",
    brand: "Apple",
    category: "wearables",
    categoryLabel: "Smartwatches & Wearables",
    price: 799,
    originalPrice: 849,
    discount: "6% OFF",
    rating: 4.9,
    reviewsCount: 280,
    stock: 6,
    badge: "Rugged Pro",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
    description: "The most rugged Apple Watch ever with 49mm aerospace-grade titanium case, precision dual-frequency GPS, and S9 SiP.",
    specs: {
      display: "3000 nits Always-On Retina display",
      battery: "36 hours normal use (72h Low Power)",
      waterResistance: "100m water resistant, 40m recreational dive",
      sensors: "ECG, Blood Oxygen, Depth gauge, Siren",
      warranty: "1 Year Official Apple Warranty"
    }
  },
  {
    id: "ts-wat-02",
    name: "Samsung Galaxy Watch Ultra",
    brand: "Samsung",
    category: "wearables",
    categoryLabel: "Smartwatches & Wearables",
    price: 649,
    originalPrice: 699,
    discount: "7% OFF",
    rating: 4.8,
    reviewsCount: 145,
    stock: 8,
    badge: "AI Powered",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Grade 4 Titanium cushion design with 10ATM water resistance, dual-frequency GPS, and personalized Energy Score.",
    specs: {
      display: "1.5\" Super AMOLED (3000 nits)",
      battery: "Up to 100 hours in Power Saving mode",
      durability: "MIL-STD-810H military-grade toughness",
      health: "BioActive Sensor (HR, ECG, BIA, Sleep Apnea)",
      warranty: "1 Year Samsung Warranty"
    }
  },

  // Gaming Gear
  {
    id: "ts-gam-01",
    name: "Sony PlayStation 5 Pro Console",
    brand: "Sony PlayStation",
    category: "gaming",
    categoryLabel: "Gaming Gear",
    price: 699,
    originalPrice: 749,
    discount: "7% OFF",
    rating: 5.0,
    reviewsCount: 680,
    stock: 4,
    badge: "High Demand",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    description: "PlayStation Spectral Super Resolution (PSSR), 2TB ultra-fast SSD, advanced ray tracing, and 60FPS fidelity mode.",
    specs: {
      gpu: "Enhanced GPU with 67% more Compute Units",
      storage: "2TB Custom NVMe SSD",
      videoOutput: "Supports 4K 120Hz and 8K displays",
      audio: "Tempest 3D AudioTech",
      warranty: "1 Year Official Sony Warranty"
    }
  },
  {
    id: "ts-gam-02",
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech G",
    category: "gaming",
    categoryLabel: "Gaming Gear",
    price: 159,
    originalPrice: 179,
    discount: "11% OFF",
    rating: 4.9,
    reviewsCount: 412,
    stock: 15,
    badge: "Esports Choice",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    description: "Weighing only 60 grams, equipped with HERO 2 sensor (32,000 DPI), LIGHTFORCE hybrid optical-mechanical switches.",
    specs: {
      weight: "60 grams ultra-lightweight",
      sensor: "HERO 2 (100 – 32,000 DPI, 500+ IPS)",
      pollingRate: "4000Hz wireless polling rate",
      battery: "Up to 95 hours constant motion",
      warranty: "2 Years Logitech Limited Hardware"
    }
  },
  {
    id: "ts-gam-03",
    name: "Razer BlackWidow V4 Pro RGB",
    brand: "Razer",
    category: "gaming",
    categoryLabel: "Gaming Gear",
    price: 229,
    originalPrice: 249,
    discount: "8% OFF",
    rating: 4.8,
    reviewsCount: 215,
    stock: 10,
    badge: "RGB Master",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description: "Mechanical gaming keyboard with Razer Command Dial, 8 dedicated macro keys, magnetic plush leatherette wrist rest.",
    specs: {
      switches: "Razer Green Mechanical (Clicky & Tactile)",
      lighting: "Per-key Razer Chroma RGB with underglow",
      pollingRate: "Up to true 8000Hz polling rate",
      materials: "5052 Aluminum alloy top case",
      warranty: "2 Years Official Razer Warranty"
    }
  },

  // Cameras & Drones
  {
    id: "ts-cam-01",
    name: "DJI Mini 4 Pro 4K Drone Bundle",
    brand: "DJI",
    category: "cameras",
    categoryLabel: "Cameras & Drones",
    price: 959,
    originalPrice: 1059,
    discount: "9% OFF",
    rating: 4.9,
    reviewsCount: 310,
    stock: 6,
    badge: "Creator Kit",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    description: "Omnidirectional obstacle sensing, 4K/60fps HDR true vertical shooting, 20km FHD video transmission, 34-min flight.",
    specs: {
      camera: "1/1.3-inch CMOS, f/1.7, 48MP raw photos",
      video: "4K/60fps HDR, 4K/100fps slow-motion",
      transmission: "DJI O4 video transmission (up to 20 km)",
      weight: "< 249 grams (no FAA registration needed)",
      warranty: "1 Year DJI Care Refresh Eligible"
    }
  },
  {
    id: "ts-cam-02",
    name: "Sony Alpha 7 IV Full-Frame Camera",
    brand: "Sony",
    category: "cameras",
    categoryLabel: "Cameras & Drones",
    price: 2498,
    originalPrice: 2699,
    discount: "7% OFF",
    rating: 5.0,
    reviewsCount: 430,
    stock: 3,
    badge: "Cinema Pro",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "33MP Exmor R CMOS back-illuminated sensor, BIONZ XR processing engine, 4K 60p 10-bit 4:2:2 recording.",
    specs: {
      sensor: "33.0MP 35mm full-frame Exmor R CMOS",
      autofocus: "759-point phase-detection with Real-time Eye AF",
      stabilization: "5-axis in-body image stabilization (5.5 steps)",
      iso: "ISO 100-51200 (expandable to 50-204800)",
      warranty: "2 Years Official Sony Warranty"
    }
  }
];
