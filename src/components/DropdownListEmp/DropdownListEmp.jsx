import React from 'react'
import ImageDiv from '../ImageDiv/ImageDiv';
import Lists from '../Lists/Lists'


import p1 from '../../photos/wp1966777-kung-fu-panda-wallpapers.jpg'


/**
* @author
* @function DropdownListEmp
**/

const DropdownListEmp = (props) => {
  return(
    <ul id="ul2">
        <Lists>
            <span><ImageDiv image_url={p1} d="30px" /></span>
            <p>Kapil</p>
        </Lists>
        <Lists>
            <span><ImageDiv image_url={p1} d="30px" /></span>
            <p>Shivam</p>
        </Lists>
        <Lists>
            <span><ImageDiv image_url={p1} d="30px" /></span>
            <p>Ashok</p>
        </Lists>
        <Lists>
            <span><ImageDiv image_url={p1} d="30px" /></span>
            <p>Sumit</p>
        </Lists>
    </ul>
   )

 }

export default DropdownListEmp