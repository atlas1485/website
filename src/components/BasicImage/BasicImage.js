import React from 'react'

import basicImageStyles from './BasicImage.module.scss'

const BasicImage = (props) => {
  return (
    <div
      className={basicImageStyles.imageContainer}
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-delay={props.num%2===0?"200":"000"} 
      data-sal-easing="ease-out-circ" 
    >
      <img  
        className={basicImageStyles.Image}
        src={props.image}
        alt="recipe" 
      /> 
    </div>

  )
}

export default BasicImage