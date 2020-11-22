import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Lists from '../Lists/Lists'

/**
* @author
* @function DropdownListCate
**/

const DropdownListCate = (props) => {
  return(
    <ul id="ul">
        <Lists color="red" >
            <span><FiberManualRecordIcon /></span>
            <span>Flooring</span>
        </Lists>
        <Lists color="green">
            <span><FiberManualRecordIcon /></span>
            <span>Paint</span>
        </Lists>
        <Lists color="brown">
            <span><FiberManualRecordIcon /></span>
            <span>Brickwork</span>
        </Lists>
        <Lists color="blue">
            <span><FiberManualRecordIcon /></span>
            <span>Electrical</span>
        </Lists>
        <Lists color="Purple">
            <span><FiberManualRecordIcon /></span>
            <span>Plumbing</span>
        </Lists>
    </ul>
   )

 }

export default DropdownListCate