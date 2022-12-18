import React from 'react'
import css from './css/CategorySingle.module.css'

const CategorySingle = () => {
  const SubmitHandler=(e:any)=>{
      e.preventDefault();
      
  }

  return (
    <div>
      
    <div className={css.container}>
      <div className={css.image}>

      </div>
      <div className={css.text}>
        
      </div>
<button  type="button" className={css.btnprimary}>Add to Cart</button>
    </div>
    </div>
  )
}

export default CategorySingle
