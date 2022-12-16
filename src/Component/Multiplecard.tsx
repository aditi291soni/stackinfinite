import React from 'react'
import Card from './Card'
import css from './css/MultipleCard.module.css'
const Multiplecard = () => {
  return (
    <>
    <div className={css.cardsrow}>
        <div className={css.row}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
                  
      
     </div>



     </div>
     </>
  )
}

export default Multiplecard
