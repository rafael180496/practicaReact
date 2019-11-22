import React, { Component,Fragment } from 'react';

class Header extends Component {

    state = {  }
    render() {
        return (
            <Fragment>
                <nav className="nav-wrapper light-blue darken-3">
                    <a className="brand-logo center" href="#!">{this.props.titulo}</a>
                </nav>
            </Fragment>
        );
    }
}
export default Header;