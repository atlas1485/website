import React from 'react'

import contactCardStyles from './ContactCard.module.scss'

export default (props) => {
  const IconSVG = props.svg
	return (
    <div className={contactCardStyles.infoCard}>
      <div className={contactCardStyles.svgContainer}>
        <IconSVG
          className={contactCardStyles.icon}
        />
      </div>
      <h5 className={contactCardStyles.titleInfoCard}>{props.title}</h5>
      <p className={contactCardStyles.detailsInfoCard}>
        {props.details}
        <br></br>
        {props.secondaryDetails}
      </p>
    </div>
	)
}