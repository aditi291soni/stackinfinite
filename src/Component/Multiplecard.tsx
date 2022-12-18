import React from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { productData } from '../Reducer/productSlice';
import { changeCounter } from '../Reducer/counterSlice';
import css from './css/MultipleCard.module.css';
import csss from './css/Card.module.css'
import { useSelector, useDispatch } from "react-redux";

interface RootSate{ 
    id:number,
    product:{
        value:{id:number,image:string,title:string,price:number,description:string}[]
    }
}
const Multiplecard = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state:RootSate) => state.product.value);
  const getData=async()=>{
    
        const data= await fetch('https://fakestoreapi.com/products')
        const res= await data.json()
        dispatch(productData(res))
  }
   

     React.useEffect(() => {
        getData()
         }, [])
  // console.log(products)
  return (
    
    <>
    <div className={css.cardsrow}>
         <div className={css.row}>

          {products.map((e:any)=>(
            
            <div className={csss.container}>
      <Link to={`/single/${e.id}`}>
      <div className={csss.image}>
            <img src={e.image} alt="" />
      </div>
      
      <div className={csss.text}>
        <h5 style={{fontSize:"17px",padding:"5px",fontWeight: "400"}}>{e.title}</h5>
        <h5 style={{fontSize:"17px",padding:"5px",fontWeight: "400"}}>Price: ${e.price}</h5>
        <h6 style={{fontSize:"14px",padding:"5px",fontWeight: "200"}}>{e.description.slice(0,80)}...</h6>
      </div>
               </Link>
      <button type="button" onClick={()=>dispatch(changeCounter(1))}  className={csss.btnprimary}>Add to Cart</button>
           </div>

          ))}

    </div>


     </div>
     </>
  )
}

export default Multiplecard
