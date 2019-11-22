import { style, title, columnaTH } from './consthtml'

//Promises ajax
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //pasar la cantidad  ala apu
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`
        //lamado a ajax
    const xhr = new XMLHttpRequest();
    //abrir conexion
    xhr.open('GET', api, true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results)
        } else {
            reject(Error(xhr.statusText))
        }
    }
    xhr.send()
})

var imprimirTR = (usuario) => {
    console.log(usuario)
    return `
    <tr>
        <td>${usuario.name.first} ${usuario.name.last}</td>
        <td>${usuario.nat}</td>
        <td>
            <img src='${usuario.picture.medium}'>
        </td>
    </tr>`
}


var masterTableHTLM = usuarios => {
    return new Promise((resolve, reject) => {
        if (usuarios.length <= 0) {
            reject(Error('Sin usuario'))
        }
        let html = ''
        html = `
                    ${style}
                    ${title}
                    <table style="width:100%">
                        ${columnaTH}
                        ${
                            usuarios.map(item=>{
                                return imprimirTR(item)
                            }).join("")
                         }
                    </table>
                    `
        resolve(html)
    })
}

var DescargarUser = async() => {
    try {
        let data = await descargarUsuarios(5)
        let html = await masterTableHTLM(data)
        const contenedorApp = document.querySelector('#app')
        contenedorApp.innerHTML = html
    } catch (err) {
        console.error(new Error('hubo un error:' + err))
    }
}

DescargarUser();

//clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una urgencia de ${this.prioridad}.`)
    }
}



let tarea1 = new Tarea('Aprende javascrip', 'Alta')
tarea1.mostrar()

//herencia clases
class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad)
        this.cantidad = cantidad
    }
}