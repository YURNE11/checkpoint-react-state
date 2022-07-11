import logo from './logo.svg';
import './App.css';
import {React,  Component } from 'react';
import { Show } from './component/Show';


class App extends Component {

  state= {
    
    person:{
      fullName: "SAMMY",
      bio: "AIME TOUT TRAVAIL QUI RAPPORTE UN MAX DE BLE ET UNE PERSONNE QUI N'ABANDONNE PAS AU PREMIER OBSTACLE ",
      profession:"DEVELOPPEUR WEB ET TRADER",
    },

    show:false

  };

  Handleclick = () =>{
    let show = this.state.show
    this.setState({show:!show})
  }
  
  render() {
    return (
      <div className="App">

      {this.state.show ? <Show data={this.state}/> : ""}
      <button onClick={this.Handleclick} >Affiche</button> 

    </div>
    );
  }
}

export default App;




