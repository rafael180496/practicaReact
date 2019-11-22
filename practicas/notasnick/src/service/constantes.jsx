import Home from "../page/home";
import MaNotas from "../page/notas/manotas";

export const NotaInit = {
  titulo: "Titulo",
  indFavorite:false,
  contenido: "Por favor ingrese un contenido"
};


export const PALETCOLOR={
  DARKPRICOL:'purple darken-2',
  LIGHTPRICOL:'purple lighten-4',
  PRICOL:'purple',
  TEXTICON:'white-text',
  ACCENTCOL:'pink accent-2',
  TEXTPRI:'black-text',
  TEXTSEC:'grey-text',
  TEXTACC:'pink-text',
  DIVI:'grey lighten-1'
}

export const APPNAME = "OwlProject";
export const APPNAMEFOOTER='Owl Project Company'
export const ROUTERS_APP = [
  {
    path: "/",
    pos: 1,
    descrip: "Home",
    component: Home
  },
  {
    path: "/notas",
    pos: 2,
    descrip: "Notas",
    component: MaNotas
  }
];
