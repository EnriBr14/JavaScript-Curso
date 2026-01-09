//Funcion normal------------------------------------------------------------------------------
function mostrarDatos(nombre, edad, nacionalidad){
   console.log( ` 
   Datos de la persona
   Nombre: ${nombre} 
   Edad: ${edad} 
   Nacionalidad: ${nacionalidad}`
   )
}

//Arrow function ---------------------------------------------------------------------------
const datosArrow = (name, age, nationality) => {
    console.log(`
    Datos de la persona con una arrow 
    Nombre: ${name}
    Edad: ${age}
    Nacionalidad: ${nationality}
    `)
}
//Datos del servidor con setTimeOut----------------------------------------------------------
function dataServidor(nombr, edad, nacionalidad){
    setTimeout(function(){
        console.log(`
        Datos del servidor
        nombre: ${nombr}
        Edad: ${edad}
        Nacionalidad: ${nacionalidad}
        `)
    },1500)
}

//Llamado de las funciones------------------------------------------------------------------
mostrarDatos("Cibernetico", 53, "Mexicana")
datosArrow("Caristico", 42, "Mexicana")


mostrarDatos("Mistico", 43, "Mexicana")
datosArrow("J'Von Evans", 21, "Estadounidence")

//Crear objetos literales
const mistico = {
    nombre: "Mistico",
    edad: 43,
    empresa: "CMLL",
    saludo: function (){
        console.log(`Hola mi nombre es ${this.nombre} y no 
        doy fotos por derechos de autor`)
    }
}

const elGarnde = {
    nombree: "El Garnde Americado",
    edad: 35,
    empresa: "WWE",
    saludos: () => {
        console.log(`Hola mi nombre es ${this.nombree} que pasa`)
    }
}

//Llamado de los metodos de los objetos literales-----------------------------------------
console.log(mistico.saludo())
console.log(elGarnde.saludos())

//Agregar un segundo saludo al objeto de mistico------------------------------------------
mistico.saludo2 = function () {
    console.log(`Hola mi nombre es ${this.nombre} que pasa goey`)
}

console.log(mistico.saludo2())

//Solicitar datos--------------------------------------------------------------------------
dataServidor("Latin Lover", 40, "Mexicana")