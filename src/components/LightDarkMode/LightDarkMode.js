import React, {useState, useEffect} from 'react'
import { LightDarkModeStyled } from './LightDarkModeElements'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'

function LightDarkMode() {
    const [theme, setTheme] = useState('dark-theme')
    const [checked, setChecked] = useState(false)

  useEffect(()=>{
    document.documentElement.className = theme
  }, [theme])

  const themeToggler = () => {
      if(theme === 'light-theme'){
          setTheme('dark-theme')
          setChecked(false)
      }else{
        setTheme('light-theme')
        setChecked(true)

      }

  }
    return (
        <LightDarkModeStyled>
        <div className="light-dark-mode">
        <div className="left-content">
            <Brightness4Icon />
        </div>
        <div className="right-content">
            <Switch
                value=""
                checked={checked}
                inputProps={{ 'aria-label' : ''}}
                size= "medium"
                onClick={themeToggler}
            />
        </div>
    </div>
    </LightDarkModeStyled>
    )
}

export default LightDarkMode
