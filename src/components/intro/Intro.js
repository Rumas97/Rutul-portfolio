import {React,useEffect,useRef} from 'react'
import './Intro.scss'
import { init } from 'ityped'

function Intro() {

    //useRef works like documen.querySelector

    const textRef = useRef()

    //functions like component did mount(since there is only empty array)
    useEffect(() => {
        //console.log(textRef)
        init(textRef.current, { showCursor: true, backdelay: 1500, backSpeed:60, strings: ['Full Stack Web Developer','Mechanical Design Engineer', 'Rockstar' ] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/rutulmas.png' alt='rutul-img' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I'm</h2>
                    <h1>Rutul Maskar</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                </div>
                <br></br>
                <br></br>
                <a href='#projects'>
                    <img src='assets/down.png' alt='down-arrow'/>
                </a>
            </div>
        </div>
    )
}

export default Intro
