export const BUSINESS = {
  name: 'Ladies Bike Driving School',
  disclaimer:
    'This is a website redesign concept and is not the official site. It is not owned, approved, or operated by the business.',
  phone: '+91 78929 24679',
  phoneHref: 'tel:+917892924679',
  whatsappNumber: '917892924679',
  address: {
    line1: '33, 9th Main Road, 3rd Phase',
    line2: 'J. P. Nagar, Bengaluru',
    line3: 'Karnataka 560078, India',
  },
  mapsQuery: 'Ladies Bike Driving School, 33, 9th Main Road, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078',
  website: 'ladiesbikedrivingschool.com',
  rating: '5.0',
  reviewCount: '401',
};

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`;

export function buildEnquiryMessage(data: {
  name: string;
  phone: string;
  preference: string;
  experience: string;
  date: string;
  time: string;
  message: string;
}): string {
  const lines = [
    "Hello! I'd like to request a training session at Ladies Bike Driving School.",
    '',
    `Name: ${data.name}`,
    `Mobile: ${data.phone}`,
    `Training preference: ${data.preference}`,
    `Experience level: ${data.experience}`,
  ];
  if (data.date) lines.push(`Preferred date: ${data.date}`);
  if (data.time) lines.push(`Preferred time: ${data.time}`);
  if (data.message) {
    lines.push('');
    lines.push(`Message: ${data.message}`);
  }
  lines.push('');
  lines.push('Please confirm availability. Thank you!');
  return lines.join('\n');
}

export function whatsappUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Training', href: '#training' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1642418426543-b75ae382d298?fm=jpg&q=70&w=1600&auto=format&fit=crop',
  heroSmall:
    'https://images.unsplash.com/photo-1642418426543-b75ae382d298?fm=jpg&q=70&w=800&auto=format&fit=crop',
  scooter:
    'https://images.unsplash.com/photo-1688480012857-e69456efa3d2?fm=jpg&q=70&w=900&auto=format&fit=crop',
  motorcycle:
    'https://images.unsplash.com/photo-1648984076960-e29d8f514e2e?fm=jpg&q=70&w=900&auto=format&fit=crop',
  practice:
    'https://images.unsplash.com/photo-1651530382512-1c31402ebfad?fm=jpg&q=70&w=900&auto=format&fit=crop',
  about:
    'https://images.unsplash.com/photo-1683192001283-8a06e60c3226?fm=jpg&q=70&w=1200&auto=format&fit=crop',
};

export const TRAINING_PROGRAMS = [
  {
    id: 'scooter',
    title: 'Scooter Training',
    description:
      'For women who want to learn scooter riding from the basics. Build comfort and control step by step in a calm, supportive setting.',
    image: IMAGES.scooter,
    features: [
      'Start from absolute basics',
      'Balance and control fundamentals',
      'Road awareness essentials',
    ],
    pricing: 'Contact for pricing',
    duration: 'Details on enquiry',
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle Training',
    description:
      'For women interested in learning to ride a motorcycle. Understand gears, clutch control, and confident handling at your own pace.',
    image: IMAGES.motorcycle,
    features: [
      'Gear and clutch fundamentals',
      'Confident handling skills',
      'Structured progression',
    ],
    pricing: 'Contact for pricing',
    duration: 'Details on enquiry',
  },
  {
    id: 'practice',
    title: 'Confidence & Practice Sessions',
    description:
      'For learners who need more practice and confidence. Extra guided sessions to refine your riding and feel at ease on the road.',
    image: IMAGES.practice,
    features: [
      'Extra guided practice time',
      'Refine riding technique',
      'Build real-road confidence',
    ],
    pricing: 'Contact for pricing',
    duration: 'Details on enquiry',
  },
];

export const WHY_POINTS = [
  {
    title: 'Beginner-friendly learning',
    description:
      'No prior experience needed. Lessons start from the very beginning, at a pace that feels right for you.',
    icon: 'Sprout',
  },
  {
    title: 'Focus on riding confidence',
    description:
      'The goal is not just to ride, but to feel genuinely confident and comfortable every time you do.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Safety-oriented training',
    description:
      'Practical habits and awareness that help you stay safe and steady on the road.',
    icon: 'HardHat',
  },
  {
    title: 'Supportive learning experience',
    description:
      'A patient, encouraging environment where questions are always welcome.',
    icon: 'HeartHandshake',
  },
];

export const HOW_STEPS = [
  {
    number: '01',
    title: 'Choose your training preference',
    description: 'Decide whether scooter or motorcycle training suits you best.',
  },
  {
    number: '02',
    title: 'Send your training enquiry',
    description: 'Fill in the enquiry form — it opens WhatsApp with your details ready to send.',
  },
  {
    number: '03',
    title: 'Confirm your schedule',
    description: 'The school will confirm your slot and preferred timings with you directly.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '[Demo testimonial] A genuinely supportive environment. I went from never having touched a scooter to riding confidently on my own.',
    name: 'Demo Reviewer',
    label: 'Scooter training',
  },
  {
    quote:
      '[Demo testimonial] Patient, encouraging, and clear with every instruction. Exactly the kind of place a beginner hopes to find.',
    name: 'Demo Reviewer',
    label: 'Motorcycle training',
  },
  {
    quote:
      '[Demo testimonial] The practice sessions made all the difference. I finally feel relaxed and in control on the road.',
    name: 'Demo Reviewer',
    label: 'Confidence sessions',
  },
];
