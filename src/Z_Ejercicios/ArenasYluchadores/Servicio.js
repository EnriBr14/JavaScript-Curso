const luchad = require("./Luchador")
const luchador = require("./Empresa");

let luchadores = []
let empresas = []


//Crear una funcion para guardar
function guardarDatos(datos){
  //Verficar si se quiere guardar una empresa o un luchador-----------------------------
    if(Object.keys(datos).length >= 3){
        //Verificar que el luchador que se quiere guardar no exista en el array
        //Verificar con el uso del metodo "some" si algun nombre se encuentra contenido en el array
        let comparando = luchadores.some(luchador => luchador.getNombreLuchador() == datos.getNombreLuchador())
        //Realizar el guardado si no se encuentra el nombre en el array
        if(!comparando){
            luchadores.push(datos)
        }else{
            console.log(`
            El luchador que quieres registrar ya esta existe
            Nombre: ${datos.getNombreLuchador()}
            Empresa: ${datos.empresaContrato}
            `)
        }
    }
    //Guardado de empresa--------------------------------
    else{
        //Verificar que la empresa que se quiere guardar no exista en el array
        let validacion = empresas.some(empresa => empresa.getNombreEmpresa() == datos.getNombreEmpresa())
        if(validacion){
            console.log("Empresa registrada")
        }else{
            empresas.push(datos)
        }


    }

}

//----------------------------Mostrar valores segun la empresa----------------------------------------------------
function luchadorPorEmpresa(empresaNombre){
    //Validar que la empresa exista en el registro
    let validacio = empresas.some(empresa => empresa.getNombreEmpresa() === empresaNombre);
    if(validacio) {
        for(let i = 0; i < luchadores.length; i++){

        }

    }

}


//Dar opcion de mostrar luchadores registrados o empresas
function motrarDatos(opcion){
    //Mostrar luchadores
    switch(opcion){
        case 1:
            console.log("Luchadores registrados")
            for(let i = 0; i < luchadores.length; i++){
                console.log(luchadores[i].getNombreLuchador());
            }
            break;

        case 2:
            console.log("Empresas registradas")
            for(let i = 0; i < empresas.length; i++){

              console.log(empresas[i].getNombreEmpresa());
            }
            break;


            }



    }






module.exports = {
    guardarDatos,
    motrarDatos,
    luchadorPorEmpresa
}
