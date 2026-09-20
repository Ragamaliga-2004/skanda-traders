import bottomRice from '../assets/bottom-rice.webp';
import coconut from '../assets/coconut.webp';
import jaggery from '../assets/jaggery.webp';
import middleRice from '../assets/middle-rice.webp';
import midOil from '../assets/mid-oil.webp';
import vegies from '../assets/vegies.webp';

export const productCategories = [
  {
    id: 'rice',
    number: '01',
    label: 'Rice',
    eyebrow: 'South Indian staples',
    description: 'Staples rooted in South Indian food culture, sourced for consistent trade and daily use.',
    image: middleRice,
    products: ['Boiled Rice', 'Steamed Rice', 'Idly Rice', 'Raw Rice', 'South Indian Black Rice'],
  },
  {
    id: 'oils',
    number: '02',
    label: 'Edible Oils',
    eyebrow: 'Practical supply',
    description: 'Clean edible oil supply for food businesses, wholesale requirements and practical trade needs.',
    image: midOil,
    products: ['Sunflower Oil', 'Palm Oil'],
  },
  {
    id: 'agri',
    number: '03',
    label: 'Agricultural Products',
    eyebrow: 'Seasonal harvest',
    description: 'Farm-sourced produce selected with attention to freshness, handling and business requirements.',
    image: vegies,
    products: ['Coconuts', 'Onion', 'Tomato', 'Other Seasonal Vegetables'],
  },
  {
    id: 'traditional',
    number: '04',
    label: 'Traditional Products',
    eyebrow: 'Indian character',
    description: 'Traditional Indian products with a clear sense of place, prepared for reliable supply.',
    image: jaggery,
    products: ['Jaggery'],
  },
];

export const storyProducts = [
  {
    title: 'Rice',
    image: bottomRice,
    copy: 'Everyday grains for food service, wholesale and trade requirements.',
  },
  {
    title: 'Coconut',
    image: coconut,
    copy: 'A familiar Indian agricultural product with versatile business demand.',
  },
  {
    title: 'Vegetables',
    image: vegies,
    copy: 'Seasonal produce selected around freshness and practical coordination.',
  },
  {
    title: 'Jaggery',
    image: jaggery,
    copy: 'A traditional Indian sweetener supplied with a focus on dependable sourcing.',
  },
  {
    title: 'Edible Oils',
    image: midOil,
    copy: 'Practical oil supply for food businesses, wholesale requirements and trade needs.',
  },
];
