import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    state = {  }
    render() {
        return (
            <header>
                <h1 className="text-center">{this.props.titulo}</h1>
            </header>
        );
    }
}
Header.protoTypes={
    titulo:PropTypes.string.isRequired
}
export default Header;

