import React from 'react'
import TitleIcon from '@material-ui/icons/Title';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ImageDiv from '../ImageDiv/ImageDiv'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SubjectIcon from '@material-ui/icons/Subject';

import p1 from '../../photos/wp1966777-kung-fu-panda-wallpapers.jpg'


/**
* @author
* @function HoverInfo
**/

const HoverInfo = (props) => {
  return(
      <>
        <div id='h_left'>
            <div className='h_icons'> <TitleIcon /> </div>
            <div className='h_icons'> <ImageDiv image_url={p1} /> </div>
            <div className='h_icons'> <PlaylistAddIcon /> </div>
            <div className='h_icons'> <AccessTimeIcon /> </div>
            <div className='h_icons'> <LocationOnIcon /> </div>
            <div className='h_icons'> <SubjectIcon /> </div>
        </div>
        <div id="h_right">
            <div className="h_info"><p id='h_t'></p></div>
            <div className="h_info"><p id='h_emp'></p></div>
            <div className="h_info"><span id="h_dot_icon"> <FiberManualRecordIcon /> </span><p id='h_cate'> </p></div>
            <div className="h_info" style={{display:"flex"}}><p id='h_sd' style={{marginRight:"10px"}}>21-10-2020</p>to<p id='h_et' style={{marginLeft:"10px"}}>23-10-2020</p></div>
            <div className="h_info"><p id='h_loc'></p></div>
            <div className="h_info"><p id='h_dis'>This is discription</p></div>
        </div>

      </>
   )

 }

export default HoverInfo