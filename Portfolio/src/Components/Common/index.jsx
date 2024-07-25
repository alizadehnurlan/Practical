import { Link, NavLink } from "react-router-dom"
import Logo from "../../../public/images/logo.png"
import { navlink } from "../Data/dummydata"
import { useState } from "react"
import { Menu } from "@mui/icons-material"
import 'aos/dist/aos.css'
import Aos from 'aos'


const Header = () => {

    const [responsive, setResponsive] = useState(false)

    return (
        <>
            <header>
                <div className='container flexsb'>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="Logo" data-aos='zoom-in-right' />
                    </Link>
                    <div className={responsive ? 'hideMenu' : "nav"}>
                        {
                            navlink.map(({ url, text, id }) => {
                                return (
                                    <NavLink  data-aos='zoom-in-right' key={id} to={url}>{text} </NavLink>
                                )
                            })
                        }
                    </div>
                    <button className='toggle' onClick={() => setResponsive(!responsive)}>
                        <Menu className='icon'></Menu>
                    </button>
                </div>
            </header>
        </>

    )
}

export default Header