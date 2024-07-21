import { NavLink } from "react-router-dom"
import styles from "./style.module.css"
import Logo from "../../../public/images/logo.png"
import { navlink } from "../Data/dummydata"
import { useState } from "react"
import { Menu } from "@mui/icons-material"


const { container, logo, nav, toggle, icon, hideMenu } = styles



const Header = () => {

    const [responsive, setResponsive] = useState(false)

    return (
        <>
            <header>
                <div className={container}>
                    <div className={logo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className={responsive ? hideMenu : nav}>
                        {
                            navlink.map(({ url, text, id }) => {
                                return (
                                    <NavLink key={id} to={url}>{text}</NavLink>
                                )
                            })
                        }
                    </div>
                    <button className={toggle} onClick={() => setResponsive(!responsive)}>
                        <Menu className={icon}></Menu>
                    </button>
                </div>
            </header>
        </>

    )
}

export default Header