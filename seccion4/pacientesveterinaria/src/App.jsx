import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/header';
import NuevaCita from './components/NuevaCita';
import ListaCita from './components/listaCita';

class App extends Component {
  state={
    citas:[]
  }
  //cuando se carga
  componentDidMount(){
    const citasls=localStorage.getItem('citas')
    if(citasls){
      this.setState({
        citas:JSON.parse(citasls)
      })
    }
  }
  //cuando tenga una modificacion
  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas))
  }

  crearNuevaCita=(data)=>{
    //citas +data
    let citas=[...this.state.citas,data]
    this.setState({
      citas
    })
  }
  eliminarCita=(id)=>{
    let citas=[...this.state.citas]
    citas=citas.filter(cita=>{
      return  cita.id!==id
    })
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className='container'>
          <Header titulo='Administrador  Pacientes Veterinaria'></Header>
          <div className="row">
            <div className="col-md-10 mx-auto">
            <NuevaCita
             crearNuevaCita={this.crearNuevaCita}
            ></NuevaCita>
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <ListaCita
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
              ></ListaCita>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
