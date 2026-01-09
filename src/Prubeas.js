

let nom = [{nombre: "enrique", apellido : "AAA"},{nombre: "enrique", apellido : "AAA"}]
let valor = "pe"

nom.some(val => val === valor)

console.log(nom.some(val => val === valor))

for(per of nom){
    console.log(per.nombre)
}