import React, { Component,Fragment } from 'react';

class Cita extends Component {

    enviar = () => {
        this.props.eliminarCita(this.props.cita.id)
    }

    state = {  }
    render() {
        return (
            <Fragment>
                <div className="media mt-3">
                    <div className="media-body">
                        <h3 className="mt-0">
                            {this.props.cita.mascota}
                        </h3>
                        <p className="card-text">
                            <span>
                                Nombre Dueño:
                            </span>
                            <span>
                                {this.props.cita.propietario}
                            </span>
                        </p>
                        <p className="card-text">
                            <span>
                                Fecha:
                            </span>
                            <span>
                                {this.props.cita.falta}
                            </span>
                        </p>
                        <p className="card-text">
                            <span>
                                Hora:
                            </span>
                            <span>
                                {this.props.cita.talta}
                            </span>
                        </p>
                        <p className="card-text">
                            <span>
                                Sintomas:
                            </span>
                            <span>
                                {this.props.cita.sintomas}
                            </span>
                        </p>
                        <button className="btn btn-danger" onClick={this.enviar}>Borrar &times;</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Cita;