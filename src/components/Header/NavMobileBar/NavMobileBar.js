import React from 'react'
import { useLocation } from "@reach/router"

import Hamburger from './Hamburger/Hamburger'
import LogoMobile from '../../../../content/svg/company-logo-mobile.svg'
import LogoConcreteMobile from '../../../../content/svg/concrete-logo-mobile.svg'

import NavMobileBarStyles from './NavMobileBar.module.scss'

export default ({ navscreen, toggle }) => {
  const location = useLocation();
	return (
    <div className={NavMobileBarStyles.main}>
      { /\/contractors/.test(location.pathname) ? <LogoMobile className={NavMobileBarStyles.Logo}/> : <LogoConcreteMobile className={NavMobileBarStyles.Logo}/>}
      <Hamburger navscreen={navscreen} toggle={toggle} />
    </div>
   )
}