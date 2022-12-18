import React from 'react'
import css from './css/Card.module.css'
import { useDispatch,useSelector } from 'react-redux'

const Card =()=> {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.image}>

      </div>
      <div className={css.text}>
        
      </div>
    
  <button type="button"  style={{width:"4vw"}} className={css.btnprimary}>+</button>
    <button type="button" style={{width:"4vw",margin:"4px"}} className={css.btnprimary}>Remove</button>
      <button type="button" style={{width:"4vw"}} className={css.btnprimary}>-</button>
    </div>
  )
}

export default Card
