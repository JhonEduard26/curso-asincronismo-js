const axios = require('axios')
const URL = 'https://api.escuelajs.co/api/v1'

axios.get(`${URL}/products`)
  .then(products => {
    return products['data']
  })
  .then(products => {
    return products[0]
  })
  .then(product => {
    console.log(product.title)
    return product.category
  })
  .then(category => {
    console.log(category.name)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finally')
  })