const cows = 11

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} on the farm`)
  } else {
    reject('There is no cows on the farm')
  }
})

countCows
  .then(result => {
    console.log(result)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => console.log('Finally'))