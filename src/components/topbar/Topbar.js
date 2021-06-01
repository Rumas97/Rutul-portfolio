import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import './topbar.scss'

function Topbar(props) {
    const {menuOpen, setMenuOpen}= props
    return (
        //remember to put a space after the first className when chaining classes
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro'className='logo'> CoolLogo </a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>+49 176 8248 1092</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>rutulmaskar23@gmail.com</span>
                    </div>
                </div>
                
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
