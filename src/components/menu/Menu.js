import React from 'react'
import './menu.scss'

function Menu(props) {
    const {menuOpen, setMenuOpen} = props
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={(()=>setMenuOpen(false))} >
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={(()=>setMenuOpen(false))}>
                    <a href='#projects'>Projects</a>
                </li>
                <li onClick={(()=>setMenuOpen(false))}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
