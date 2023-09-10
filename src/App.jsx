import { useState } from 'react'
import './App.css'
import bg from './assets/bg.jpg'
import { data } from './Data'

import { Header } from './Components/Header/Header'
import { MobileMenu } from './Components/MobileMenu/MobileMenu'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Login } from './Components/Auth/Login'
import { Signup } from './Components/Auth/Signup'
import { Posts } from './Pages/Posts/Posts'
import { SinglePost } from './Pages/SinglePost/SinglePost'
import { Create } from './Pages/Create/Create'

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
        <Route path='/blog/' element={<Home data={[...data]}/>} />
        <Route path='/blog/login' element={<Login />} />
        <Route path='/blog/signup' element={<Signup />} />
        <Route path='/blog/posts' element={<Posts />} />
        <Route path='/blog/posts/:id' element={<SinglePost />} />
        <Route path='/blog/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
