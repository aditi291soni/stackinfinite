import axios from 'axios'
import React from 'react'
 interface ImageProps {
  image: any,
  name:any
}

const Categoryproduct=async()=>{
const res= await axios.get('https://fakestoreapi.com/products/category/jewelery')
}
const CategoryCard : React.FC<ImageProps> = (props):JSX.Element => { 
  return (
    <div className="circle" style={{
        height:"130px",
        width:"100px",
    
    }}>
        <div className="circle" style={{
        height:"100px",
        width:"100px",
        borderRadius:"50%",
        backgroundColor:"pink",
        overflow:"hidden"
    }}>
      <img style={{height:"100%",width:"100%",objectFit:"cover",objectPosition:"center"}} src={props.image} alt="" />
    </div>
      <h4 style={{fontSize:"17px",
      textAlign:"center",}}>{props.name}</h4>
    </div>
  )
}

export default CategoryCard
