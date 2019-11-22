import React, { Component } from 'react';
import consultarNoticias from './service/notice';
import Header from './components/header';

class App extends Component {

    state = {
      noticias:[]
     }

    async componentDidMount(){
      let noticias = await consultarNoticias()
      this.setState({
        noticias:noticias
      })
    }


    render() {
        return (
          <div className="App">
               <Header titulo="Noticias React API"></Header>
               <div className="container white contenedor-noticias">

              </div>
          </div>

        );
    }
}
export default App;



