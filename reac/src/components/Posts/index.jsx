
import { PostCard } from "../PostCard"
import './styles.css'

export const Posts = ({posts =[]}) =>(
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
)