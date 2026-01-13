

let nom = [{nombre: "enrique", apellido : "AAA"},{nombre: "enriquee", apellido : "AAA"}]
let valor = "enriquee"

nom.some(val => val.nombre === valor)

console.log(nom.some(val => val.nombre === valor))

let inde = nom.findIndex(val => val.nombre === valor)

for(per of nom){
    console.log(per.nombre)
}

let pa = "jrjfhd"

console.log(pa.length)

console.log(inde)