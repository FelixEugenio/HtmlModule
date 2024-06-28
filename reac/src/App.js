import { Component } from "react";
import './App.css'
import { PostCard } from "./components/PostCard";
import { loadPosts} from  './utils/load-posts'
 class App extends Component {

  state = {
   posts:[]
  }

  componentDidMount(){

    this.loadPosts();
  }

  loadPosts = async() =>{

   const postsAndPhotos = await loadPosts()

   this.setState({posts:postsAndPhotos})
  }
     
  render(){

    const {posts} = this.state;

    return (
      <section className="container">
          <div className="posts">
        {posts.map(post =>(
          <PostCard
           key={post.id}
           tittle={post.tittle}
           body={post.body}
           id={post.id}
           cover={post.cover}
           />
        ))}
      </div>
      </section>

      
    );
  }
  
}
 

export default App;
