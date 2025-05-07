import { useState } from 'react'
import './assets/App.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/service'
import Contact from './pages/Contact'
import BarcodeGen from './pages/barcode-gen'

function App() {
  const [count, setCount] = useState(0)

  return <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/barcode-gen' element={<BarcodeGen/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
