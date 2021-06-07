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
                    <a href='#intro'className='logo'> 
                    <img src='assets/logo.png'/></a>
                    
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
