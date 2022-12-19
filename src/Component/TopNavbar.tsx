import {Link} from 'react-router-dom'
import css from './css/TopNavbar.module.css'
import { useDispatch,useSelector } from 'react-redux'
interface counter{
    id:number,
    counter:{
      value:number
    },
}
const TopNavbar = () => {

let length=useSelector((state:counter)=>state.counter.value)

console.log(length)

return (
  <>
      <div className={css.container} >
        <div className={css.left}>
            <div className={css.logo}>
        <i className="ri-truck-fill"></i>
            </div>
            <div className={css.header}>
                Apna Store
            </div>
            <div className={css.search}>
                <input className={css.searchinput} type="text" placeholder="Search for Products " >
                </input>
            </div>

        </div>
        <Link to="/cart">
        <div className={css.right}>
            <sup style={{fontSize:"16px"}}>{length}</sup>
          
            <i  className="ri-shopping-cart-fill"></i>
        </div>
        </Link>
      </div>
    </>
  )
}

export default TopNavbar
