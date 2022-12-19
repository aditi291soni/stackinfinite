import React,{useEffect} from 'react'
import { changeCounter } from '../Reducer/counterSlice'
import css from './css/Card.module.css'
import { useDispatch,useSelector } from 'react-redux'
export interface IAppProps {
}
interface RootSate{
   
   id:number,image:string,title:string,price:number,description:string[],quantity:number

  }
const Cart = (props: IAppProps) => {
  const dispatch=useDispatch()
    const [datas,setData]=React.useState<any[]>([])
console.log(datas)
  const getdata=()=>{
    let data=localStorage.getItem("cart")
    if(data){
      setData(JSON.parse(data))
    }
  }
  
    const increase=(id:number)=>{
            let found=datas.find((item:RootSate)=>item.id===id)
            found.quantity+=1
            setData(datas.filter((item:RootSate)=>item.id !==id))
            setData([...datas,found])
            localStorage.setItem('cart',JSON.stringify(datas))
            getdata()
        
    }
    const decrease=(id:number)=>{
            let found=datas.find((item:RootSate)=>item.id===id)
            if(found.quantity>0){

            found.quantity+=-1
            setData(datas.filter((item:RootSate)=>item.id !==id))
            setData([...datas,found])
            localStorage.setItem('cart',JSON.stringify(datas))
            getdata()
            }
        
    }
    const remove=(id:number)=>{
        const newData=datas.filter((item:RootSate)=>item.id!==id)
        localStorage.setItem('cart',JSON.stringify(newData))
        getdata()
        dispatch(changeCounter(newData.length))

    }
  React.useEffect(() => {
    getdata()
  }, []);
  
  return (
    <div>
       {datas.map((item:RootSate)=>(
<div className={css.container  } style={{"left":"70vh"}}>
      <div className={css.image}>
    <img src={item.image} alt="" />

      </div>
      <div className={css.text}>
        
        <h5 style={{fontSize:"17px",padding:"2px",fontWeight: "400"}}>{item.title}</h5>
        <h5 style={{fontSize:"17px",padding:"2px",fontWeight: "400"}}>Price: ${item.price}</h5>
        <h6 style={{fontSize:"14px",padding:"2px",fontWeight: "200"}}>{item.description.slice(0,80)}...</h6>
        
      <p style={{fontSize:"17px",marginLeft:"10vw"}}>{item.quantity}</p>
      </div>
  <button type="button"  onClick={()=>increase(item.id)} style={{width:"4vw"}} className={css.btnprimary}>+</button>
    <button type="button" onClick={()=>remove(item.id)} style={{width:"7vw",margin:"4px"}} className={css.btnprimary}>Remove</button>
      <button type="button" onClick={()=>decrease(item.id)} style={{width:"4vw"}} className={css.btnprimary}>-</button>
    </div>
  
       ))}
      </div>
  )
}

export default Cart
