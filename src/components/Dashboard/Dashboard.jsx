import React from 'react'
import Layout from '../Layout/Layout'
import Title from '../Title/Title'
import User from '../User/User'
import AddButton from '../AddButton/AddButton'
import CreateEvent from '../CreateEvent/CreateEvent'
import CategoryList from '../CategoryList/CategoryList'
import Cal from '../Cal/Cal'
import Gchat from '../Gchat/Gchat'
import HoverInfo from '../HoverInfo/HoverInfo'

/**
* @author
* @function Dashboard
**/

// let Is_popup = false;

const Dashboard = (props) => {
  const fun = () => {
    const popup = document.getElementById('popup_div');
    // console.log(popup);
    popup.style.width = "1364px";
    localStorage.removeItem("Ev");
  }

  return(
    <>
        <Layout>
          <div id='hoverInfo'>
            <HoverInfo />
          </div>
          <div id='popup_div'>
              <CreateEvent />
          </div>
          <div id='header'>
              <Title />
              <User />
          </div>
          <div id='comtaint_div' >
            <div id='left'>
              <div id="cal_div" className='calen_list'>
                <div className='in'>
                  <Cal />
                </div>
              </div>
              <div id="button_div" className='calen_list' onClick={fun}>
                <AddButton />
              </div>
              <div className='calen_list' style={{height:"55%"}}>
                <CategoryList />
              </div>
            </div>
            <div id='right'>
              <Gchat />
            </div>
          </div>
        </Layout>
    </>
   )

 }

export default Dashboard