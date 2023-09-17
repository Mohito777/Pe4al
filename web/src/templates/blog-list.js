import { graphql } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import SEO from "../components/SEO";
import PageSpace from "../components/PageSpace";
import BlogGrid from "../components/blog/BlogGrid";
import Pagination from "../components/Pagination";
import CommentForm from '../constants/comment-form';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title='Блог' description='Блог о детках и не только' />
      <PageSpace top={80} bottom={100}>
        <div className='container'>
          <PageHeader
            title='Все статьи сайта'
            description='О детях и не только'
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL='/blogs'
            />
          )}
          <CommentForm />
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;
