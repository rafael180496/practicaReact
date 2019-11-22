import React, { Component,Fragment } from 'react';

class MensajeError extends Component {

    state = {  }
    render() {
        return (
            <Fragment>
                <div className="alert alert-danger mt-2 mb-5 text-center">
                    Todos  los campos son obligatorios.
                </div>
            </Fragment>
        );
    }
}
export default MensajeError;