import React, { Component } from 'react';
import uuid from 'uuid';
import MensajeError from './menerr';

const stateIni={
    cita:{
        mascota:'',
        propietario:'',
        falta:'',
        talta:'',
        sintomas:''
    },
    err:false
}

class NuevaCita extends Component {



    state = {...stateIni  };


    handleSubmit=(e)=>{
            e.preventDefault()
            let NuevaCita={...this.state.cita}
            if(NuevaCita.mascota==='' || NuevaCita.propietario==='' || NuevaCita.falta==='' || NuevaCita.talta==='' || NuevaCita.sintomas===''){
                this.setState({
                    err:true
                })
                return;
            }else{
                this.setState({
                    err:false
                })
                NuevaCita.id=uuid()
                this.props.crearNuevaCita(NuevaCita)
                this.resetForm()
            }
    }

    handleChange=(e)=>{
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]:e.target.value
            }
        });
    }

    resetForm=()=>{
        this.setState({...stateIni})
    }

    render() {

        const err=this.state.err

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                     Llena el formulario para crear una nueva cita
                    </h2>
                    {err? <MensajeError/>:null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Mascota" name="mascota"
                                 value={this.state.cita.mascota} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Dueño" name="propietario"
                                value={this.state.cita.propietario} onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha Alta</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="date" className="form-control" name="falta"
                                value={this.state.cita.falta} onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora Alta</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="time" className="form-control" name="talta"
                                value={this.state.cita.talta} onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" placeholder="Sintomas" name="sintomas"
                                value={this.state.cita.sintomas} onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;