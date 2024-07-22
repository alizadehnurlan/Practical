import { BrowserRouter as Router,Route,  Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Common'
import Home from './Components/Home'
import About from './Pages/About'

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
  )
}

export default App
