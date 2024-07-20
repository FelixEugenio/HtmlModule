import './styles.css'
import { useParams, useSearchParams } from 'react-router-dom'

export const Post = () => {
  const params = useParams();
  const {id} = params;
  const [qs,setQs] = useSearchParams();
  return (
    <div>
      <h1>Post</h1>
    </div>
  )
}