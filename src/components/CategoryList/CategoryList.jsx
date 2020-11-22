import React from 'react'
import CateLi from '../CateLi/CateLi';

/**
* @author
* @function CategoryList
**/


const CategoryList = (props) => {

    const cateI = JSON.parse(localStorage.getItem("CI"));
    // console.log(cateI);
  return(
    <>
        {
            cateI.map((cateName,index)=>{
                return <CateLi key={index} cateName={cateName} />
            })
        }
    </>
   )
 }

export default CategoryList