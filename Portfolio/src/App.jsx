import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Common'
import Home from './Components/Home'
import About from './Pages/About'
import Services from './Pages/Sevices'
import Portfolio from './Pages/Portfolio'
import Testimonials from './Pages/Testimonials'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'


function App() {

  useEffect(()=>{
    Aos.init()
    Aos.refresh()

  },[])

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
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
