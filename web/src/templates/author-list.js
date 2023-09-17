import { graphql } from "gatsby";
import React from "react";
import AuthorGrid from "../components/author/AuthorGrid";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title='Authors' />
      <div className='container'>
        <PageHeader
          title='Все авторы BebyBlog'
          description='Тут будут все кто захочет что-то добавить в наш блог' 
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL='/authors'
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
