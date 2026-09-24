import bottomRice from "../assets/bottom-rice.webp";
import coconut from "../assets/coconut.webp";
import jaggery from "../assets/jaggery.webp";
import middleRice from "../assets/middle-rice.webp";
import midOil from "../assets/mid-oil.webp";
import vegies from "../assets/vegies.webp";

export const productCategories = [
  {
    id: "rice",
    slug: "indian-rice",
    number: "01",
    label: "Rice",
    eyebrow: "South Indian staples",
    description:
      "Staples rooted in South Indian food culture, sourced for consistent trade and daily use.",
    image: middleRice,
    alt: "South Indian rice varieties supplied by Skanda Traders",
    products: [
      "Boiled Rice",
      "Steamed Rice",
      "Idly Rice",
      "Raw Rice",
      "South Indian Black Rice",
    ],
  },

  {
    id: "oils",
    slug: "edible-oils",
    number: "02",
    label: "Edible Oils",
    eyebrow: "Practical supply",
    description:
      "Clean edible oil supply for food businesses, wholesale requirements and practical trade needs.",
    image: midOil,
    alt: "Edible oils supplied by Skanda Traders in Puducherry, India",
    products: ["Sunflower Oil", "Palm Oil"],
  },

  {
    id: "agri",
    slug: "agricultural-products",
    number: "03",
    label: "Agricultural Products",
    eyebrow: "Seasonal harvest",
    description:
      "Farm-sourced produce selected with attention to freshness, handling and business requirements.",
    image: vegies,
    alt: "Fresh agricultural vegetables supplied by Skanda Traders",
    products: ["Coconuts", "Onion", "Tomato", "Other Seasonal Vegetables"],
  },

  {
    id: "traditional",
    slug: "traditional-products",
    number: "04",
    label: "Traditional Products",
    eyebrow: "Indian character",
    description:
      "Traditional Indian products with a clear sense of place, prepared for reliable supply.",
    image: jaggery,
    alt: "Traditional Indian jaggery supplied by Skanda Traders",
    products: ["Jaggery"],
  },
];

export const storyProducts = [
  {
    id: "rice",
    slug: "indian-rice",
    title: "Rice",
    image: bottomRice,
    alt: "Indian rice supplied by Skanda Traders",
    copy: "Everyday grains for food service, wholesale and trade requirements.",
  },

  {
    id: "coconut",
    slug: "coconut",
    title: "Coconut",
    image: coconut,
    alt: "Fresh Indian coconuts supplied by Skanda Traders",
    copy: "A familiar Indian agricultural product with versatile business demand.",
  },

  {
    id: "vegetables",
    slug: "seasonal-vegetables",
    title: "Vegetables",
    image: vegies,
    alt: "Fresh seasonal vegetables supplied by Skanda Traders",
    copy: "Seasonal produce selected around freshness and practical coordination.",
  },

  {
    id: "jaggery",
    slug: "jaggery",
    title: "Jaggery",
    image: jaggery,
    alt: "Traditional Indian jaggery supplied by Skanda Traders",
    copy: "A traditional Indian sweetener supplied with a focus on dependable sourcing.",
  },

  {
    id: "edible-oils",
    slug: "edible-oils",
    title: "Edible Oils",
    image: midOil,
    alt: "Indian edible oils supplied by Skanda Traders",
    copy: "Practical oil supply for food businesses, wholesale requirements and trade needs.",
  },
];
