import React from 'react';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import TopCategories from '../components/homepage/TopCategories';

const IndexPage = () => (
  <>
    <SEO title="Главная" description="Это произвольный блог, для мам" />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);
export default IndexPage;
