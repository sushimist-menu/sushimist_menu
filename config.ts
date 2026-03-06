export const SITE_CONFIG = {
  name: 'SUSHI MIST',
  description: '“Más que sushi, una experiencia...”',
  whatsappNumber: '56483359', // Format: Country code + number without + or 00
  currency: '$',
  deliveryArea: 'Envíos a domicilio en toda la ciudad.',
  openingHours: {
    start: 12, // 12 PM
    end: 22,   // 10 PM
    display: 'Lunes - Domingo: 12:00 PM - 10:00 PM',
  },
  // SEO & Open Graph
  siteUrl: 'https://sushimist.com', // IMPORTANT: Change this to your live site URL
  defaultMetaDescription: 'Más que sushi, una experiencia. Los mejores rolls y platos orientales.',
  defaultOgImage: '/og-image.png', // Path to a default social sharing image
};

export const MENU = [
  // SUSHI
  {
    id: 'kumo-roll',
    name: 'Kumo Roll (Rollo nube)',
    description: 'Relleno de queso, mayonesa y cebolla (opción caramelizada).',
    price: 1600,
    category: 'Sushi',
    img: 'kumo-roll.png',
  },
  {
    id: 'midori-roll',
    name: 'Midori Roll (Rollo Verde)',
    description: 'Con aguacate, ají, cebollino y pepino en vinagreta. (Fresco y saludable.)',
    price: 1750,
    category: 'Sushi',
    img: 'midori-roll.png',
  },
  {
    id: 'mist-blue',
    name: 'Mist Blue',
    description: '(Atún rojo de cola azul) a la plancha con cebolla, pimienta y ajo.',
    price: 1900,
    category: 'Sushi',
    img: 'mist-blue.png',
  },
  {
    id: 'samurai-roll',
    name: 'Samurái Roll',
    description: '(Atún rojo de cola azul) Salteado en fajitas con salsa de soja y especias especiales japonesas.',
    price: 2100,
    category: 'Sushi',
    img: 'samurai-roll.png',
  },
  {
    id: 'perla-roja',
    name: 'Perla Roja',
    description: '(Atún rojo de cola azul) semicrudo aliñado en vinagre especial.',
    price: 1850,
    category: 'Sushi',
    img: 'perla-roja.png',
  },
  {
    id: 'sakura-beef-roll',
    name: 'Sakura Beef Roll',
    description: '(SUSHI de Carne) Carne jugosa con aguacate fresco, envuelto en alga nori y arroz japonés.',
    price: 1900,
    category: 'Sushi',
    img: 'sakura-beef-roll.png',
  },
  
  // OTROS PLATOS
  {
    id: 'bushi-green-noodles',
    name: 'Bushi Green Noodles',
    description: '(Fideos verdes de té MATCHA) con pasta de jamón y queso, coronados con cebolla y ají caramelizado.',
    price: 1700,
    category: 'Otros Platos',
    img: 'bushi-noodles.png',
  },
  {
    id: 'temaki-camarones',
    name: 'TEMAKI de Camarones',
    description: 'Conos de alga rellenos de camarones frescos, directo a tu mesa. Delicia Japonesa.',
    price: 1950,
    category: 'Otros Platos',
    img: 'temaki-camarones.png',
  },
  {
    id: 'onigiri-japones',
    name: 'ONIGIRI japonés',
    description: 'Deliciosos triángulos de arroz rellenos de ropa vieja, listos para llevarte a Japón en cada mordida. Incluye 5 unidades.',
    price: 1900,
    category: 'Otros Platos',
    img: 'onigiri-japones.png',
  },
  {
    id: 'ebi-camarones',
    name: 'Ebi de Camarones',
    description: 'Camarones al ajillo, delicadamente adobados para lograr un sabor irresistible y textura perfecta.',
    price: 1950,
    category: 'Otros Platos',
    img: 'ebi-camarones.png',
  },

  // BEBIDAS
  {
    id: 'refrescos',
    name: 'Refrescos',
    description: 'Refrescos de diferente sabor.',
    price: 0,
    category: 'Bebidas',
    img: 'refrescos.png',
  },
  {
    id: 'cerveza-fria',
    name: 'Cerveza fría',
    description: 'Cerveza bien fría para acompañar tu sushi.',
    price: 0,
    category: 'Bebidas',
    img: 'cerveza.png',
  },

  // SALSAS
  {
    id: 'salsas-variadas',
    name: 'Salsas Japonesas',
    description: 'Wasabi, Sriracha, Soya tradicional, Spaicy Sweet Soy, Ostras, Agridulce, Teriyaki.',
    price: 0,
    category: 'Salsas',
    img: 'salsas.png',
  },
];
