import { useState } from 'react'
import './assets/App.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
