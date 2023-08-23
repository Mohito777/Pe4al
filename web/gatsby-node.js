exports.createPages = async ({ graphql, actions }) => {
  // Путь шаблона
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');

  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;

  // Одностраничный блог
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });
};
