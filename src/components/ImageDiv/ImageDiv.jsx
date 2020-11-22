import React from 'react'

/**
* @author
* @function ImageDiv
**/

const ImageDiv = (props) => {
  return(
    <div className="image_div" style={{backgroundImage:`url(${props.image_url})`, width:`${props.d}`, height:`${props.d}`}}></div>
   )

 }

export default ImageDiv