import React from 'react'
// eslint-disable-next-line
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from "@reach/router"
import footerStyles from './footer.module.scss'

import LogoFacebook from '../../content/svg/facebook.svg'
import LogoLinkedin from '../../content/svg/linkedin-white.svg'

const Footer = () => {
  const location = useLocation();
  return (
    <footer 
      className={footerStyles.footer}
      style={{background: /\/contractors/.test(location.pathname)? '#003E78':'#4D6071'}}
    >
      <div className={footerStyles.Detailed}>
        <div className={footerStyles.column}>
          <div>
            <label htmlFor="address-input" className={footerStyles.label}>Address</label>
          </div>
          <p className={footerStyles.Links}>
            <a id="address-input" className={footerStyles.Link} href="https://reactjs.org">
              231 S Jefferies Blvd
              <br/>
              Walterboro, SC 29488
            </a>
          </p>
        </div>
        <div className={footerStyles.column}>
          <div>
            <label htmlFor="contact-input" className={footerStyles.label}>Contact</label>
          </div>
          <p id="contact-input" className={footerStyles.Links}>
            <a className={footerStyles.Link} href="https://reactjs.org">
              {/\/contractors/.test(location.pathname)? 'contractorsllc.pacific@gmail.com':'pacific.concrete.division@gmail.com'}
            </a>
            <br/>
            <a className={footerStyles.Link} href="https://reactjs.org">843-782-3388</a>
          </p>
        </div>
        <div className={footerStyles.column}>
          <div className={footerStyles.Social}>
            <div className={footerStyles.SocialLinks}>
              <a className={footerStyles.Link} href="https://www.facebook.com/">
                <LogoFacebook/>
              </a>
              <a className={footerStyles.Link} href="https://www.linkedin.com/">
                <LogoLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer