import React from 'react'
import ImageDiv from '../ImageDiv/ImageDiv';
import p1 from '../../photos/wp1966777-kung-fu-panda-wallpapers.jpg'

/**
* @author
* @function User
**/

const User = (props) => {
  return(
    <div id='user'>
        <p>Frank Guerrero</p>
        <ImageDiv image_url={p1} />
    </div>
   )

 }

export default User