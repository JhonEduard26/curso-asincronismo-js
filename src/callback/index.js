function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(5, 4, sum))

setTimeout(function () {
  console.log('Hello world!')
}, 2500)

function greeting(name, name2) {
  console.log(`Hola ${name}`)
}

setTimeout(greeting, 3000, 'jhon')