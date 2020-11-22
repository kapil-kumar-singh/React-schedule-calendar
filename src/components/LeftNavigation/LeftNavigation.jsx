import React from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AppsIcon from '@material-ui/icons/Apps';
import SmsIcon from '@material-ui/icons/Sms';
import StorageIcon from '@material-ui/icons/Storage';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import CollectionsIcon from '@material-ui/icons/Collections';

import { NavLink } from 'react-router-dom';

/**
* @author
* @function LeftNavigation
**/

const LeftNavigation = (props) => {
    // const icons = document.getElementsByClassName("icons");
    const fun = () =>{}


  return(
      <>
        <div id='left_navigation'>
            <div className='icon_con' id="logo" style={{marginTop:"40px"}}>
                <WhatshotIcon />
            </div>
            <div className='icon_con' id="mid_icon_con">
                <div className='icons' onClick={fun}><NavLink to={`/`} style={{color: ' #9ba1a8', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><CalendarTodayIcon /></NavLink></div>
                <div className='icons'><NavLink to={`/something`} style={{color:"#9ba1a8", textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><AppsIcon /></NavLink></div>
                <div className='icons'><NavLink to={`/something`} style={{color:"#9ba1a8", textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><ControlCameraIcon /></NavLink></div>
                <div className='icons'><NavLink to={`/something`} style={{color:"#9ba1a8", textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><SmsIcon /></NavLink></div>
                <div className='icons'><NavLink to={`/something`} style={{color:"#9ba1a8", textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><StorageIcon /></NavLink></div>
                <div className='icons'><NavLink to={`/something`} style={{color:"#9ba1a8", textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}><CollectionsIcon /></NavLink></div>
            </div>
            <div className='icon_con icons' style={{marginBottom:"20px", marginLeft:"20px" ,color:"#d7e1ef"}}>
                <SettingsIcon />

            </div>

        </div>      
      </>
   )
 }

export default LeftNavigation