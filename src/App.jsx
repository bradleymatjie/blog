import { useState } from 'react'
import './App.css'
import bg from './assets/bg.jpg'

import { Header } from './Components/Header/Header'
import { MobileMenu } from './Components/MobileMenu/MobileMenu'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Posts } from './Pages/Posts/Posts'
import { SinglePost } from './Pages/SinglePost/SinglePost'

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  const removeMenu = () => {
    setMenuToggler(prev => false);
  }


  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
      <Routes>
        <Route path='/blog/' element={<Home />} />
        <Route path='/blog/posts' element={<Posts />} />
        <Route path='/blog/posts/:id' element={<SinglePost />} />
      </Routes>
    </div>
  )
}

export default App
