import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Common'
import Home from './Components/Home'
import About from './Pages/About'
import Services from './Pages/Sevices'
import Portfolio from './Pages/Portfolio'
import Testimonials from './Pages/Testimonials'
import Blog from './Pages/Blog'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/testimonials' element={<Testimonials />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </div>
  )
}

export default App
