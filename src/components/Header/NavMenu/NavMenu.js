import React from "react"
import { Link } from "gatsby"
import { Location } from '@reach/router'
import { useLocation } from "@reach/router"

import Logo from '../../../../content/svg/company-logo.svg'
import LogoConcrete from '../../../../content/svg/concrete-logo.svg'

import headerStyles from "./NavMenu.module.scss"

const NavBar = () => {
  const location = useLocation();

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: `
           ${headerStyles.navItem}
           ${headerStyles.activeNavItem}
        `}
      : {}
  }

  return ( 
    <div className={headerStyles.nav}> 
      <nav className={headerStyles.navMain}>
        <ul className={headerStyles.navList}> 
          <li className={headerStyles.navListItem}>
            <Link
              className={headerStyles.navItem}
              getProps={isPartiallyActive}
              to="/contractors"
              >
              Pacific Contractors
            </Link>
          </li>
          <li className={headerStyles.navListItem}>
            { /\/contractors/.test(location.pathname) ? <Logo className={headerStyles.Logo}></Logo> : <LogoConcrete className={headerStyles.Logo}></LogoConcrete>}
          </li>
          <li className={headerStyles.navListItem}>          
            <Link
              className={headerStyles.navItem}
              getProps={isPartiallyActive}
              to="/concrete"
            >
              Pacific Concrete Division
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={headerStyles.navSub}>
        <Location>
          {({ location }) => {
            const result = /\/contractors/.test(location.pathname)
            return(
              <ul className={headerStyles.navListSub}> 
                <li className={headerStyles.navListItem}>
                    <Link
                      className={headerStyles.navItem}
                      to={result ? '/contractors' : '/concrete'}
                      >
                      Home
                    </Link>
                </li>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/services' : '/concrete/services'}
                  >
                    Services
                  </Link>
                </li>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/portfolio' : '/concrete/portfolio'}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/contact' : '/concrete/contact'}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              )
            }}
        </Location>
      </nav>
    </div>
  )
}

export default NavBar
