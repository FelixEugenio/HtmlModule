import { useEffect, useRef, useState } from 'react'
import './styles.css'
import { useParams, useSearchParams ,useNavigate} from 'react-router-dom'

export const Redirect = () => {
  const navigate = useNavigate()
  const timeout = useRef(0)
  const [time,setTime] = useState(3)

  useEffect(()=>{
  clearTimeout(timeout.current)

  timeout.current = setTimeout(()=>{
    setTime((t)=>t-1);
  },1000)
  },[time])

  return (
    <div>
      <h1>Redirect</h1>
    </div>
  )
}