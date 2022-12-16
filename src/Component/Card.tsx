import React from 'react'
import css from './css/Card.module.css'

const Card = () => {
  return (
    <div className={css.container}>
      <div className={css.image}>

      </div>
      <div className={css.text}>
        
      </div>
<button type="button" className={css.btnprimary}>Add to Cart</button>
    </div>
  )
}

export default Card
