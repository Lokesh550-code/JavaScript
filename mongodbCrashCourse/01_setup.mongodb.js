use("ecommerce");

db.products.insertMany([
  {
    name: "Logitech G502 HERO",
    category: "Electronics",
    subcategory: "Gaming Mice",
    brand: "Logitech",
    price: 4999,
    discount: 15,
    stock: 42,
    rating: 4.6,
    reviews: 1832,
    tags: ["gaming", "mouse", "wired", "rgb"],
    specifications: {
      connectivity: "USB",
      dpi: 25600,
      buttons: 11,
      weight: "121g",
    },
    seller: {
      name: "TechWorld",
      rating: 4.7,
    },
    isAvailable: true,
  },

  {
    name: "Keychron K2 Pro",
    category: "Electronics",
    subcategory: "Keyboards",
    brand: "Keychron",
    price: 8999,
    discount: 10,
    stock: 18,
    rating: 4.8,
    reviews: 764,
    tags: ["keyboard", "mechanical", "wireless", "bluetooth"],
    specifications: {
      connectivity: ["Bluetooth", "USB-C"],
      layout: "75%",
      switches: "Gateron Brown",
      backlight: "RGB",
    },
    seller: {
      name: "KeyHub",
      rating: 4.6,
    },
    isAvailable: true,
  },

  {
    name: "Sony WH-1000XM5",
    category: "Electronics",
    subcategory: "Headphones",
    brand: "Sony",
    price: 29999,
    discount: 18,
    stock: 7,
    rating: 4.7,
    reviews: 5241,
    tags: ["headphones", "wireless", "noise-cancelling", "bluetooth"],
    specifications: {
      connectivity: "Bluetooth",
      batteryLife: "30 hours",
      noiseCancellation: true,
      microphone: true,
    },
    seller: {
      name: "AudioZone",
      rating: 4.8,
    },
    isAvailable: true,
  },

  {
    name: "Samsung T7 Shield 1TB",
    category: "Electronics",
    subcategory: "Storage",
    brand: "Samsung",
    price: 8999,
    discount: 12,
    stock: 31,
    rating: 4.5,
    reviews: 2190,
    tags: ["ssd", "storage", "portable", "usb-c"],
    specifications: {
      capacity: "1TB",
      interface: "USB 3.2 Gen 2",
      readSpeed: "1050 MB/s",
      writeSpeed: "1000 MB/s",
    },
    seller: {
      name: "StorageMart",
      rating: 4.5,
    },
    isAvailable: true,
  },

  {
    name: "Apple iPhone 16",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "Apple",
    price: 79999,
    discount: 5,
    stock: 12,
    rating: 4.6,
    reviews: 3847,
    tags: ["smartphone", "apple", "ios", "5g"],
    specifications: {
      storage: "128GB",
      ram: "8GB",
      display: "6.1 inch",
      operatingSystem: "iOS",
      battery: "3561 mAh",
    },
    seller: {
      name: "MobilePlanet",
      rating: 4.7,
    },
    isAvailable: true,
  },

  {
    name: "Nike Air Max 270",
    category: "Fashion",
    subcategory: "Shoes",
    brand: "Nike",
    price: 12999,
    discount: 25,
    stock: 64,
    rating: 4.4,
    reviews: 3127,
    tags: ["shoes", "sneakers", "running", "sports"],
    specifications: {
      material: "Mesh",
      sole: "Rubber",
      gender: "Unisex",
      sizes: [7, 8, 9, 10, 11],
    },
    seller: {
      name: "ShoeHouse",
      rating: 4.4,
    },
    isAvailable: true,
  },

  {
    name: "Levi's 511 Slim Fit Jeans",
    category: "Fashion",
    subcategory: "Jeans",
    brand: "Levi's",
    price: 3499,
    discount: 20,
    stock: 89,
    rating: 4.3,
    reviews: 4521,
    tags: ["jeans", "denim", "casual", "slim-fit"],
    specifications: {
      material: "Denim",
      fit: "Slim",
      color: "Dark Blue",
      sizes: ["28", "30", "32", "34", "36"],
    },
    seller: {
      name: "FashionPoint",
      rating: 4.5,
    },
    isAvailable: true,
  },

  {
    name: "The North Face Nuptse Jacket",
    category: "Fashion",
    subcategory: "Jackets",
    brand: "The North Face",
    price: 18999,
    discount: 15,
    stock: 23,
    rating: 4.7,
    reviews: 987,
    tags: ["jacket", "winter", "outdoor", "puffer"],
    specifications: {
      material: "Nylon",
      insulation: "700 Fill Goose Down",
      waterproof: false,
      sizes: ["S", "M", "L", "XL"],
    },
    seller: {
      name: "OutdoorGear",
      rating: 4.6,
    },
    isAvailable: true,
  },

  {
    name: "Adidas Ultraboost Light",
    category: "Fashion",
    subcategory: "Running Shoes",
    brand: "Adidas",
    price: 15999,
    discount: 30,
    stock: 0,
    rating: 4.5,
    reviews: 1743,
    tags: ["running", "shoes", "sports", "ultraboost"],
    specifications: {
      material: "Primeknit",
      sole: "Continental Rubber",
      gender: "Unisex",
      sizes: [7, 8, 9, 10, 11],
    },
    seller: {
      name: "SportsWorld",
      rating: 4.3,
    },
    isAvailable: false,
  },

  {
    name: "Anker 737 Power Bank",
    category: "Electronics",
    subcategory: "Power Banks",
    brand: "Anker",
    price: 11999,
    discount: 10,
    stock: 36,
    rating: 4.6,
    reviews: 1287,
    tags: ["powerbank", "battery", "usb-c", "charging"],
    specifications: {
      capacity: "24000mAh",
      output: "140W",
      ports: 3,
      display: true,
    },
    seller: {
      name: "GadgetWorld",
      rating: 4.6,
    },
    isAvailable: true,
  },

  {
    name: "Kindle Paperwhite",
    category: "Books",
    subcategory: "E-Readers",
    brand: "Amazon",
    price: 14999,
    discount: 8,
    stock: 15,
    rating: 4.7,
    reviews: 6432,
    tags: ["ebook", "reader", "kindle", "books"],
    specifications: {
      storage: "16GB",
      display: "6.8 inch",
      waterproof: true,
      batteryLife: "10 weeks",
    },
    seller: {
      name: "BookStore",
      rating: 4.8,
    },
    isAvailable: true,
  },

  {
    name: "Atomic Habits",
    category: "Books",
    subcategory: "Self Help",
    brand: "Penguin Random House",
    price: 599,
    discount: 10,
    stock: 128,
    rating: 4.8,
    reviews: 18342,
    tags: ["books", "self-help", "habits", "productivity"],
    specifications: {
      author: "James Clear",
      pages: 320,
      language: "English",
      format: "Paperback",
    },
    seller: {
      name: "BookWorld",
      rating: 4.7,
    },
    isAvailable: true,
  },

  {
    name: "The Pragmatic Programmer",
    category: "Books",
    subcategory: "Programming",
    brand: "Addison-Wesley",
    price: 1299,
    discount: 5,
    stock: 47,
    rating: 4.7,
    reviews: 3210,
    tags: ["programming", "software", "development", "books"],
    specifications: {
      authors: ["David Thomas", "Andrew Hunt"],
      pages: 352,
      language: "English",
      format: "Paperback",
    },
    seller: {
      name: "TechBooks",
      rating: 4.8,
    },
    isAvailable: true,
  },

  {
    name: "Philips Air Fryer HD9252",
    category: "Home Appliances",
    subcategory: "Kitchen",
    brand: "Philips",
    price: 8999,
    discount: 22,
    stock: 28,
    rating: 4.4,
    reviews: 2917,
    tags: ["air-fryer", "kitchen", "appliance", "cooking"],
    specifications: {
      capacity: "4.1L",
      power: "1400W",
      temperatureRange: "80-200°C",
      digitalDisplay: true,
    },
    seller: {
      name: "HomeNeeds",
      rating: 4.5,
    },
    isAvailable: true,
  },

  {
    name: "Dyson V12 Detect Slim",
    category: "Home Appliances",
    subcategory: "Vacuum Cleaners",
    brand: "Dyson",
    price: 54999,
    discount: 10,
    stock: 5,
    rating: 4.6,
    reviews: 842,
    tags: ["vacuum", "cleaning", "cordless", "home"],
    specifications: {
      type: "Cordless",
      batteryLife: "60 minutes",
      weight: "2.2kg",
      capacity: "0.35L",
    },
    seller: {
      name: "HomeTech",
      rating: 4.7,
    },
    isAvailable: true,
  },

  {
    name: "Nivea Men Deep Face Wash",
    category: "Beauty",
    subcategory: "Skincare",
    brand: "Nivea",
    price: 299,
    discount: 12,
    stock: 156,
    rating: 4.2,
    reviews: 5321,
    tags: ["skincare", "facewash", "men", "beauty"],
    specifications: {
      volume: "150ml",
      skinType: "Oily",
      fragrance: "Charcoal",
    },
    seller: {
      name: "BeautyMart",
      rating: 4.4,
    },
    isAvailable: true,
  },

  {
    name: "The Man Company Blanc Perfume",
    category: "Beauty",
    subcategory: "Fragrances",
    brand: "The Man Company",
    price: 999,
    discount: 20,
    stock: 73,
    rating: 4.1,
    reviews: 2145,
    tags: ["perfume", "fragrance", "men", "grooming"],
    specifications: {
      volume: "100ml",
      concentration: "EDP",
      longevity: "6-8 hours",
      fragranceFamily: "Woody",
    },
    seller: {
      name: "FragranceHub",
      rating: 4.3,
    },
    isAvailable: true,
  },

  {
    name: "Mi Smart LED Bulb",
    category: "Electronics",
    subcategory: "Smart Home",
    brand: "Xiaomi",
    price: 799,
    discount: 15,
    stock: 94,
    rating: 4.3,
    reviews: 7214,
    tags: ["smart-home", "bulb", "wifi", "iot"],
    specifications: {
      power: "9W",
      connectivity: "WiFi",
      colors: "16 million",
      voiceControl: true,
    },
    seller: {
      name: "SmartHome Store",
      rating: 4.5,
    },
    isAvailable: true,
  },

  {
    name: "JBL Flip 6",
    category: "Electronics",
    subcategory: "Speakers",
    brand: "JBL",
    price: 9999,
    discount: 17,
    stock: 41,
    rating: 4.6,
    reviews: 4872,
    tags: ["speaker", "bluetooth", "portable", "audio"],
    specifications: {
      connectivity: "Bluetooth 5.1",
      batteryLife: "12 hours",
      waterproof: true,
      power: "30W",
    },
    seller: {
      name: "AudioWorld",
      rating: 4.6,
    },
    isAvailable: true,
  },

  {
    name: "IKEA MARKUS Office Chair",
    category: "Furniture",
    subcategory: "Office Chairs",
    brand: "IKEA",
    price: 16999,
    discount: 5,
    stock: 9,
    rating: 4.5,
    reviews: 1563,
    tags: ["chair", "office", "ergonomic", "furniture"],
    specifications: {
      material: "Mesh",
      adjustableHeight: true,
      armrests: true,
      weightCapacity: "110kg",
    },
    seller: {
      name: "FurnitureHub",
      rating: 4.4,
    },
    isAvailable: true,
  },
]);

db.contacts.insertMany([
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    phone: "+91-9876543210",
    address: {
      street: "42 MG Road",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001",
      country: "India",
    },
    age: 22,
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: true,
    },
  },

  {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91-9123456780",
    address: {
      street: "18 Park Street",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700016",
      country: "India",
    },
    age: 25,
    isActive: true,
    preferences: {
      newsletter: false,
      notifications: true,
    },
  },

  {
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    phone: "+91-9988776655",
    address: {
      street: "77 Civil Lines",
      city: "Nagpur",
      state: "Maharashtra",
      pincode: "440001",
      country: "India",
    },
    age: 28,
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: false,
    },
  },

  {
    name: "Ananya Rao",
    email: "ananya.rao@example.com",
    phone: "+91-9090909090",
    address: {
      street: "12 Indiranagar Main Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
      country: "India",
    },
    age: 21,
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: true,
    },
  },

  {
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    phone: "+91-9345678123",
    address: {
      street: "5 Sector 17",
      city: "Chandigarh",
      state: "Chandigarh",
      pincode: "160017",
      country: "India",
    },
    age: 31,
    isActive: false,
    preferences: {
      newsletter: false,
      notifications: false,
    },
  },

  {
    name: "Meera Kapoor",
    email: "meera.kapoor@example.com",
    phone: "+91-9765432109",
    address: {
      street: "91 Hauz Khas",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
      country: "India",
    },
    age: 27,
    isActive: true,
    preferences: {
      newsletter: true,
      notifications: false,
    },
  },
]);

db.orders.insertMany([
  {
    customerId: 1,
    items: [
      {
        productId: 1,
        quantity: 1,
        price: 4999,
      },
      {
        productId: 10,
        quantity: 1,
        price: 11999,
      },
    ],
    totalAmount: 16998,
    status: "Delivered",
    payment: {
      method: "UPI",
      status: "Paid",
    },
    shippingAddress: {
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001",
    },
    orderedAt: new Date("2026-09-02"),
  },

  {
    customerId: 2,
    items: [
      {
        productId: 5,
        quantity: 1,
        price: 79999,
      },
    ],
    totalAmount: 79999,
    status: "Shipped",
    payment: {
      method: "Credit Card",
      status: "Paid",
    },
    shippingAddress: {
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700016",
    },
    orderedAt: new Date("2026-09-15"),
  },

  {
    customerId: 3,
    items: [
      {
        productId: 6,
        quantity: 2,
        price: 12999,
      },
      {
        productId: 7,
        quantity: 1,
        price: 3499,
      },
    ],
    totalAmount: 29497,
    status: "Delivered",
    payment: {
      method: "UPI",
      status: "Paid",
    },
    shippingAddress: {
      city: "Nagpur",
      state: "Maharashtra",
      pincode: "440001",
    },
    orderedAt: new Date("2026-08-27"),
  },

  {
    customerId: 4,
    items: [
      {
        productId: 2,
        quantity: 1,
        price: 8999,
      },
      {
        productId: 18,
        quantity: 2,
        price: 799,
      },
    ],
    totalAmount: 10597,
    status: "Processing",
    payment: {
      method: "Debit Card",
      status: "Paid",
    },
    shippingAddress: {
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
    },
    orderedAt: new Date("2026-09-22"),
  },

  {
    customerId: 5,
    items: [
      {
        productId: 15,
        quantity: 1,
        price: 54999,
      },
    ],
    totalAmount: 54999,
    status: "Cancelled",
    payment: {
      method: "Net Banking",
      status: "Refunded",
    },
    shippingAddress: {
      city: "Chandigarh",
      state: "Chandigarh",
      pincode: "160017",
    },
    orderedAt: new Date("2026-08-19"),
  },

  {
    customerId: 6,
    items: [
      {
        productId: 11,
        quantity: 2,
        price: 14999,
      },
      {
        productId: 12,
        quantity: 1,
        price: 599,
      },
    ],
    totalAmount: 30597,
    status: "Delivered",
    payment: {
      method: "UPI",
      status: "Paid",
    },
    shippingAddress: {
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
    },
    orderedAt: new Date("2026-08-11"),
  },

  {
    customerId: 1,
    items: [
      {
        productId: 3,
        quantity: 1,
        price: 29999,
      },
    ],
    totalAmount: 29999,
    status: "Out for Delivery",
    payment: {
      method: "Credit Card",
      status: "Paid",
    },
    shippingAddress: {
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452001",
    },
    orderedAt: new Date("2026-09-20"),
  },

  {
    customerId: 4,
    items: [
      {
        productId: 17,
        quantity: 1,
        price: 999,
      },
      {
        productId: 16,
        quantity: 1,
        price: 299,
      },
    ],
    totalAmount: 1298,
    status: "Delivered",
    payment: {
      method: "UPI",
      status: "Paid",
    },
    shippingAddress: {
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
    },
    orderedAt: new Date("2026-07-30"),
  },
]);