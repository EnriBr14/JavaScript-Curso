//Clase padre Empleado
class Empleado{
    constructor(nombre, planta, email){
        this.nombre = nombre;
        this.planta = planta;
        this.email = email;
    }
    mostrarDatos(){
        console.log(`
        Nombre: ${this.nombre}
        Planta: ${this.planta}
        Email: ${this.email}
        `)
    }
}

//Clase Obrero que hereda de empleado
class Obrero extends Empleado{
    constructor(nombre, planta, email, maquinas) {
        super(nombre, planta, email);
        this.maquinas = maquinas;
    }

    //Concepto de polimorfismo, heredamos el metodo y loa dapatamos
    mostrarDatos(){
        console.log(`
        Nombre: ${this.nombre}
        Planta: ${this.planta}
        Email: ${this.email}
        maquinas: ${this.maquinas}
            `)
    }
}

const o1 = new Obrero("Setgio", "ES", "serg@gmail.com", ["Esmeril", "Taladro"]);
console.log(o1.mostrarDatos())



