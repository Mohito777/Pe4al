import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;

  return (
    <TopCategoriesStyles>
      <SectionTitle>Избранные статьи</SectionTitle>
      <ParagraphText className="info">
        Ну тут конечно же мамы вступились за своё дитятко))
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
