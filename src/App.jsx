
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <div className=''>
      <Navbar className='fixed top-0 w-full z-50'></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
