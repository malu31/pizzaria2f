import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Home from './pages/Inicio'

const App = () => {

const [color] = useState("#eb88cc")
document.body.style.backgroundColor = color

return(
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/inicio" element={<Inicio/>} />
  </Routes>
)
}

export default App