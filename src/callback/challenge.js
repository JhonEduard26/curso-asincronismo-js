const API = 'https://api.escuelajs.co/api/v1/products/20'

const getProducts = async () => {
  const response = await fetch(API)
  const data = await response.json()
  console.log(data)
}

getProducts()

