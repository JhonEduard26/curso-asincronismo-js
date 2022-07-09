const axios = require('axios')
const URL = 'https://api.escuelajs.co/api/v1'

function* iteraGetDate(urlApi) {
  const products = yield axios.get(`${urlApi}`)
  const product = yield axios.get(`${urlApi}/products/${products}`)
}

const g = iteraGetDate(`${URL}/products`)
console.log(g.next().value.then(({ data }) => console.log(data)))
console.log(g.next().value)