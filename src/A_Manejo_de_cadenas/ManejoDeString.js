let palabra = "Programación con JavaScript"

console.log(`Cadena original \n${ palabra }`)
//Calcular la lingitud de una palabra
console.log("---------------------------------------------------------")
let tamano = palabra.length
console.log("Tamaño de la cadena")
console.log(tamano)
console.log("---------------------------------------------------------")

//Cambiar toda a minusculas
console.log("Cadena en minusculas")
let minusculas = palabra.toLowerCase()
console.log(minusculas)
console.log("---------------------------------------------------------")

//Camibar palabras a mayusculas
console.log("Cadena en mayusculas")
let mayusculas = palabra.toUpperCase()
console.log(mayusculas)

console.log("---------------------------------------------------------")
console.log("Extraer caracteres 0, 2, 6")
let c1 = palabra.charAt(0)
let c2 = palabra.charAt(2)
let c3 = palabra.charAt(6)
console.log(`El caracter 0 es: ${c1} el 2 es: ${c2} y el 6 es: ${c3}`)

console.log("---------------------------------------------------------")
//Extraer una subcadena
let subcadena = palabra.substring(1, 7)
let subcanena2 = palabra.slice(0, 6)
console.log(`SubCadena 1 usando substring: ${subcadena}`)
console.log(`SubCadena 2 usando slice: ${subcanena2}`)