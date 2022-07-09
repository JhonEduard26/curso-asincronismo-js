const fnFunction = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!!'), 360)
      : reject(new Error('error'))
  })
}

const anotherFun = async () => {
  const something = await fnFunction()
  console.log(something)
  console.log('Hello')
}

console.log('before')
anotherFun()
console.log('after')