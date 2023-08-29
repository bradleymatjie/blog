import { memo } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {

 return (
  <header className='header'>
      <div>
      {/* <img src='' alt="logo" /> */}
      <h2>BLOG</h2>
      </div>

    <nav>
      <ul className='header-navItems'>
          <li>
            <NavLink to='/blog/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/blog/posts'>Blog</NavLink>
          </li>

          <li id='create'>
            Create Post
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