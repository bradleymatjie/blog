import { NavLink } from 'react-router-dom'
import './MobileMenu.scss';

export const MobileMenu = ({ removeMenu, menuToggler }) => {

  return (
    <div className={`mobileMenu ${menuToggler ? 'open':''}`}>
      <ul className={`${menuToggler ? 'open':''}`}>

          <li>
            <NavLink to='/blog/' onClick={removeMenu}>Home</NavLink>
          </li>

          <li>
            <NavLink to='/blog/posts' onClick={removeMenu}>Blog</NavLink>
          </li>

          <li id='create' onClick={removeMenu}>
            Create Post
          </li>
      </ul>
    </div>
  )
}