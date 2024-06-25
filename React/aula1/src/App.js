
/*
function App() {
  return (
    <h1>ola mundo</h1>
  );
}
  */

import { Component } from "react";

class App extends Component{

  constructor(props){
    super();
    this.handlePclick = this.handlePclick.bind(this);
    this.state = {
      name:'felix mavila'
    }

  }

  handlePclick(){
    //const {name} = this.state;
    //console.log(`h1 clicado ${name}`)
    this.setState({name:'Eugenio'})
  }

  render(){
    const name = this.state.name;
    return <h1 onClick={()=>this.handlePclick()}>{name}</h1>
  }
}

export default App;
