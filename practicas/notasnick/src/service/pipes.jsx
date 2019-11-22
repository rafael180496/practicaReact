import { NotaInit } from "./constantes";

const TITULOMAX = 13;
const CONTENIDOSALTO = 35;
const CONTENIDOMAX = 374;

export const TransformarTitulo = (str = "") => {
  return str.length > TITULOMAX ? `${str.substring(0, TITULOMAX)}...` : str;
};

export const TransformarContenido = (str = "") => {
  let auxstr = "";
  let strfin = [];
  let cont = 0;
  str =
    str.length > CONTENIDOMAX ? `${str.substring(0, CONTENIDOMAX)}...` : str;

  Array.from(str).forEach(item => {
    cont++;
    if (cont % CONTENIDOSALTO === 0 || cont === str.length) {
      auxstr += item;
      strfin = [...strfin, auxstr];
      auxstr = "";
    } else {
      auxstr += item;
    }
  });
  return strfin.join("\n");
};

export const AgregarActivate = (routers = []) => {
  return routers.map(item=>{
    item.activate = false;
    item.key = "rut" + item.pos;
    return item
  });
};

export const ValidarNotas = nota => {
  if (!nota) {
    nota = NotaInit;
  } else {
    if (nota.titulo.trim() === "") {
      nota.titulo = NotaInit.titulo;
    }
    if (nota.contenido.trim() === "") {
      nota.contenido = NotaInit.contenido;
    }
  }
  return nota;
};

export const CambiarActivate = (routers = [], key = "") => {
  return routers.map(item => {
    if (item.activate) {
      item.activate = false;
    }
    if (item.key === key) {
      item.activate = true;
    }
    return item;
  });
};

export const OrdenarPosicion = (routers = []) => {
  return  routers.sort((a, b) => {
    if (a.pos < b.pos) {
      return -1;
    }
    if (a.pos > b.pos) {
      return 1;
    }
    return 0;
  });
};
