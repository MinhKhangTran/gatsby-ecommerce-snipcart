const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allGraphCmsDrama {
        nodes {
          remoteId
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.remoteId}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        remoteId: product.remoteId,
      },
    })
  })
}
