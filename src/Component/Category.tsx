import React from 'react'
import css from './css/Category.module.css'
import CategoryCard from './CategoryCard'
const Category = () => {
  return (
    <div className={css.container} >
    <CategoryCard/> 
    <CategoryCard/> 
    <CategoryCard/> 
    <CategoryCard/> 


    </div>
  )
}

export default Category
