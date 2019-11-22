//funciones
function saludar(nombre){
  console.log(`Bienvenido:${nombre}`)
}

saludar("juan");
saludar("rafa");

//function expresion
const cliente =function(nombreCliente){
  console.log(`Mostrando datos del cliente:${nombreCliente}`)
}

cliente("rafa");
//parametro
function actividad(nombre="prueba",actividad="prueba"){
  console.log(`La persona ${nombre}, esta relizando la actividad ${actividad}`)
}

actividad("Juan","Aprender JavaScript")
