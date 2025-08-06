import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'Todos', image: '', count: 48 },
  { id: 'camisetas', name: 'Camisetas', image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400', count: 15 },
  { id: 'moletons', name: 'Moletons', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400', count: 12 },
  { id: 'calcas', name: 'Calças', image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=400', count: 10 },
  { id: 'acessorios', name: 'Acessórios', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', count: 11 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Oversized Street',
    price: 89.90,
    originalPrice: 129.90,
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8175421/pexels-photo-8175421.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco', 'Verde'],
    description: 'Camiseta oversized com estampa exclusiva inspirada na cultura urbana de Porto Alegre.',
    rating: 4.8,
    reviews: 24,
    isNew: true,
    isOnSale: true,
    tags: ['oversized', 'streetwear', 'algodão'],
  },
  {
    id: '2',
    name: 'Moletom Hoodie Urban',
    price: 189.90,
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8175319/pexels-photo-8175319.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'moletons',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Cinza', 'Verde Neon'],
    description: 'Moletom hoodie premium com forro interno macio e estampa frontal exclusiva.',
    rating: 4.9,
    reviews: 18,
    isNew: true,
    tags: ['hoodie', 'premium', 'inverno'],
  },
  {
    id: '3',
    name: 'Calça Cargo Street',
    price: 159.90,
    images: [
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'calcas',
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['Preto', 'Verde Militar', 'Bege'],
    description: 'Calça cargo com múltiplos bolsos e fit moderno para o dia a dia urbano.',
    rating: 4.7,
    reviews: 32,
    tags: ['cargo', 'utilitária', 'conforto'],
  },
  {
    id: '4',
    name: 'Boné Snapback Premium',
    price: 79.90,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2072132/pexels-photo-2072132.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'acessorios',
    sizes: ['Único'],
    colors: ['Preto', 'Verde', 'Laranja'],
    description: 'Boné snapback com bordado exclusivo Piazza Store e aba reta clássica.',
    rating: 4.6,
    reviews: 15,
    tags: ['snapback', 'bordado', 'exclusivo'],
  },
  {
    id: '5',
    name: 'Camiseta Vintage Print',
    price: 69.90,
    originalPrice: 99.90,
    images: [
      'https://images.pexels.com/photos/8175421/pexels-photo-8175421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Branco', 'Preto', 'Cinza'],
    description: 'Camiseta com estampa vintage e lavagem especial para efeito usado.',
    rating: 4.5,
    reviews: 28,
    isOnSale: true,
    tags: ['vintage', 'retro', 'lavagem'],
  },
  {
    id: '6',
    name: 'Moletom Crewneck Basic',
    price: 149.90,
    images: [
      'https://images.pexels.com/photos/8175319/pexels-photo-8175319.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'moletons',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Verde', 'Branco'],
    description: 'Moletom crewneck básico com logo bordado discreto, perfeito para o dia a dia.',
    rating: 4.8,
    reviews: 21,
    tags: ['crewneck', 'básico', 'bordado'],
  }
];

export const featuredProducts = products.filter(p => p.isNew || p.isOnSale).slice(0, 4);
export const newProducts = products.filter(p => p.isNew).slice(0, 6);
export const saleProducts = products.filter(p => p.isOnSale);