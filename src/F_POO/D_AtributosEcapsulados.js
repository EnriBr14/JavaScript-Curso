class Usuarios{
    #nombre
    #email
    #contrasena
    constructor(nombre, email, contrasena){
        this.#nombre = nombre
        this.#email = email
        this.#contrasena = contrasena

    }

    getNombre(){return this.#nombre}
    setNombre(nombre){this.#nombre = nombre}

    getEmail(){return this.#email}
    setEmail(email){this.#email = email}

    getContrasena() {return this.#contrasena;}
    set contrasena(value) {this._contrasena = value;}
}

const p1 = new Usuarios("Carlos", "carl@gmail.com", "d4e5s");
console.log("Datos solicitados")
console.log(p1.getNombre()  + " "+  p1.getEmail());
console.log(`Datos solicitados Nombre: ${p1.getNombre()} Email: ${p1.getEmail()}`);