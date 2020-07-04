import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { useLocation } from "@reach/router"

import LogoFacebook from '../../../../content/svg/facebook-mobile.svg'
import LogoLinkedin from '../../../../content/svg/linkedin-mobile.svg'

import headerStyles from "./NavScreen.module.scss"

export default ({navscreen, toggle}) => {
  const location = useLocation();

	return (
    <nav 
      className={`
        ${headerStyles.navSub}
        ${navscreen ? headerStyles.active: ''}
      `}
      style={{background: /\/contractors/.test(location.pathname)? '#003E78':'#4D6071'}}
    >
      <Location>
        {({ location }) => {
          const result = /\/contractors/.test(location.pathname)
          return(
            <>
              <ul className={headerStyles.navList}> 
                <li className={headerStyles.navListItem}>
                    <Link
                      className={headerStyles.navItem}
                      to={result ? '/contractors' : '/concrete'}
                      >
                      Home
                    </Link>
                </li>
                <hr className={headerStyles.style1}></hr>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/services' : '/concrete/services'}
                  >
                    Services
                  </Link>
                </li>
                <hr className={headerStyles.style1}></hr>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/portfolio' : '/concrete/portfolio'}
                  >
                    Portfolio
                  </Link>
                </li>
                <hr className={headerStyles.style1}></hr>
                <li className={headerStyles.navListItem}>          
                  <Link
                    className={headerStyles.navItem}
                    to={result ? '/contractors/contact' : '/concrete/contact'}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={headerStyles.info}>
                <p className={headerStyles.contact}>
                  231 S Jefferies Blvd
                  <br/>
                  Walterboro, SC 29488 
                  <br/>
                  USA 
                  <br/>
                  <br/>
                  contractorsllc.pacific@gmail.com
                  <br/>
                  <br/>
                  843-782-3388
                  <br/>
                  <br/>
                </p>
                <div className={headerStyles.links}>
                  <a href="https://www.facebook.com/">
                    <LogoFacebook/>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <LogoLinkedin/>
                  </a>
                </div>
                <p className={headerStyles.othersite}>
                  <Link
                    className={headerStyles.othersitelink}
                    to={result ? '/concrete' : '/contractors'}
                    >
                    {result ? 'Visit Pacific Concrete Division site' : 'Visit Pacific Contractors site'}
                  </Link>
                </p>
              </div>
            </>
            )
          }}
      </Location>
    </nav>
	)
}