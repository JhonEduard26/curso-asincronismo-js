const axios = require('axios')
const URL = 'https://api.escuelajs.co/api/v1'

async function getData(urlApi) {
  const { data } = await axios.get(urlApi)
  return data
}

async function anotherFunction(urlApi) {
  try {
    const products = await getData(`${urlApi}/products`)
    const product = await getData(`${urlApi}/products/${products[0].id}`)
    const category = await getData(`${urlApi}/categories/${product.category.id}`)
    console.log(category.name)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction(URL)