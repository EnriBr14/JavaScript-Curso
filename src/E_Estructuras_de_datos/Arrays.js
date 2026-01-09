let luchadores = []

let l1 = {id: 1, nombre: "La parka", empresa: "AAA"}
let l2 = {id: 2, nombre: "Dr Wagner", empresa: "AAA"}
let l3 = {id: 3, nombre: "Randy Orton", empresa: "WWE"}
let l4 = {id: 4, nombre: "Penta", empresa: "WWE"}
let l5 = {id: 5, nombre: "Misitico", empresa: "CMLL"}
let l6 = {id: 6, nombre: "El Templario", empresa: "CMLL"}

//Agregar elementos al array con el metodo push()
luchadores.push(l1,l2,l3,l4,l5,l6)


console.log("Array original-----------------------")
for(luchador of luchadores){

    console.log(luchador.id + " " + luchador.nombre)
}
//Elimina el ultimo elemento del array
console.log("     ")
console.log("Eliminar el ultimo elemento con pop()----------------------------")
luchadores.pop()

for(luchador of luchadores){
    console.log(luchador.id + " " + luchador.nombre)
}
console.log("     ")
//Eliminar el primer elemento del array
console.log("Eliminar el primer elemento con shift()----------------------------")
luchadores.shift()

for(luchador of luchadores){
    console.log(luchador.id + " " + luchador.nombre)
}
console.log("     ")
//Acceder un un elemento especifico por medio de su id
console.log("Luchador con el id: 2 es - ", luchadores[2] ,  "-------------------------------")
console.log("     ")
//Filtrar por empresa
const campany = "AAA"
console.log("Filtrar por empresa -- AAA------------------------------------------------------------------")
let empresa = luchadores.filter(luch => luch.empresa === campany)
console.log(empresa)
console.log("     ")
//Eliminar una posicion especifica en el array restante
console.log("Eliminar con splice---------------------------------------------------------------------------")
let eliminar = luchadores.splice(3 ,1)

console.log("     ")
console.log("Eliminar a mistico con posicion 3", eliminar)
for(luchador of luchadores){
    console.log(luchador.id + " " + luchador.nombre)
}
console.log("------------------------------------------------------------------------------------------")
for(luchador of luchadores){
    if(luchador.id === 3){
    console.log(luchador)}
}
console.log("     ")
console.log("Metodo include-----------------------------------------------------------------------------")
//Solo funciona con arrays puros no con objetos dentro de arrays
console.log(luchadores.includes(3))

//Retorna un booleano
console.log("     ")
console.log("Metodo some-------------------------------------------------------------------------------")
let somee = luchadores.some(lucha => lucha.nombre === "Randy Orton")
console.log(somee )

//Retorna el valor asociado al valor buscado
console.log("     ")
console.log("Metodo find-------------------------------------------------------------------------------")
let finds = luchadores.find(lucha => lucha.nombre === "Randy Orton")
console.log(finds)

//Longitud del objeto
console.log("     ")
console.log("Tamaño del objeto 2 ")
console.log(Object.values(luchadores[2]).length)