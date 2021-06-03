import React from 'react'
import './skills.scss'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h1>Skills</h1>

            <div className='container'>
                <div className='icon' id='javascript'>
                    <img src='assets/javascript.svg'/>
                    <span><h3>JavaScript</h3></span>
                </div>
                <div className='icon' id='react'>
                    <img src='assets/reactnative.svg'/>
                    <span><h3>React</h3></span>
                </div>
                <div className='icon' id='html'>
                    <img src='assets/html5.svg'/>
                    <span><h3>HTML5</h3></span>
                </div>
                <div className='icon' id='css'>
                    <img src='assets/css3.svg'/>
                    <span><h3>CSS</h3></span>
                </div>
                <div className='icon' id='bootstrap'>
                    <img src='assets/bootstrap.svg'/>
                    <span><h3>Bootstrap</h3></span>
                </div>
                <div className='icon' id='sass'>
                    <img src='assets/sass.svg'/>
                    <span><h3>Sass</h3></span>
                </div>
                <div className='icon' id='materialui'>
                    <img src='assets/materialui.svg'/>
                    <span><h3>Material UI</h3></span>
                </div>
                <div className='icon' id='mongodb'>
                    <img src='assets/mongodb.svg'/>
                    <span><h3>MongoDB</h3></span>
                </div>
                <div className='icon' id='nodejs'>
                    <img src='assets/nodejs.svg'/>
                    <span><h3>Nodejs</h3></span>
                </div>
                <div className='icon' id='expressjs'>
                    <img src='assets/expressjs.svg'></img>
                    <span><h3>Expressjs</h3></span>
                </div>
                <div className='icon' id='git'>
                    <img src='assets/git.svg'></img>
                    <span><h3>Git</h3></span>
                </div>
            </div>
        </div>
    )
}

export default Skills

