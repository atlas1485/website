import React from 'react'

import hamburgerStyles from './Hamburger.module.scss'

export default ({ navscreen, toggle }) => {
	return (
    <button 
      className={`
        ${hamburgerStyles.hamburger}
        ${hamburgerStyles.hamburgerSlider}
        ${navscreen ? hamburgerStyles.active : ''}
      `}
      onClick={toggle}
     >
      <span className={hamburgerStyles.hamburgerBox}>
        <span className={hamburgerStyles.hamburgerInnerLayer}>
        </span>
      </span>
    </button>
  )
}