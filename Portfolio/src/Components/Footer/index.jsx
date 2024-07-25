import React from 'react'
import { social } from '../Data/dummydata'

const Footer = () => {
    return (
        <footer>

            {
                social.map((val) => {
                    return (
                        <>
                        <i data-aos='zoom-in-left'>{val.icon}</i>
                        </>
                    )
                })
            }
            <p data-aos='zoom-in-right'>
                All Right Reserved 2024
            </p>
        </footer>
    )
}

export default Footer