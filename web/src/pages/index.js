import React from 'react';

import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO title="" description="Это произвольный блог, для мам" />
    <HeroSection />
    <div className="container" />
    <FeaturedBlogs />
  </>
);
export default IndexPage;
