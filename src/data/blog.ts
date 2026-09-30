export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'preserve-shine-silver-jewelry',
    title: 'How to Preserve the Shine of Your Silver Jewelry',
    category: 'Jewelry Care',
    date: 'Oct 6, 2024',
    excerpt: 'Simple daily rituals and thoughtful storage techniques to protect your silver pieces from oxidation and preserve their luminous finish for years.',
    image: 'https://framerusercontent.com/images/peOo5BuFYetGcZdKJq9SMIV82E.jpeg?width=683&height=1024',
  },
  {
    slug: 'gold-silver-steel-differences',
    title: 'Understanding the Differences Between Gold, Silver, and Steel',
    category: 'Craftsmanship',
    date: 'Aug 29, 2024',
    excerpt: 'Explore the metallurgical qualities, weight, longevity, and aesthetics of modern fine metals to choose what suits your style and daily rhythm.',
    image: 'https://framerusercontent.com/images/jIgDgysk3xpkmRFFHhP7yaarHQo.jpeg?width=736&height=920',
  },
  {
    slug: 'inside-aurum-workshop',
    title: 'How Handmade Jewelry Differs from Mass-Produced Pieces',
    category: 'Behind SHRI VIHOT IMITATION',
    date: 'Oct 13, 2024',
    excerpt: 'Mass-produced jewelry relies on precision machines. Handmade jewelry relies on the heart, touch, and intuition of the artisan.',
    image: 'https://framerusercontent.com/images/L3VYQJW7TJfGwOtG2EBjoKxQk.png?width=1024&height=1024',
  },
  {
    slug: 'aurum-handmade-philosophy',
    title: 'The Legacy of Craftsmanship in Modern Jewelry',
    category: 'Behind SHRI VIHOT IMITATION',
    date: 'Aug 17, 2024',
    excerpt: 'Tracing centuries-old European benchwork traditions and their delicate translation into modern sculptural silhouettes.',
    image: 'https://framerusercontent.com/images/a5wV4944T7k9m5yv6K22.jpg?width=1024&height=1024',
  },
  {
    slug: 'choose-necklace-length',
    title: 'How to Layer Necklaces Like a Pro',
    category: 'Style',
    date: 'Aug 17, 2024',
    excerpt: 'Mastering proportion, texture, and chain lengths from choker to collar to create effortless layered elegance.',
    image: 'https://framerusercontent.com/images/Fx6MJ3qsmjs1lm6f4HnDKpvx4g.webp?width=1024&height=1024',
  },
  {
    slug: 'gold-jewelry-care-guide',
    title: 'The Art of Keeping Your Jewelry Timeless',
    category: 'Jewelry Care',
    date: 'Oct 6, 2024',
    excerpt: 'Care instructions and maintenance advice from our master jewelers to ensure your precious investments endure across generations.',
    image: 'https://framerusercontent.com/images/Lde3EurMOIH92xihWEF94kw4.png?width=1024&height=1024',
  },
];
