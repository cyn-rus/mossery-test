import React from 'react'

import './NavBar.css'

import { ReactComponent as Logo} from '../../assets/svg/Logo.svg'

const NavBar = () => {
    return (
        <nav class="navbar">
            <Logo class="mossary-logo"/>
        </nav>
    )
}

export default NavBar