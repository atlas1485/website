import React, { useState } from 'react'
import { useLocation } from "@reach/router"
import NavMenu from './NavMenu/NavMenu'
import NavMobileBar from './NavMobileBar/NavMobileBar'
import NavScreen from './NavScreen/NavScreen'

import headerStyles from './Header.module.scss'

export default () => {
	const [navscreen, setNavScreen] = useState(false)
  const location = useLocation();

	const toggle = () => setNavScreen(!navscreen)
  
	return (
    <header 
      className={headerStyles.header}
      style={{background: /\/contractors/.test(location.pathname)? '#003E78':'#4D6071'}}
    >
      <NavMenu />
      <NavMobileBar navscreen={navscreen} toggle={toggle}/>
      <NavScreen navscreen={navscreen} toggle={toggle} />
    </header>
	)
}