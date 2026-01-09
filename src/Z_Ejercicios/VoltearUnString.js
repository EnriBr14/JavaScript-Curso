let palabra = "Compañia"
let aray = []
//Voltear
for(let i = palabra.length; i >= 0; i--) {

    aray.push(palabra.charAt(i))
}
console.log(aray)