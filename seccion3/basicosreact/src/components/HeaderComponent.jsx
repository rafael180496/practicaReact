
import React,{Component,Fragment} from 'react';
class HeaderComponent extends Component {

    render() {
        return (
            <Fragment>
                <header>
                    <h1>{this.props.titulo}</h1>
                </header>
            </Fragment>
        );
    }
}

export default HeaderComponent;