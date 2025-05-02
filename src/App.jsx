import { useState } from 'react'
import './assets/App.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
