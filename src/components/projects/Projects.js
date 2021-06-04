import { SelectAllRounded } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import ProjectList from '../skills/Skills'
import './projects.scss'

function Projects() {
    const[selected, setSelected] = useState()
    return (
        <div className='projects' id='projects'>
          

            <div className= 'container'>
                <h1>Projects</h1>
                <div className='wrapper'>
                    <div className='item' id='21-for-future'>
                        <img src='assets/P32.png' alt='picture'></img>
                        <h3>
                            <a href='https://app-21-for-future.herokuapp.com/'>21 For Future</a>   
                        </h3>
                        <p>A web application that creates environmental awareness through 21-day eco-friendly challenges. Users can browse freely through all challenges and start their own. They can also donate to environmental organizations through a secure donation form.</p>   
                    </div>

                    <div className='item' id='covid-travel-advice'>
                        <img src='assets/P2.png' alt='picture'></img>
                        <h3><a href='https://covid-travel-advice.herokuapp.com/'>Covid Travel Advice</a></h3>
                        <p>A web application to get information about COVID related travel restrictions. Users can find and enter own travel experiences using an interactive map and forms.</p>
                    </div>

                    <div className='item' id='azkabreak'>
                        <img src='assets/azkabreak.png' alt='picture'></img>
                        <h3><a href='https://rumas97.github.io/Azkabreak/'>Azkabreak</a></h3>
                        <p>Hogwarts is under attack! Protect the castle by moving Harry Potter up or down and shooting spells at the incoming dementors.</p>
                    </div>
                </div>
                
              
              
            </div>
        </div>
    )
}

export default Projects
