
/*
function App() {
  return (
    <h1>ola mundo</h1>
  );
}
  */

import { Component } from "react";

class App extends Component{

 // constructor(props){
   // super();
   // this.handlePclick = this.handlePclick.bind(this);
    state = {
      posts:[
        {
          id:1,
          title:'o titulo',
          body:'o corpo'
        },
        {
          id:2,
          title:'o titulo2',
          body:'o corpo2'
        },
        {
          id:3,
          title:'o titulo2',
          body:'o corpo2'
        }
      ]

    }

    /*
  handlePclick = ()=>{
    //const {name} = this.state;
    //console.log(`h1 clicado ${name}`)
    this.setState({name:'Eugenio'})
    const {counter} = this.state;
    const nextCounter = counter + 1;
  }
    */

  render(){
    
    const {posts} = this.state;
    //const name = this.state.name;
    return (
      <div>{posts.map(post => <h1 key={post.id}>{post.title}</h1>)}</div>
    )
  }
}

export default App;
