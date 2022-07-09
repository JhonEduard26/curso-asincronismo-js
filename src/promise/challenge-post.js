const axios = require('axios')
const URL = 'https://api.escuelajs.co/api/v1'

const data = {
  title: 'Itaque ut est eaque eum.',
  price: 1000,
  description: 'Quia repellat qui quia perspiciatis similique fugit.',
  categoryId: 2,
  images: ['https://placekitten.com/600/300', 'https://placekitten.com/900/300', 'https://placekitten.com/500/300']
}

// axios.post(`${URL}/products`, data)
//   .then(response => console.log(response))
//   .catch(err => console.log(err))

// axios.put(`${URL}/products/207`, {
//   title: 'Un objeto increible, creado con 💚'
// }).then(response => console.log(response['data']))
//   .catch(err => console.log(err))

axios.delete(`${URL}/products/208`)
  .then(response => console.log(response['data']))
  .catch(err => console.log(err))