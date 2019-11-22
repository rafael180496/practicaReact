//scope

var musica ='Rock'

if(musica){
  var musica='Grunge'
  console.log('var dentro del if:',musica)
}
console.log('var Fuera del if :',musica)

//scope con let
let musica2 ='Rock'

if(musica2){
  let musica2='Grunge'
  console.log('let dentro del if:',musica2)
}
console.log('let Fuera del if :',musica2)


//scope con const
const musica3 ='Rock'

if(musica3){
  const musica3='Grunge'
  console.log('const dentro del if:',musica3)
}
console.log('const Fuera del if :',musica3)
