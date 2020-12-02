const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allGraphCmsDrama {
        nodes {
          name
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.name}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        name: product.name,
      },
    })
  })
}
