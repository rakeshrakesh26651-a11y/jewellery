import Hero from '@/components/Hero';
import PressTicker from '@/components/PressTicker';
import Bestsellers from '@/components/Bestsellers';
import BrandIntro from '@/components/BrandIntro';
import FeaturedCollections from '@/components/FeaturedCollections';
import Testimonial from '@/components/Testimonial';
import ProductHighlightOne from '@/components/ProductHighlightOne';
import ProductHighlightTwo from '@/components/ProductHighlightTwo';
import BrandOutro from '@/components/BrandOutro';
import ExploreShop from '@/components/ExploreShop';
import InstagramGrid from '@/components/InstagramGrid';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <PressTicker />
      <Bestsellers />
      <BrandIntro />
      <FeaturedCollections />
      <Testimonial />
      <ProductHighlightOne />
      <ProductHighlightTwo />
      <BrandOutro />
      <ExploreShop />
      <InstagramGrid />
      <Newsletter />
    </>
  );
}
