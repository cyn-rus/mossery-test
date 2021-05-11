import React from 'react'

import './NavBar.css'

import { ReactComponent as Logo} from '../../assets/svg/Logo.svg'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Logo className="mossary-logo"/>
        </nav>
    )
}

export default NavBar