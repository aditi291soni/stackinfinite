import React from 'react'
import { useState } from 'react';
import css from './css/Category.module.css'
import CategoryCard from './CategoryCard';
import  jewellery from '../images/jewellery.jpg';
import  allproduct from '../images/allproduct.png';
import  fashion from '../images/fashion.webp';
import  Electronics from '../images/electronics.jpeg';




const Category = () => {
  const  [images, setimages] = useState([{
    name:"All Product",
    image:allproduct
  },{
    name:"Jewellery",
    image:jewellery
  },{
    name:"Fashion",
    image:fashion
  },
  {
    name:"Electronics",
    image:Electronics
  },
]);




  return (
    <div className={css.container} >
      {images.map((e:any)=>(
      
        <CategoryCard  image={e.image} name={e.name}/> 
      ))}
  
    </div>
  )
}

export default Category;
