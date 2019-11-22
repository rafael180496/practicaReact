import React, { Component,Fragment } from 'react';
import Cita from './cita';

class ListaCita extends Component {

    state = {  }
    render() {
        return (
            <Fragment>
               <div className="card mt-2 py-5">
                    <div className="card-body">
                        <h2 className="card-title text-center" >
                            {
                                this.props.citas.length<=0 ? 'No hay citas': 'Administra las citas aqui'
                            }
                        </h2>
                        <div className="lista-citas">
                          {
                              this.props.citas.map(cita=>(
                                  <Cita key={cita.id} cita={cita} eliminarCita={this.props.eliminarCita}></Cita>
                              ))
                          }
                        </div>
                    </div>
               </div>

            </Fragment>
        );
    }
}
export default ListaCita;