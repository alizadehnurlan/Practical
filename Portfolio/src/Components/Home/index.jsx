import About from '../../Pages/About'
import Blog from '../../Pages/Blog'
import Contact from '../../Pages/Contact'
import Counter from '../../Pages/Counter'
import Portfolio from '../../Pages/Portfolio'
import Services from '../../Pages/Sevices'
import Testimonials from '../../Pages/Testimonials'
import Hero from '../Hero'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Counter/>
    <Portfolio/>
    <Testimonials/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default Home