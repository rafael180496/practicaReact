import React, { Component, Fragment } from "react";
import Nota from "./nota";


const pruebaNot={
  key:'not1',
  titulo:'A¿Qué es Lorem Ipsum?',
  indice:1,
  indFavorite:false,
  contenido:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
}

const pruebaN2t={
  key:'not2',
  titulo:'B¿Qué es Lorem Ipsum?',
  indice:1,
  indFavorite:false,
  contenido:' Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente'
}


class ListaNot extends Component {
  state = {
    notas:[]
  };

  render() {
    return (
      <Fragment>
       <Nota nota={pruebaNot} />
       <Nota nota={pruebaN2t} />

      </Fragment>
    );
  }
}
export default ListaNot;
