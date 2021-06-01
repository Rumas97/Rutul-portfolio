import React, { useState } from 'react'
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Projects from './components/projects/Projects';
import './app.scss'



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
