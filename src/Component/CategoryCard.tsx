import React from 'react'


const CategoryCard = () => {
  return (
    <div className="circle" style={{
        height:"130px",
        width:"100px",
        // backgroundColor:"red"
    }}>
        <div className="circle" style={{
        height:"100px",
        width:"100px",
        borderRadius:"50%",
        backgroundColor:"pink"
    }}></div>
      <h4 style={{fontSize:"17px",
      textAlign:"center",}}>All product</h4>
    </div>
  )
}

export default CategoryCard
