export type Product = {
  id: string;
  name: string;
  category: 'Sarees' | 'Lehengas' | 'Bridal' | 'Menswear';
  price: string;
  fabric: string;
  origin: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Kanjivaram Silk Saree',
    category: 'Sarees',
    price: '₹24,800',
    fabric: 'Pure Mulberry Silk',
    origin: 'Kanchipuram, Tamil Nadu',
    image: 'https://images.pexels.com/photos/4048041/pexels-photo-4048041.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'Bestseller',
  },
  {
    id: 'p2',
    name: 'Heritage Bridal Lehenga',
    category: 'Bridal',
    price: '₹1,28,000',
    fabric: 'Raw Silk & Zardozi',
    origin: 'Lucknow, Uttar Pradesh',
    image: 'https://images.pexels.com/photos/13204678/pexels-photo-13204678.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'Couture',
  },
  {
    id: 'p3',
    name: 'Teal Banarasi Drape',
    category: 'Sarees',
    price: '₹32,500',
    fabric: 'Tussar Silk',
    origin: 'Varanasi, Uttar Pradesh',
    image: 'https://images.pexels.com/photos/7176438/pexels-photo-7176438.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    id: 'p4',
    name: 'Floral Couture Saree',
    category: 'Sarees',
    price: '₹18,900',
    fabric: 'Georgette',
    origin: 'Jaipur, Rajasthan',
    image: 'https://images.pexels.com/photos/13192075/pexels-photo-13192075.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    id: 'p5',
    name: 'Rust Orange Drape',
    category: 'Sarees',
    price: '₹21,400',
    fabric: 'Mysore Silk',
    origin: 'Mysuru, Karnataka',
    image: 'https://images.pexels.com/photos/15906956/pexels-photo-15906956.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'New',
  },
  {
    id: 'p6',
    name: 'Emerald Runway Lehenga',
    category: 'Lehengas',
    price: '₹86,500',
    fabric: 'Velvet & Resham',
    origin: 'Jaipur, Rajasthan',
    image: 'https://images.pexels.com/photos/1655844/pexels-photo-1655844.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'Limited',
  },
  {
    id: 'p7',
    name: 'Crimson Bridal Saree',
    category: 'Bridal',
    price: '₹94,200',
    fabric: 'Kanjivaram Silk',
    origin: 'Kanchipuram, Tamil Nadu',
    image: 'https://images.pexels.com/photos/34058551/pexels-photo-34058551.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    id: 'p8',
    name: 'Garden Saree Drape',
    category: 'Sarees',
    price: '₹16,750',
    fabric: 'Chanderi Cotton',
    origin: 'Madhya Pradesh',
    image: 'https://images.pexels.com/photos/33359450/pexels-photo-33359450.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
];

export const categories = ['All', 'Sarees', 'Lehengas', 'Bridal'] as const;
export type Category = (typeof categories)[number];
