import { Component } from "react";

 class App extends Component {

  state = {
   posts:[]
  }

  componentDidMount(){

    this.loadPosts();
  }

  loadPosts = async() =>{
   const postsResponse =  fetch('https://jsonplaceholder.typicode.com/posts')
   
   const [posts] = Promise.all([postsResponse]);

   const postJson = await posts.json();

   this.setState({posts:postJson})
  }
     
  render(){

    const {posts} = this.state;

    return (

      <div className="App">
        {posts.map(post =>(
          <div key={post.id}>
            <h1>{post.tittle}</h1>
            <p>{post.body}</p>
          </div>
        )

        )}
        
      </div>
    );
  }
  
}
 

export default App;
