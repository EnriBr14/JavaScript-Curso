//Realizar un contador con el ciclo For
//Vamos a inicializar el contador a partir de cero
let contar = 0

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

//Iterar valores en un objeto o array
let frutas = ["Plantanos", "Manzanas", "Fresas","uvas"]
let verduras = {"Jitomate" : 21, "Aguacate": 11, "Tomate": 12}

//Ciclo for - of
console.log("Usando For - iof")
for(fruta of frutas) {
    console.log(fruta)
}
//Los objetos literales no son interables con for - of
/*
for(verdura of verduras) {
    console.log(verdura)
}
*/
console.log("Usando la propiedad Object.keys-------------------------------")
for (let cantidad of Object.keys(verduras)) {
    console.log(cantidad)
}

//Ciclo for - in
console.log("Usando For - in")
for( verdura in verduras ) {
    console.log(verdura)
}
//En este caso solo imprime los indices o posiciones
for (let frut in frutas) {
    console.log(frut)
}
console.log("Para acceder a valores unicos del objeto")
console.log(verduras.Jitomate)
console.log(verduras["Jitomate"])
