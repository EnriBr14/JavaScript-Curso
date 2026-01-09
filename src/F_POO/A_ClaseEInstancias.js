class Persona{
    constructor(nombre,edad,trabajo){
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }

    //Metodo para mostrar informacion
    motrarInfo(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

//Crear una instancia 1
const persona = new Persona("Enrique", 23, "Arquitecto");

//Agregar el metodo despedir a la clase padre
Persona.prototype.despedir = function(){
    console.log(`Adios, se despide ${this.nombre}`);
}
console.log(" ");
console.log("Instacia 1");
persona.motrarInfo();
persona.despedir();
//-------------------------------------------------------------------------------
console.log(" ");
console.log("Instacia 2");
const p2 = new Persona("Sergio", 24, "Chalan");
p2.motrarInfo();
p2.despedir();

