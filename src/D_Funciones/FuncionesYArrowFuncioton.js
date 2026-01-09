//Son bloques de codigo reutilizalizable
function sumar(a , b){
    return a + b;
}

function restar(a , b){
    return a - b;
}

function multiplicar(a , b){
    return a * b;
}

console.log(`Resultado de 2 y 4 sumados: `,sumar(2,4))
console.log(`Resultado de 2 y 4 restados: `,restar(2,4))
console.log(`Resultado de 2 y 4 multiplicados: `,multiplicar(2,4))

//Funcion callback
//Realizar un funcion a la que se la pase una funcion como argumento
console.log("Usando un callback")
function operacion(x , y, operacio){
    return  operacio(x , y)
}
console.log(`Resultado de 2 y 4 sumados: `,operacion(2,4, sumar))
console.log(`Resultado de 2 y 4 restados: `,operacion(2,4,restar))
console.log(`Resultado de 2 y 4 multiplicados: `,operacion(2,4,multiplicar))

console.log("Usando arrow function-------------------------------------------------")
let sumaA = (a, b) => a + b;
let restarA = (a, b) => a - b;
let multiplicarA = (a, b) => a * b;

console.log("Suma con arrow: ",sumaA(4,5))
console.log("Resta con arrow: ",restarA(4,5))
console.log("Multiplicar con arrow: ",multiplicarA(4,5))

//-------------------------
let calificaciones = [60,50,70,80,70,90,70,50,100,100,90,80,70,40,50,60,80,70,90.6,98.8,90.3,90.9]
//Filtrar calificaciones aprobatorias
console.log("Aprobados----------------------------------------------------------------")
let aprobados = calificaciones.filter(aprobado => aprobado >= 60)
console.log(aprobados)
//Filtrar por reprobados
console.log("Reprobados----------------------------------------------------------------")
let reporbados = calificaciones.filter(aprobado => aprobado <= 60)
console.log(reporbados)

//A los reprobados se les apoyara sumando 10 a todos
console.log("Apoyados--------------------------------------------------------------------------")
let apoyar = reporbados.map(reprob => reprob + 10)
console.log(apoyar)

//Crear un array sin repetidos
let sinRepetidos = new Set(apoyar)
console.log(sinRepetidos)

//Ordenar de mayor a menor
console.log("Ordenados")
apoyar.sort()
console.log(apoyar)