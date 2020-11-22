import React from 'react'

/**
* @author
* @function Lists
**/

const Lists = (props) => {
  const fun = (e) =>{
    // console.log(e)
    if(e.target.localName === 'li'){
      if(e.target.lastChild.localName === "span"){
        const cate_p = document.getElementById('cate_p');
        const CateName = e.target.childNodes[1].innerText
        cate_p.innerText = CateName
        // console.log(e.target.childNodes[1].innerText)
        // console.log(CateName);
        const cate_drop = document.getElementById('cate_drop');
        cate_drop.style.width = "0px";
      }else{
        const emp_p = document.getElementById('emp_p');
        const EmpName = e.target.childNodes[1].innerText
        emp_p.innerText = EmpName
        // emp_p.innerText = e.target.childNodes[1].innerText
        // console.log(e.target.childNodes[1].innerText)
        // console.log(EmpName);
        const emp_drop = document.getElementById('emp_drop');
        emp_drop.style.width = "0px";
      }
    }else if(e.target.localName === 'span'){
      // console.log(e)
      const cate_p = document.getElementById('cate_p');
      const CateName = e.target.innerText
      cate_p.innerText = CateName
      // console.log(CateName);
      const cate_drop = document.getElementById('cate_drop');
      cate_drop.style.width = "0px";

    }else if(e.target.localName === 'p'){
      const emp_p = document.getElementById('emp_p');
      const EmpName = e.target.innerText
      emp_p.innerText = EmpName
      // console.log(EmpName);
      const emp_drop = document.getElementById('emp_drop');
      emp_drop.style.width = "0px";

    }else{
      // no
    }
  
  }
  return(
    <>
      <li style={{color:`${props.color}`}} onClick={fun}>
        {props.children}
      </li>
    </>
   )

 }

export default Lists