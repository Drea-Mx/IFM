const path = require('path');

async function turnPaginasIntoPages({graphql, actions}) {
    // 1. Get a template for this page
    const pageTemplate = path.resolve('./src/templates/Page.js')
    // 2. Query all artists
    const {data} = await graphql(`
        query {
            pages:     allSanityPaginas {
                nodes {
                    title
                    slug {
                        current
                    }
                }
            }
        }
    `);
    // 3. Loop over each artist and create a page for each artist
    data.pages.nodes.forEach((page) => {
        actions.createPage({
            // url forths new page
            path: `/${page.slug.current}`,
            component: pageTemplate,
            context: {
                language: 'es',
                slug: page.slug.current,
            }
        })
    });
  }
  

exports.createPages = async (params) => {
    // Create Pages dynamically
        await Promise.all([
            // 1. Posts
            turnPaginasIntoPages(params),
    
        ])
    }