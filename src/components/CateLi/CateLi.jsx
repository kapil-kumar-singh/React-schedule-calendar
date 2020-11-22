import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TaskNo from '../TaskNo/TaskNo';


/**
* @author
* @function CateLi
**/

const CateLi = (props) => {
    const CC = JSON.parse(localStorage.getItem('CC'));
    const name = props.cateName
    // console.log(CC[name])
  return(
    <div className="cl"> 
        <div className="cete_list_icon" style={{color:`${CC[name]}`}} >
            <FiberManualRecordIcon />
        </div>
        <div className='cn_ct'>
            <p className="cn">
                {name} 
            </p>
            <TaskNo cateName={name} />  
        </div>
        <div className='horiIcon'>
            <MoreHorizIcon />
        </div>
    </div>
   )

 }

export default CateLi