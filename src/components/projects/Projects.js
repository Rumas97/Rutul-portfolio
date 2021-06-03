import { SelectAllRounded } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import ProjectList from '../skills/Skills'
import './projects.scss'

function Projects() {
    const[selected, setSelected] = useState()
    return (
        <div className='projects' id='projects'>
          <h1>Projects</h1>
          {/* <ProjectList selected={selected} setSelected={setSelected} /> active? 'projectList active' : 'projectList' */}
          {/* <ul>
              <li className={selected? 'projectList active' : 'projectList'}><a href='#21-for-future'>21 For Future</a></li>
              <li className={selected? 'projectList active' : 'projectList'}><a href='#covid-travel-advice'>Covid-travel-advice</a></li>
              <li className={selected? 'projectList active' : 'projectList'}>Portfolio</li>
              <li className={selected? 'projectList active' : 'projectList'}><a href='#azkabreak'>Azkabreak</a></li>
          </ul> */}
          <div className= 'container'>
              <div className='item' id='21-for-future'>
                  <img src='assets/P3.png' alt='picture'></img>
                  <h3><a href='https://app-21-for-future.herokuapp.com/'>21 For Future</a>
                  <p>bla bla</p></h3>
                  
              </div>
              <div className='item' id='covid-travel-advice'>
                  <img src='assets/P2.png' alt='picture'></img>
                  <h3><a href='https://covid-travel-advice.herokuapp.com/'>Covid Travel Advice</a></h3>
              </div>
              <div className='item' id='azkabreak'>
                  <img src='assets/azkabreak.png' alt='picture'></img>
                  <h3><a href='https://rumas97.github.io/Azkabreak/'>Azkabreak</a></h3>
              </div>
              
              
          </div>
        </div>
    )
}

export default Projects
