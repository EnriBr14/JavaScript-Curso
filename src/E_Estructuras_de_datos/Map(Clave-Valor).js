let inicio = new Map();

//Para agregar valores al Mapa usaremos el metodo .set()
inicio.set("Carlos S", 787);
inicio.set("Farael M", 123);
inicio.set("Emanuel S", 456);
inicio.set("Sergio D", 789);
inicio.set("Pedro A", 179);
inicio.set("Hector C", 159);

//Para acceder al los valores (clave, valor) usaremos el metodo value()
console.log(inicio.values());

//Para acceder a las claves usares keys()
console.log(inicio.keys());

//Para acceder a al elemento completo entires
console.log(inicio.entries());

//Acceder a un elemento especifico get(Elemento)
console.log(inicio.get("Carlos S"));
console.log(inicio.get(787));

//--------------------------------------------------------------------------------------
//Recorrer claves y valores
//Igualmente se puede iterar los valores
console.log("Iterar claves")
for(clavess of inicio.keys()){
    console.log(clavess)
}

//Iterar todos los valores
console.log("Iterar las claves y valores del mapa-----------------------------------");
for(let [key, value] of inicio.entries()){
    console.log(key, value)
}

//Verificar la existencia de un valor buscado
let usuario = "Carlos S";
for(user of inicio.keys()){
    if(usuario=== user){
        console.log("Usuario registrado");
        console.log(user)
    }else{
        console.log("Usuario no registrado");
    }

}