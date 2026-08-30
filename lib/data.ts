export const BRAND = {
  name: 'Royal Crescent Banquet',
  tagline: 'Where Your Special Moments Become Unforgettable',
  whatsapp: '03173813148',
  whatsappIntl: '923173813148',
  phone: '0317 381 3148',
  email: 'info@royalcrescentbanquet.pk',
  address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  hours: 'Mon – Sun: 10:00 AM – 11:00 PM',
};

export type Hall = {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  capacityNum: number;
  price: string;
  priceNum: number;
  description: string;
  image: string;
  gallery: string[];
  facilities: string[];
};

export const halls: Hall[] = [
  {
    id: 'grand-ballroom',
    name: 'Grand Ballroom',
    tagline: 'The Crown Jewel of Celebrations',
    capacity: '800 Guests',
    capacityNum: 800,
    price: '₨450,000',
    priceNum: 450000,
    description:
      'Our flagship Grand Ballroom is a masterpiece of architectural elegance, featuring soaring crystal chandeliers, hand-crafted marble flooring, and a grand stage that transforms every celebration into a royal affair. Ideal for the largest weddings, walimas, and corporate galas.',
    image:
      'https://images.pexels.com/photos/14646749/pexels-photo-14646749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/14646749/pexels-photo-14646749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12688995/pexels-photo-12688995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    facilities: [
      'Crystal chandeliers & ambient lighting',
      'Grand royal stage with LED backdrop',
      'Central air conditioning',
      'Dedicated bridal suite',
      'Valet parking for 200 cars',
      'State-of-the-art sound system',
      'Professional lighting & fog machines',
      'Separate entrance for bride & groom',
    ],
  },
  {
    id: 'royal-hall',
    name: 'Royal Hall',
    tagline: 'Timeless Elegance for Intimate Gatherings',
    capacity: '500 Guests',
    capacityNum: 500,
    price: '₨300,000',
    priceNum: 300000,
    description:
      'The Royal Hall blends traditional Pakistani aesthetics with modern luxury. Warm golden accents, intricate wall detailing, and a beautifully lit stage create the perfect setting for mehndi, engagement, and mid-size wedding celebrations.',
    image:
      'https://images.pexels.com/photos/20499528/pexels-photo-20499528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/20499528/pexels-photo-20499528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33914522/pexels-photo-33914522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4717526/pexels-photo-4717526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33852450/pexels-photo-33852450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    facilities: [
      'Elegant golden-themed decor',
      'Customizable stage design',
      'Central air conditioning',
      'Private changing rooms',
      'Parking for 120 cars',
      'Premium sound & lighting',
      'Dedicated service staff',
      'Outdoor pre-function area',
    ],
  },
  {
    id: 'garden-venue',
    name: 'Garden Venue',
    tagline: 'Open-Air Romance Under the Stars',
    capacity: '300 Guests',
    capacityNum: 300,
    price: '₨200,000',
    priceNum: 200000,
    description:
      'Our Garden Venue offers a breathtaking open-air setting surrounded by manicured lawns, fairy lights, and floral arches. Perfect for daytime mehndi, engagement ceremonies, and intimate birthday celebrations that call for natural beauty.',
    image:
      'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35629338/pexels-photo-35629338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8414416/pexels-photo-8414416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14726787/pexels-photo-14726787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    facilities: [
      'Lush manicured lawns',
      'Fairy light canopy & floral arches',
      'Open-air & tented options',
      'Garden lighting & sound',
      'Parking for 80 cars',
      'Weather backup tenting',
      'Outdoor BBQ & live counters',
      'Scenic photo backdrops',
    ],
  },
];

export type Package = {
  id: string;
  name: string;
  pricePerPerson: string;
  priceNum: number;
  tagline: string;
  popular?: boolean;
  features: string[];
  highlights: string[];
};

export const packages: Package[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    pricePerPerson: '₨2,500',
    priceNum: 2500,
    tagline: 'Classic elegance for memorable celebrations',
    features: [
      'Chicken Biryani',
      'Chicken Karahi',
      'Naan (unlimited)',
      'Salad & Raita',
      'Seasonal Dessert',
      'Tea',
      'Cold Drinks',
      'Standard table seating',
      'Basic stage decoration',
      'Welcome drinks',
    ],
    highlights: ['1 main curry', 'Standard decor', 'Self-service buffet'],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    pricePerPerson: '₨3,500',
    priceNum: 3500,
    tagline: 'The perfect balance of luxury and value',
    popular: true,
    features: [
      'Chicken Biryani',
      'Chicken Karahi',
      'Mutton Qorma',
      'BBQ Platter (Seekh Kebab & Chicken Tikka)',
      'Naan (unlimited)',
      'Fresh Salad & Raita',
      'Assorted Desserts',
      'Tea',
      'Cold Drinks',
      'Premium round-table seating',
      'Elegant stage decoration with florals',
      'Welcome drinks (mocktails)',
      'Dedicated wait staff',
    ],
    highlights: ['2 main curries + BBQ', 'Premium floral decor', 'Waiter-served buffet'],
  },
  {
    id: 'royal',
    name: 'Royal Package',
    pricePerPerson: '₨5,000',
    priceNum: 5000,
    tagline: 'An unforgettable royal experience',
    features: [
      'Chicken Biryani (Special)',
      'Chicken Karahi (White)',
      'Mutton Qorma',
      'BBQ Platter (Seekh Kebab, Chicken Tikka, Malai Boti)',
      'Fish Fried / Prawn Tempura',
      'Naan & Tandoori Roti (unlimited)',
      'Gourmet Salad & Raita',
      'Premium Dessert Selection (Gulab Jamun, Kheer, Cake)',
      'Tea & Specialty Cold Drinks',
      'Luxury round-table seating with linen',
      'Grand stage decoration with imported flowers',
      'Welcome drinks (fresh juices & mocktails)',
      'Live cooking stations',
      'Valet parking service',
      'Dedicated event manager',
    ],
    highlights: ['3 curries + BBQ + seafood', 'Grand imported floral decor', 'Live stations + event manager'],
  },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    description:
      'Fragrant long-grain basmati rice layered with tender spiced chicken, saffron, and caramelized onions — the crown of every Pakistani wedding feast.',
    image:
      'https://images.pexels.com/photos/8250738/pexels-photo-8250738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Main Course',
  },
  {
    id: 'karahi',
    name: 'Chicken Karahi',
    description:
      'A rich, tomato-based curry simmered in a traditional wok with green chilies, ginger, and aromatic Pakistani spices.',
    image:
      'https://images.pexels.com/photos/6113820/pexels-photo-6113820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Main Course',
  },
  {
    id: 'qorma',
    name: 'Mutton Qorma',
    description:
      'Slow-cooked mutton in a velvety gravy of yogurt, nuts, and royal Mughlai spices — a timeless wedding classic.',
    image:
      'https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Main Course',
  },
  {
    id: 'bbq',
    name: 'BBQ Platter',
    description:
      'Seekh kebabs, chicken tikka, and malai boti grilled to perfection over charcoal, served sizzling with chutney.',
    image:
      'https://images.pexels.com/photos/29244071/pexels-photo-29244071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'BBQ',
  },
  {
    id: 'naan',
    name: 'Naan & Tandoori Roti',
    description:
      'Freshly baked in our tandoor — soft, warm, and lightly charred, the perfect companion to every curry.',
    image:
      'https://images.pexels.com/photos/37223237/pexels-photo-37223237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Breads',
  },
  {
    id: 'salad',
    name: 'Fresh Salad',
    description:
      'Crisp garden vegetables with cucumber, tomato, onion, and lemon — a refreshing contrast to rich curries.',
    image:
      'https://images.pexels.com/photos/33419112/pexels-photo-33419112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sides',
  },
  {
    id: 'raita',
    name: 'Raita',
    description:
      'Cool, creamy yogurt whisked with cucumber, mint, and roasted cumin — the classic cooling accompaniment.',
    image:
      'https://images.pexels.com/photos/18601877/pexels-photo-18601877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Sides',
  },
  {
    id: 'desserts',
    name: 'Assorted Desserts',
    description:
      'A selection of traditional sweets including gulab jamun, kheer, and gajar ka halwa to end your feast on a sweet note.',
    image:
      'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Desserts',
  },
  {
    id: 'tea',
    name: 'Kashmiri Tea',
    description:
      'Pink-hued, cardamom-infused Kashmiri chai topped with pistachios and almonds — a signature wedding beverage.',
    image:
      'https://images.pexels.com/photos/26774580/pexels-photo-26774580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Beverages',
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    description:
      'A chilled selection of soft drinks, fresh juices, and mocktails to keep every guest refreshed.',
    image:
      'https://images.pexels.com/photos/5156053/pexels-photo-5156053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Beverages',
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.pexels.com/photos/12688995/pexels-photo-12688995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Grand banquet hall with chandeliers and floral decor',
    category: 'Wedding',
  },
  {
    id: 'g2',
    src: 'https://images.pexels.com/photos/29169311/pexels-photo-29169311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bridal hand with intricate henna designs',
    category: 'Mehndi',
  },
  {
    id: 'g3',
    src: 'https://images.pexels.com/photos/33914522/pexels-photo-33914522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant wedding reception hall with round tables',
    category: 'Walima',
  },
  {
    id: 'g4',
    src: 'https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vibrant floral wedding stage with golden columns',
    category: 'Decorations',
  },
  {
    id: 'g5',
    src: 'https://images.pexels.com/photos/7245469/pexels-photo-7245469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Banquet feast with grilled meat and dishes',
    category: 'Dining',
  },
  {
    id: 'g6',
    src: 'https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxurious ballroom with chandeliers',
    category: 'Hall Interior',
  },
  {
    id: 'g7',
    src: 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Grand indoor wedding reception with ornate lighting',
    category: 'Wedding',
  },
  {
    id: 'g8',
    src: 'https://images.pexels.com/photos/31032199/pexels-photo-31032199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Intricate mehndi designs in vibrant yellow',
    category: 'Mehndi',
  },
  {
    id: 'g9',
    src: 'https://images.pexels.com/photos/33914523/pexels-photo-33914523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Beautifully decorated walima reception hall',
    category: 'Walima',
  },
  {
    id: 'g10',
    src: 'https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxurious wedding stage with floral arch',
    category: 'Decorations',
  },
  {
    id: 'g11',
    src: 'https://images.pexels.com/photos/29486068/pexels-photo-29486068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Lavish buffet table with gourmet foods',
    category: 'Dining',
  },
  {
    id: 'g12',
    src: 'https://images.pexels.com/photos/33852450/pexels-photo-33852450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant wedding hall with chandeliers and classic decor',
    category: 'Hall Interior',
  },
];

export type EventItem = {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  image: string;
};

export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'The Grand Wedding Expo 2026',
    type: 'Exhibition',
    date: 'September 15, 2026',
    description:
      'Experience a showcase of the finest wedding decor, live catering counters, and exclusive booking discounts. Meet top decorators, photographers, and planners under one roof.',
    image:
      'https://images.pexels.com/photos/17023018/pexels-photo-17023018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'e2',
    title: 'Mehndi Night Festival',
    type: 'Cultural Night',
    date: 'October 10, 2026',
    description:
      'A vibrant evening celebrating the colors and traditions of mehndi — live dhol, henna artists, traditional dance, and a festive dinner under the fairy lights of our Garden Venue.',
    image:
      'https://images.pexels.com/photos/5776642/pexels-photo-5776642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'e3',
    title: 'Corporate Gala Awards Night',
    type: 'Corporate',
    date: 'November 22, 2026',
    description:
      'An elegant black-tie evening for corporate partners and teams — plated dinner, awards ceremony, and live entertainment in the Grand Ballroom.',
    image:
      'https://images.pexels.com/photos/13834493/pexels-photo-13834493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'e4',
    title: 'Walima Showcase Evening',
    type: 'Open House',
    date: 'December 5, 2026',
    description:
      'Couples and families are invited to tour our halls, sample our signature walima menu, and meet our event planning team. Comimentary high tea included.',
    image:
      'https://images.pexels.com/photos/33914525/pexels-photo-33914525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  rating: number;
  text: string;
  initial: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ayesha & Hamza Khan',
    event: 'Wedding — Grand Ballroom',
    rating: 5,
    text: 'Royal Crescent Banquet made our wedding day truly magical. The Grand Ballroom was breathtaking, the catering was exquisite, and the staff anticipated every need. Our guests are still talking about it weeks later.',
    initial: 'A',
  },
  {
    id: 't2',
    name: 'Fatima Riaz',
    event: 'Walima — Royal Hall',
    rating: 5,
    text: 'From the elegant decor to the flawless service, every detail was perfect. The Royal Hall felt intimate yet grand. The mutton qorma and biryani were the highlight for our family.',
    initial: 'F',
  },
  {
    id: 't3',
    name: 'Bilal Ahmed',
    event: 'Corporate Gala — Grand Ballroom',
    rating: 5,
    text: 'We hosted our annual corporate awards night here. The team handled 600 guests with absolute professionalism. The lighting, sound, and plated dinner were world-class.',
    initial: 'B',
  },
  {
    id: 't4',
    name: 'Sana & Usman Malik',
    event: 'Mehndi — Garden Venue',
    rating: 5,
    text: 'The Garden Venue was a dream for our mehndi. Fairy lights, floral arches, and open-air dancing — it was everything we imagined. The live dhol and BBQ counters were a huge hit.',
    initial: 'S',
  },
  {
    id: 't5',
    name: 'Zara Hussain',
    event: 'Birthday — Royal Hall',
    rating: 5,
    text: 'Booked the Royal Hall for my mother\'s 60th birthday. The decor team transformed the space beautifully and the dessert selection was divine. Truly a five-star experience.',
    initial: 'Z',
  },
  {
    id: 't6',
    name: 'Imran Sheikh',
    event: 'Engagement — Garden Venue',
    rating: 5,
    text: 'The open-air setting was perfect for our engagement. The team managed everything from seating to catering seamlessly. Great value and even better service.',
    initial: 'I',
  },
];

export const eventTypes = [
  'Wedding',
  'Walima',
  'Mehndi',
  'Engagement',
  'Birthday',
  'Corporate Event',
  'Other',
];

export const stats = [
  { label: 'Events Hosted', value: '2,500+' },
  { label: 'Happy Couples', value: '1,800+' },
  { label: 'Years of Excellence', value: '15' },
  { label: 'Guest Capacity', value: '1,600' },
];

export const features = [
  {
    title: 'Event Capacity',
    description: 'Three versatile halls hosting from 300 to 800 guests — from intimate gatherings to grand celebrations.',
    icon: 'Users',
  },
  {
    title: 'Luxury Decoration',
    description: 'Bespoke floral and stage decor crafted by our in-house design team to match your theme and vision.',
    icon: 'Sparkles',
  },
  {
    title: 'Premium Catering',
    description: 'Authentic Pakistani wedding cuisine prepared by master chefs, with live cooking stations on request.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Valet Parking',
    description: 'Complimentary valet service and spacious parking for up to 200 vehicles for your guests\' convenience.',
    icon: 'Car',
  },
  {
    title: 'Wedding Services',
    description: 'End-to-end planning — decor, lighting, sound, photography partners, and a dedicated event manager.',
    icon: 'Heart',
  },
  {
    title: 'Prime Location',
    description: 'Centrally located on Main Boulevard, Gulberg III, Lahore with easy access from across the city.',
    icon: 'MapPin',
  },
];

export const galleryCategories = [
  'All',
  'Wedding',
  'Mehndi',
  'Walima',
  'Decorations',
  'Dining',
  'Hall Interior',
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  'Hello Royal Crescent Banquet, I would like to inquire about booking an event.';
