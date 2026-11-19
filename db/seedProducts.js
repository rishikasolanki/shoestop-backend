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
  {
    title: 'Pink Track Pro',
    company: 'New Balance',
    price: '5499',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-pink.jpg',
  },
  {
    title: 'Cloudstep Retro',
    company: 'New Balance',
    price: '4299',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-pink.jpg',
  },
  {
    title: 'Midnight Runner',
    company: 'Adidas',
    price: '6499',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-dark.jpg',
  },
  {
    title: 'Metro Speed',
    company: 'Adidas',
    price: '3799',
    image: 'https://shoestop-frontend.onrender.com/products/shoe-dark.jpg',
  },
]

const ensureDemoProducts = async () => {
  let addedCount = 0
  for (const product of demoProducts) {
    const result = await Products.updateOne(
      { title: product.title, company: product.company },
      { $setOnInsert: product },
      { upsert: true },
    )
    addedCount += result.upsertedCount
  }

  if (addedCount > 0) console.log(`Seeded ${addedCount} demo products`)
}

module.exports = ensureDemoProducts
