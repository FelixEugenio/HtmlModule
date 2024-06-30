import { Component } from "react";
import './styles.css'

import { loadPosts} from  '../../../utils/load-posts'
import { Posts } from '../../Posts/index';
import { Button } from "../../Button";

 class Home extends Component {

  state = {
   posts: [],
   allPosts: [],
   page: 0,
   postsPerPage: 53,
   searchValue:''
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async() =>{
    const {page,postsPerPage} = this.state;

   const postsAndPhotos = await loadPosts()
   this.setState({
    posts:postsAndPhotos.slice(page,postsPerPage),
    allPosts:postsAndPhotos
  })
  }

  loadMorePosts = () =>{
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage,nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({posts,page:nextPage})
  }

  handleChange = (event) =>{
    const {value} = event.target;
    this.setState({searchValue:value})

  }
     
  render(){

    const {
      page,
      postsPerPage,
      allPosts,
      posts,
      searchValue
    } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
    
    posts.filter(post=>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    
    : posts;

    return (
      <section className="container">
        {!!searchValue && (
          <h1>search value: {searchValue}</h1>
        )}
        <input
        value={searchValue}
         onChange={this.handleChange} 
        type="search" 
        /><br />
        <Posts  posts={filteredPosts}/>
        <div className="button-container">
          {!searchValue && (
            <Button
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
             text = "Load more page"
             />
          )}
        
        </div>
        
      </section>
    );
  }
  
}
 

export default Home;
