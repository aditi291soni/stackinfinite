import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import { changeCounter } from '../Reducer/counterSlice';
import {Cart} from './Cart';
import css from '../Component/css/Single.module.css'
import { productData } from '../Reducer/productSlice';

import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
interface RootSate{
  id:number,
  product:{
    value:{id:number,image:string,title:string,price:number,description:string}[]
  }
}
const Singleitem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state:RootSate) => state.product.value);
  const {id}=useParams()

  // console.log("hello",id)
  const getapi=async()=>{
const res=await axios.get(`https://fakestoreapi.com/products/`)
        dispatch(productData(res.data));
        
      }
      const cartitem=(id:number):any=>{
  const ab=products.find((item:any)=>{
    return item.id===id
  })
  let itemsList = []
  let getitem=localStorage.getItem("cart");
  if(getitem){
    itemsList=JSON.parse(getitem)
    itemsList.push(ab)
    localStorage.setItem('cart',JSON.stringify(itemsList))
  }
  else{
    itemsList.push(ab)
    localStorage.setItem('cart',JSON.stringify(itemsList));

  }
  dispatch(changeCounter(itemsList.length))


}
      console.log(products)
      useEffect(() => {
        getapi()
      }, []);
      
      return (
        <>
     
    <div className={css.main}>
      {products.map((e:any)=>{
        if(e.id==id){

        return <>
<div className={css.left}>
<img src={e.image} alt="" />
      
        </div>
        <div className={css.right}>
          <h2>{e.title}</h2>
          <h3>Category:{e.category}</h3> <br />
          <h3>Price:$ {e.price}</h3>
          <h3>Description:<span>{e.description}</span></h3>
        <button type="button" onClick={()=>cartitem(e.id)}  className={css.btnprimary}>Add to Cart</button>

          </div> 
        </>
        }
        
      })}
      </div>
        
    </>
  )
}

export default Singleitem
