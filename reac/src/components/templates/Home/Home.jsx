import { Component, useEffect, useState,useCallback } from "react";
import './styles.css'

import { loadPosts} from  '../../../utils/load-posts'
import { Posts } from '../../Posts/index';
import { Button } from "../../Button";
import { TextInput } from "../../Input";

export  const Home = () =>{
  /*
  const {
    page,
    postsPerPage,
    allPosts,
    posts,
    searchValue
  } = this.state;
   */

  const [posts,setPosts] = useState([]);
  const [allPosts,setAllPosts] = useState([]);
  const [page,setPage] = useState(0);
  const [searchValue,setSearchValue] = useState('');
  const [postsPerPage,setPostsPerPage] = useState(10);

  const handleLoadPosts = useCallback(async(page,postsPerPage) =>{

   const postsAndPhotos = await loadPosts();
   
  setPosts(postsAndPhotos.slice(page,postsPerPage));
  setAllPosts(postsAndPhotos)
  },[])

  const loadMorePosts = () =>{

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage,nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (event) =>{
    const {value} = event.target;
  
    setSearchValue(value)

  }

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? 
    
    allPosts.filter(post=>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    
    : posts;

    useEffect(()=>{
    handleLoadPosts(0,postsPerPage)
    },[handleLoadPosts,postsPerPage])

  return (
    <section className="container">
      <div className="search-container">
      {!!searchValue && (
        <h1>search value: {searchValue}</h1>
      )}
       
       <TextInput 
       searchValue={searchValue}
       handleChange={handleChange}
       
       />
      </div>
      

      {filteredPosts.length > 0 && (
      <Posts  posts={filteredPosts}/>
      )}

      {filteredPosts.length == 0 && (
       <p>Nao existem Posts</p>
      )}


      <div className="button-container">
        {!searchValue && (
          <Button
          disabled={noMorePosts}
          onClick={loadMorePosts}
           text = "Load more page"
           />
        )}
      
      </div>
      
    </section>
  );
} 

/*

 class Home2 extends Component {

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

    

    

    
  }
  
}
 
*/
export default Home;
