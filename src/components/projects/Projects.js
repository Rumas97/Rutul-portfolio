import React from 'react'
import './projects.scss'

function Projects() {
    
    return (
        <div className='projects' id='projects'>
            
            <div className='container'>
            <h1>Projects</h1>
                <div className='wrapper'>
                    <div className="card" id='21-for-future'>
                        <div className="card-header">
                            <img src="assets/P32.png" alt="21-for-future" />
                        </div>
                        <div className="card-body">
                            <h3>21 For Future</h3>
                            <p>A full stack web application that creates environmental awareness through 21-day eco-friendly challenges. Users can browse freely through all challenges and start their own. They can also donate to environmental organizations through a secure donation form.</p>
                            <h5><a href='https://app-21-for-future.herokuapp.com/'>Link to website</a></h5>
                            <br></br>
                            <p className='hashtags'>
                                <a href='https://reactjs.org/'><span className="tag">React</span></a>
                                <a href='https://www.javascript.com/'><span className="tag">JavaScript(ES6)</span></a>
                                <a href='https://nodejs.org/en/'><span className="tag">Node.js</span></a>
                                <a href='https://expressjs.com/'><span className="tag">Express.js</span></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'><span className="tag">HTML5</span></a>
                                <a href='https://getbootstrap.com/'><span className="tag">Bootstrap</span></a>
                                <a href='https://material-ui.com/'><span className="tag">Material UI</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="card" id='covid-travel-advice'>
                        <div className="card-header">
                            <img src="assets/P2.png" alt="covid-travel-advice" />
                        </div>
                        <div className="card-body">
                            <h3>Covid Travel Advice</h3>
                            <p>A web application to get information about COVID related travel restrictions. Users can find and enter own travel experiences using an interactive map and forms.</p>
                            <h5><a href='https://covid-travel-advice.herokuapp.com/'>Link to website</a></h5>
                            <br></br>
                            <p className='hashtags'>
                                <a href='https://www.javascript.com/'><span className="tag">JavaScript(ES6)</span></a>
                                <a href='https://nodejs.org/en/'><span className="tag">Node.js</span></a>
                                <a href='https://expressjs.com/'><span className="tag">Express.js</span></a>
                                <a href='https://handlebarsjs.com/'><span className="tag">Handlebars</span></a>
                                <a href='https://getbootstrap.com/'><span className="tag">Bootstrap</span></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><span className="tag">CSS3</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="card" id='azkabreak'>
                        <div className="card-header">
                            <img src="assets/azkabreak.png" alt="azkabreak" />
                        </div>
                        <div className="card-body">
                            <h3>Azkabreak</h3>
                            <p>Hogwarts is under attack! Protect the castle by moving Harry Potter up or down and shooting spells at the incoming dementors.</p>
                            <h5><a href='https://rumas97.github.io/Azkabreak/'>Link to game</a></h5>
                            <br></br>
                            <p className='hashtags'>
                                <a href='https://www.javascript.com/'><span className="tag">JavaScript(ES6)</span></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'><span className="tag">HTML5</span></a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><span className="tag">CSS3</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className= 'container'>
                <h1>Projects</h1>
                <div className='wrapper'>
                    <div className='item' id='21-for-future'>
                        <img src='assets/P32.png' alt='picture'></img>
                        <h3>
                            <a href='https://app-21-for-future.herokuapp.com/'>21 For Future</a>   
                        </h3>
                        <p>A web application that creates environmental awareness through 21-day eco-friendly challenges. Users can browse freely through all challenges and start their own. They can also donate to environmental organizations through a secure donation form.
                            <br/>
                        <h5><a href='https://app-21-for-future.herokuapp.com/'>Link to website</a></h5>
                        </p>
                           
                    </div>

                    <div className='item' id='covid-travel-advice'>
                        <img src='assets/P2.png' alt='picture'></img>
                        <h3><a href='https://covid-travel-advice.herokuapp.com/'>Covid Travel Advice</a></h3>
                        <p>A web application to get information about COVID related travel restrictions. Users can find and enter own travel experiences using an interactive map and forms.
                            <br/>
                            <h5><a href='https://covid-travel-advice.herokuapp.com/'>Link to website</a></h5>
                        </p>
                    </div>

                    <div className='item' id='azkabreak'>
                        <img src='assets/azkabreak.png' alt='picture'></img>
                        <h3><a href='https://rumas97.github.io/Azkabreak/'>Azkabreak</a></h3>
                        <p>Hogwarts is under attack! Protect the castle by moving Harry Potter up or down and shooting spells at the incoming dementors.
                            <br/>
                            <h5><a href='https://rumas97.github.io/Azkabreak/'>Link to game</a></h5>
                        </p>
                    </div>
                </div>
                
              
              
            </div> */}
        </div>
    )
}

export default Projects
