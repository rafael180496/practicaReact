import React,{Fragment} from "react";
import PrimerComponent from './components/PrimerComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {

  const empleado ={
    nombe:'Juan Pablo',
    trabajo:'Desarrollador Web'
  }

  return (
    <Fragment>
       <h1>{empleado.nombe}</h1>
       <p>{empleado.trabajo}</p>
       <PrimerComponent></PrimerComponent>
       <HeaderComponent titulo='Hola mundo'></HeaderComponent>
    </Fragment>
  );
}

export default App;
