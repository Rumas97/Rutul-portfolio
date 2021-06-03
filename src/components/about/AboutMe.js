import React from 'react'
import './aboutMe.scss'

function AboutMe() {
    return (
        <div className='aboutme' id='aboutme'>
            <h1>About me</h1>
            <div className='division'>
                <div className='left'>
                    
                        <p>I'm a Full Stack developer currently living in Düsseldorf, Germany. I have a background in Mechanical Engineering and as a side-project I'm studying Master in Economics and Business Administration. The thrill at being able to bring my imagination to life has taken me on a journey from being a mechanical design engineer and finally brought me to web development. 
                        <br/>
                        <br/>
                        
                        Through my experiences working in an international automotive company, I had the opportunity to work in different countries in a multi-cultural teams. The combination of creative problem-solving and analytical skills that I gained in this field has prepared me to become a better developer. 
                        <br/>
                        <br/>

                        In the last few months at the Web Development Bootcamp at Ironhack, I have developed not only games and apps but also a sense of community, passion to continue learning and being curious. </p>
                    
                </div>

                <div className='right'>
                    <div className='imageContainer'>
                        <img src='assets/rutulmas.png' alt='rutul-img' />
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}

export default AboutMe
