import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home'
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';


function App() {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <>
    <div className="hamburger-menu">
      <IconButton onClick={()=>setNavToggle(!navToggle)}>
        <MenuIcon />
      </IconButton>
    </div>
    <Sidebar navToggle={navToggle} />
    <LightDarkMode />
    <Home />
    </>
  );
}

export default App;
