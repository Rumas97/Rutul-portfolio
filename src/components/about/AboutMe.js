import React from 'react'
import './aboutMe.scss'

function AboutMe() {
    return (
        <div className='aboutme' id='aboutme'>
            <h1>About me</h1>
            <div className='container'>
                
                <div className='division'>
                    <div className='left'>
                            
                        <p>I'm Rutul Maskar, a web developer based in Düsseldorf, Germany. I'm focused on using frontend and backend technologies to build amazing products. 
                            <br/>
                            <br/>                            
                            My formal education in Mechanical Engineering taught me to combine creativity, knowledge and analytical tools to complete the difficult task of bringing an idea into life. The thrill at being able to build new, awesome things faster than ever before took me on a journey to learn coding and finally brought me to web development. 
                                <br/>
                                <br/>
                                
                        Through my experiences having worked and lived in different countries, I have developed skills to communicate effectively, to keep an open-mind and adapt continuously. 
                                <br/>
                                <br/>
                        In my free time, I like to dig my head in a nice book or work on my part-time Masters in Economics and Business. I brush up the creative side of my brain by rocking it out with my guitar with the band. I love the outdoors-from rafting in Indian rivers, climbing the highest mountain in Germany to hiking in the Swedish Lapplands. I like to stay active and keep challenging myself both physically and intellectually.
                                <br/>
                                <br/>
                        I'm always experimenting, always learning and forever curious. </p>
                            
                    </div>

                    <div className='right'>
                        <div className='imageContainer'>
                                <img src='assets/rutulmas.png' alt='rutul-img' />
                        </div>
                    </div>
                </div>
            
            </div> 

        </div>
    )
}

export default AboutMe
