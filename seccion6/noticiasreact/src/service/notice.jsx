
const apikey='eb9993d9a4f04a0e865f9d70b1123aae'
var url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}`

var consultarNoticias=async()=>{
    const respuesta=await fetch(url)
    const noticias=await respuesta.json()
    return await noticias.articles
}

export default consultarNoticias;