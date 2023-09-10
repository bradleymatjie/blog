import { memo } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';
import logo from '../../assets/logo.png'

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {

 return (
  <header className='header'>
      <div>
      <h2>Perspective Pulse</h2>
      </div>

    <nav>
      <ul className='header-navItems'>
          <li>
            <NavLink to='/blog/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/blog/posts'>Blog</NavLink>
          </li>

          <li id='loginDesktop'>
            <NavLink to='/blog/login'>
              Sign In
            </NavLink>
          </li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
      onClick={() => {
        menuTogglerFunction((state) => (!state))
      }}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
})