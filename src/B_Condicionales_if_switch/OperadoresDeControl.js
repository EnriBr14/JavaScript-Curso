//Operadores de comparación
let numero1 = 10
let numero2 = 20
let numero3 = "10"
console.log("----------------------------------------")
//Comparación con doble igual (==)
let compa1 = numero1 == numero3
let compa2 = numero1 === numero3
console.log(`Al usar el == comparamos el valor pero no el tipo de dato: por lo que da un - ${compa1} - al comparar un entero con un string`)

console.log(`Al usar el === comparamos el valor pero no el tipo de dato: por lo que da un - ${compa2} - al comparar un entero con un string`)
console.log("----------------------------------------")
console.log("Uso de and && y or ||")
console.log("10 == '10' y 20 == '10'")
console.log(numero1 == numero3 && numero2 == numero3)
console.log("---------")
console.log("10 == '10' o 20 == '10'")
console.log(numero1 == numero3 || numero2 == numero3)
console.log("----------------------------------------")
console.log("Uso de ! negación")
console.log("Negar si 10 y 10 si son true")
let negar = numero1 == numero3
console.log(`Negado: ${numero1 == numero3} -> ${!negar}`)

