export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Rings' | 'Necklaces' | 'Earrings';
  price: number;
  currency: string;
  description: string;
  image: string;
  secondaryImage: string;
  gallery: string[];
  sizes: string[];
  inStock: boolean;
  isBestseller: boolean;
}

export const PRODUCTS: Product[] = [
  {
    "id": "9944061444438",
    "slug": "bianca-ring",
    "name": "Bianca Ring",
    "category": "Rings",
    "price": 4800,
    "currency": "INR",
    "description": "Bianca, artisanal ring made of recycled 925 sterling silver, gold-plated, with a natural moonstone. As a guide through millions of years, it has illuminated the path of entire civilizations. Even when the moon hides, its light remains with you in this moonstone. Properties: enhances intuition, balances emotions, and promotes inner harmony. Physical characteristics: Feldspar mineral with a hardness between 6 and 6.5, known for its ethereal glow and iridescent reflections.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_25.png?v=1763118539",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_ring_with_full_white_background__bg41j9h16c4dmv7tsd6k_2_c381b498-afc8-4f21-89c4-0d5396000416.png?v=1763118539",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_25.png?v=1763118539",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_ring_with_full_white_background__bg41j9h16c4dmv7tsd6k_2_c381b498-afc8-4f21-89c4-0d5396000416.png?v=1763118539",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_ring_with_full_white_background__wtv6bw5www9qcsd3y6c6_3_354eab7e-9819-4f8f-a02b-b5ea5f415c19.png?v=1763118539",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/kqdx922gbaizfviax39h_2.png?v=1763118539"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": true
  },
  {
    "id": "9944077369686",
    "slug": "ada-ring",
    "name": "Ada Ring",
    "category": "Rings",
    "price": 5800,
    "currency": "INR",
    "description": "Ada, handcrafted ring in 18k recycled gold with a natural red quartz.Like captured light, it reflects clarity and strength, illuminating with every movement. Properties: enhances focus, amplifies energy, and promotes mental clarity.Physical characteristics: Quartz mineral with a hardness between 7 and 7.5, known for its transparency and radiant brilliance.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame14_5.png?v=1765971622",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/anillo_fondo_de_la_imagen_blanco__xd3x2gepljuovvuci5gz_0.png?v=1765971622",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame14_5.png?v=1765971622",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/anillo_fondo_de_la_imagen_blanco__xd3x2gepljuovvuci5gz_0.png?v=1765971622",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/anillo_fondo_de_la_imagen_blanco__u4t12y5sp9zzi63a8oli_3.png?v=1765971622",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/tx5afwwtt0u1az5hjmdb_3.png?v=1765971622"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": true
  },
  {
    "id": "9944085102934",
    "slug": "julia-necklace",
    "name": "Julia Necklace",
    "category": "Necklaces",
    "price": 12500,
    "currency": "INR",
    "description": "Julia, handcrafted necklace in 18k recycled gold with a deep green crystal.Symbol of balance and renewal, it evokes the calm strength of nature and the harmony of growth. Properties: promotes emotional balance, encourages healing, and restores inner peace.Physical characteristics: Crystal with a hardness between 6 and 7, recognized for its deep green tone and vivid luminosity.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame8_4.png?v=1763115141",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/9cadyx8mk00hgk8seuab_1.png?v=1763115141",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame8_4.png?v=1763115141",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/9cadyx8mk00hgk8seuab_1.png?v=1763115141",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/ooplkjbye0l5xuc53yg3_1.png?v=1763115141",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/938id5eymesxwa67ama5_0.png?v=1763115141"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": true
  },
  {
    "id": "9944582226262",
    "slug": "mica-earrings",
    "name": "Mica Earrings",
    "category": "Earrings",
    "price": 4800,
    "currency": "INR",
    "description": "Mica, handcrafted silver earrings. Part of the Canary collection, this pair captures a bright, playful elegance\u2014smooth, warm, and inspired by the natural sweetness that defines the line. Properties: brings vitality, enhances charm, and adds a subtle touch of joyful energy to any look.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_29.png?v=1763602175",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/p0irwf0czu8zg7ug3oj9_3.png?v=1763602258",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_29.png?v=1763602175",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/p0irwf0czu8zg7ug3oj9_3.png?v=1763602258",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/2npyt8rptjjugevor5p2_2.png?v=1763602529"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9945064178006",
    "slug": "aurora-ring",
    "name": "Aurora Ring",
    "category": "Rings",
    "price": 6800,
    "currency": "INR",
    "description": "Aurora, a handcrafted ring made from recycled 925 sterling silver, adorned with a natural emerald. It carries the deep, timeless green of the earth\u2014an echo of life renewing itself. Emerald has long been associated with rebirth and the quiet harmony that threads through our days. Properties: nurtures love, cultivates patience, and helps bring mind and body into balance.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/hswei38mlfjddibj6sx6_1_1_1.png?v=1763574939",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/silver_ring_with_white_background__iyjhu8h6r5j8m4bneg8c_3.png?v=1763574939",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/hswei38mlfjddibj6sx6_1_1_1.png?v=1763574939",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/silver_ring_with_white_background__iyjhu8h6r5j8m4bneg8c_3.png?v=1763574939",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/silver_ring_with_white_background__r9s8txtjwl9ugle91myi_0.png?v=1763574939",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/silver_ring_with_white_background__igqj8ja0nldqlw0ikjxe_1.png?v=1763574939"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9945103335766",
    "slug": "ring-copy",
    "name": "Elara Ring",
    "category": "Rings",
    "price": 5800,
    "currency": "INR",
    "description": "Elara, a handcrafted ring made from recycled 925 sterling silver, plated in gold and set with a natural ruby. A gem that burns with the power of earth and fire. Throughout history\u2014from kings to warriors\u2014ruby has stood as a symbol of courage, passion, and undeniable strength. A flame that refuses to fade. Properties: boosts vital energy, strengthens confidence, and enhances natural leadership.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_24_1.png?v=1763118486",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/10wl0ykjdklesvgrziox_1.png?v=1763118486",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_24_1.png?v=1763118486",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/10wl0ykjdklesvgrziox_1.png?v=1763118486",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/wvzn5f8qys8re4kp8fqg_3.png?v=1763118486",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/kqdx922gbaizfviax39h_2.png?v=1763118539"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9945168937302",
    "slug": "ring-copy-1",
    "name": "Selene Ring",
    "category": "Rings",
    "price": 4500,
    "currency": "INR",
    "description": "Selene, a handcrafted signet ring made from recycled 925 sterling silver, finished with a layer of gold. Part of the La Ribera collection, this piece captures the quiet glow of moonlit shores. Its smooth, minimal design reflects the calm of the coastline at night\u2014subtle, timeless, and effortlessly elegant. Properties: evokes serenity, enhances intuition, and brings a gentle sense of balance to everyday life.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_23_1.png?v=1763118375",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/golden_rings_4sainde3xntij01vx5uy_2.png?v=1763118375",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_23_1.png?v=1763118375",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/golden_rings_4sainde3xntij01vx5uy_2.png?v=1763118375",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/golden_ring_with_white_background_baijb2p9l95alt39aowe_1.png?v=1763118375",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/golden_ring_with_white_background_3wivkl38j9mdv7nyt661_2.png?v=1763118375"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9945244762454",
    "slug": "ring-copy-2",
    "name": "Marina Ring",
    "category": "Rings",
    "price": 4200,
    "currency": "INR",
    "description": "Marina, a handcrafted ring made from recycled 925 sterling silver, dipped in gold and set with a CZ topaz. Part of the La Ribera collection, this piece reflects the clarity and movement of the ocean\u2014fresh, luminous, and full of quiet energy. The topaz catches the light like a soft ripple on open water. Properties: inspires calm, encourages emotional clarity, and brings a touch of brightness to everyday moments.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_21.png?v=1763118172",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/anillo_fondo_de_la_imagen_blanco__zb77l6mpgbi5vp15watw_2.png?v=1763118172",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_21.png?v=1763118172",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/anillo_fondo_de_la_imagen_blanco__zb77l6mpgbi5vp15watw_2.png?v=1763118172",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/x0zv0iabva8qh1i9nvb7_1.png?v=1763118172",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/white_background_r7howfs4lldsqcw3l94b_1.png?v=1763118172"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9945262457174",
    "slug": "ring-copy-3",
    "name": "Elina Ring",
    "category": "Rings",
    "price": 3900,
    "currency": "INR",
    "description": "Elina, a handcrafted ring made from recycled 925 sterling silver, set with a green CZ emerald. Part of the Yelmo collection, this piece captures the quiet depth of coastal greenery. The emerald-toned stone glows with a vibrant, soothing green\u2014like sunlight filtering through leaves on a calm seaside path. Properties: promotes harmony, supports emotional balance, and brings a gentle sense of calm to everyday life.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_22.png?v=1763118270",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/z5wh68vlgebpggfxry5s_2.png?v=1763118270",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_22.png?v=1763118270",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/z5wh68vlgebpggfxry5s_2.png?v=1763118270",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/qftxg55vpkikzk027l0w_1.png?v=1763118270",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/o4yw6azi0uj1brq9qn02_0.png?v=1763118270"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9947033567574",
    "slug": "mica-earrings-copy",
    "name": "Clara Earrings",
    "category": "Earrings",
    "price": 5600,
    "currency": "INR",
    "description": "Clara, handcrafted gold-plated earrings. Part of the Lino collection, this pair captures a bright, playful elegance\u2014smooth, warm, and inspired by the natural sweetness that defines the line. Properties: brings vitality, enhances charm, and adds a subtle touch of joyful energy to any look.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_20.png?v=1763117965",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/little_earring__gqmqkf9h6j6b9kw8vd64_3.png?v=1763117982",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_20.png?v=1763117965",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/little_earring__gqmqkf9h6j6b9kw8vd64_3.png?v=1763117982",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/little_earring_jj34iehhp7oe8hyapjxh_3.png?v=1763117982"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9947033731414",
    "slug": "naia-earrings",
    "name": "Naia Earrings",
    "category": "Earrings",
    "price": 4800,
    "currency": "INR",
    "description": "Naia, a handcrafted ear cuff made from recycled 925 sterling silver and set with a natural blue topaz. This piece is sold individually. Part of the Yelmo collection, it reflects the fresh clarity of coastal waters. The blue topaz shines with a cool, ocean-bright glow\u2014subtle, fluid, and effortlessly luminous. Properties: encourages calm, enhances clarity of thought, and brings a refreshing touch of serenity to everyday moments.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_19.png?v=1763117573",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/pzx7rxf5uhf4ed94dh0t_30.png?v=1763117573",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_19.png?v=1763117573",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/pzx7rxf5uhf4ed94dh0t_30.png?v=1763117573",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/tdn43tgn0bimcvw97m2n_2.png?v=1763117596"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9947036647766",
    "slug": "astra-earrings",
    "name": "Astra Earrings",
    "category": "Earrings",
    "price": 4200,
    "currency": "INR",
    "description": "Astra, a handcrafted earring made from recycled 925 sterling silver. This piece is sold individually. Part of the Lino collection, it carries a soft, luminous elegance\u2014subtle, refined, and shaped with the quiet fluidity that defines the line. Properties: evokes calm, enhances intuition, and lends a touch of understated brightness to everyday wear.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_18.png?v=1763117500",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/mghivqbmw6jnjtk76aiz_2.png?v=1763117500",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_18.png?v=1763117500",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/mghivqbmw6jnjtk76aiz_2.png?v=1763117500",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/ktxfs5p4w3gevjeyh9tf_3.png?v=1763117500",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/qd9ehtubw2snm7lxpy4x_1.png?v=1763117500"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9947038613846",
    "slug": "isla-earrings",
    "name": "Isla Earrings",
    "category": "Earrings",
    "price": 3800,
    "currency": "INR",
    "description": "Isla, handcrafted textured earrings plated in gold. Part of the Yelmo collection, this pair embodies the movement of the shoreline\u2014organic, fluid, and shaped by the quiet rhythm of the sea. Properties: inspires flow, enhances presence, and brings a subtle sense of natural elegance to everyday wear.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame15_8.png?v=1763116124",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/sp8wsoomgw49lfp6qa7z_2.png?v=1763116124",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame15_8.png?v=1763116124",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/sp8wsoomgw49lfp6qa7z_2.png?v=1763116124",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/qnue8k283srakzn5vj9d_2.png?v=1763116124",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/u1cuif5q9tg0lur431lg_11.png?v=1763116124"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9947041988950",
    "slug": "aveline-earrings",
    "name": "Aveline Earrings",
    "category": "Earrings",
    "price": 2499,
    "currency": "INR",
    "description": "Aveline, a handcrafted long earring gold-plated and set with natural orange agate. This piece is sold individually. Part of the Brisa collection, it reflects the warm glow of coastal sunsets. The orange agate shines with a gentle, vibrant light\u2014fluid, warm, and subtly radiant. Properties: boosts vitality, supports creative flow, and adds an uplifting touch to everyday style.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_17.png?v=1763117434",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/small_earing_a78n1ze3eeht9ect8347_0.png?v=1763117434",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_17.png?v=1763117434",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/small_earing_a78n1ze3eeht9ect8347_0.png?v=1763117434",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/f13v0gilqlpk8e321iqe_0.png?v=1763117434",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/small_earing_ce5jnsossv2qvg1zusfi_0.png?v=1763117434"
    ],
    "sizes": [
      "Standard"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9948737896790",
    "slug": "amara-necklace",
    "name": "Amara Necklace",
    "category": "Necklaces",
    "price": 4800,
    "currency": "INR",
    "description": "Amara, a handcrafted gold-plated pendant set with natural dark blue topaz, green peridot, orange citrine, and rose quartz. Part of the Yelmo collection, this piece blends the colors of the shoreline\u2014deep waters, coastal greenery, warm sunsets, and soft morning light. A vibrant, harmonious composition shaped with quiet elegance. Properties: encourages balance, nurtures emotional clarity, and brings a touch of luminous color to everyday style.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame12_5.png?v=1763115562",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/ddi73c606hto8sr3um14_1.png?v=1763115562",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame12_5.png?v=1763115562",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/ddi73c606hto8sr3um14_1.png?v=1763115562",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/lbzulj3xjhwa0aaz4ipi_0.png?v=1763115562",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/zwbphmn3ynnaum2mz0hl_1.png?v=1763115562"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9948744581462",
    "slug": "rhea-necklace",
    "name": "Rhea Necklace",
    "category": "Necklaces",
    "price": 3800,
    "currency": "INR",
    "description": "Rhea, a handcrafted gold-plated pendant set with natural red onyx. Part of the Yelmo collection, this piece carries the warmth and intensity of a coastal sunset\u2014bold, grounded, and subtly radiant. The red onyx adds depth and energy, giving the necklace a striking yet refined presence. Properties: boosts confidence, strengthens determination, and brings a steady, empowering warmth to everyday wear.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_27.png?v=1763601425",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/6qy3pa5qb73co4me5ieg_5_1.png?v=1763601425",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_27.png?v=1763601425",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/6qy3pa5qb73co4me5ieg_5_1.png?v=1763601425"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": true
  },
  {
    "id": "9948746056022",
    "slug": "rhea-necklace-copy",
    "name": "Noelia Necklace",
    "category": "Necklaces",
    "price": 4200,
    "currency": "INR",
    "description": "Noelia, a handcrafted gold-plated pendant set with natural black topaz. A burst of pure light. Black topaz is known for symbolizing clarity of thought and the pursuit of truth\u2014bright, clean, and quietly powerful. Properties: enhances focus, stimulates creativity, and helps clear uncertainty to make room for fresh ideas.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_28_1.png?v=1763601760",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/5eka1a559t5fh2zfz88x_3.png?v=1763601810",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame_28_1.png?v=1763601760",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/5eka1a559t5fh2zfz88x_3.png?v=1763601810",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/e0i9thoavyna6rfjs6i9_3.png?v=1763601860"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9948747137366",
    "slug": "helena-necklace",
    "name": "Helena Necklace",
    "category": "Necklaces",
    "price": 6200,
    "currency": "INR",
    "description": "Helena, a handcrafted gold-plated pendant set with a natural ruby. A gem that burns with the power of earth and fire. Throughout history\u2014from ancient rulers to fierce warriors\u2014ruby has stood for courage, passion, and unshakable strength. An eternal flame that never fades. Properties: boosts vital energy, strengthens confidence, and enhances natural leadership.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame9_3.png?v=1763115318",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/p1r78a03su6vn88i6se9_1.png?v=1763115318",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame9_3.png?v=1763115318",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/p1r78a03su6vn88i6se9_1.png?v=1763115318",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/9xmzvpml1tlbepjwoqd1_0.png?v=1763115318",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/3vf4rfyc6az81ac9bo6w_1.png?v=1763115318"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": false
  },
  {
    "id": "9948747923798",
    "slug": "lyra-necklace",
    "name": "Lyra Necklace",
    "category": "Necklaces",
    "price": 4200,
    "currency": "INR",
    "description": "Lyra, a handcrafted gold-plated pendant set with natural moonstone. Like an ancient guide, moonstone has illuminated the path of entire civilizations for millennia. Even when the moon hides, its quiet glow remains with you through this luminous stone. Properties: enhances intuition, balances emotions, and supports inner harmony.",
    "image": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame10_1.png?v=1763115429",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_necklace_with_full_white_background__l8thjem416jlegz1zh5p_3.png?v=1763115429",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/Frame10_1.png?v=1763115429",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_necklace_with_full_white_background__l8thjem416jlegz1zh5p_3.png?v=1763115429",
      "https://cdn.shopify.com/s/files/1/0965/3610/1206/files/gold_necklace_with_full_white_background__vvjlz4ks892vkhdpmwyg_2.png?v=1763115429"
    ],
    "sizes": [
      "44cm",
      "55cm"
    ],
    "inStock": true,
    "isBestseller": true
  }
];

export const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Rings'] as const;
