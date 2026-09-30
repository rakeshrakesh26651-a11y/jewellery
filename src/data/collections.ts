export interface Collection {
  slug: string;
  name: string;
  title: string;
  count: string;
  image: string;
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'earrings',
    name: 'Earrings',
    title: 'Earrings',
    count: '6 Items',
    image: 'https://framerusercontent.com/images/t08OgsonJJJQYAhZACFTE3nhbQ.png?width=1024&height=1024',
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    title: 'Necklaces',
    count: '6 Items',
    image: 'https://framerusercontent.com/images/IujkvaEuCXwJguDexCPGjaLAqs.png?width=1248&height=832',
  },
  {
    slug: 'rings',
    name: 'Rings',
    title: 'Rings',
    count: '7 Items',
    image: 'https://framerusercontent.com/images/UubAHq8vezTRsC5N8XcYmuymG6s.png?width=1024&height=1024',
  },
];
