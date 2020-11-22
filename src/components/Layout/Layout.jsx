import React from 'react'
import LeftNavigation from '../LeftNavigation/LeftNavigation'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <LeftNavigation />
        <div id='main_div'>
            {props.children}
        </div>

    </>
   )

 }

export default Layout