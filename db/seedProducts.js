const Products = require('../modal/productSchema')

const demoProducts = [
  {
    title: 'Rose Runner',
    company: 'New Balance',
    price: '4999',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-pink.jpg',
  },
  {
    title: 'Street Flex',
    company: 'Adidas',
    price: '5999',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-dark.jpg',
  },
]

const seedProductsIfEmpty = async () => {
  const productCount = await Products.countDocuments()
  if (productCount > 0) return

  await Products.insertMany(demoProducts)
  console.log(`Seeded ${demoProducts.length} demo products`)
}

module.exports = seedProductsIfEmpty
