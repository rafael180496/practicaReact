//Objetos literales
const persona = {
    nombre: 'Rafa',
    profesion: 'Desarrollo',
    edad: 23,
    MostratInfo: function() {
        console.log(`${this.nombre} ${this.profesion} ${this.edad}`)
    }
}

const persona2 = {
    nombre: 'Kevin',
    profesion: 'Desarrollo',
    edad: 23
}

console.log(persona);
console.log(persona2);

//constructor
function Tarea(nombre = "", urgencia = "") {
    this.nombre = nombre;
    this.urgencia = urgencia
}

//prototipo

Tarea.prototype.mostrarInformacion = function(prioridad) {
    return `La tarea ${this.urgencia} tiene una prioridad de ${prioridad}`
}


//objetos
const tarea = new Tarea("rafa", "Correr")
console.log(tarea);
console.log(tarea.mostrarInformacion("5"))