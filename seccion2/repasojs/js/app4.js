//Template Strings

const nombre='Juan';
const trabajo='Desarrollado';

//concatenar javascript
console.log('Nombre: '+nombre+', Trabajo:'+trabajo);
console.log(`Nombre:${nombre}, Trabajo:${trabajo}`);
//concatenar con multiples lienas
const contenedorApp =document.querySelector('#app')
let html=`<ul>
            <li>Nombre:${nombre}</li>
            <li>Trabajo:${trabajo}</li>
          </ul>
`;

contenedorApp.innerHTML=html
