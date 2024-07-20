import './styles.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav className='Menu'>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
      </ul>
    </nav>
  )
}