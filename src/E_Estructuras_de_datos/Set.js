let numeros = [1,4,2,9,7,8,5,8,5,1,2,3,6,5,4,1,3,1,8,1,5,4,1,5,8,7,2,4]
console.log("Array original---------------")
console.log(numeros)

//Quitar todos los duplicados
console.log("Quitar todos los duplicados---------------------------")
let sinDuplicados  = new Set(numeros)
console.log(sinDuplicados)

//Para agregar valores a un set usamos el metodo add(valor)
sinDuplicados.add(10)
console.log("Agregamos el valor 10 al set")
console.log(sinDuplicados)

//Ordenar de mayor a menor
//Recordar que el metodo sort() solo existe para arrays
