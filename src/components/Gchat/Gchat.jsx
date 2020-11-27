import React, { useEffect } from 'react'

/**
* @author
* @function Gchat
**/

const Gchat = (props) => {
    useEffect(()=>{
        // console.log('ghhhhhhhhhhhhhh');
        const date = new Date();
        const renderCalendar = () => {
            // date.setDate(1);

            let cd = date.getDate()
            const lastDay = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            ).getDate();

            let days ='';
            let m = date.getMonth() + 1;
            let y = date.getFullYear();
            const totaldaysOfcurrMo = (lastDay-cd+1)
            if(totaldaysOfcurrMo >= 15){
                for(let i=1; i<=15;i++){
                    days += `<div class="gc_day" id="${y}-${m}-${cd}">${cd}</div>`;
                    cd += 1
                }
            }else{
                for(let i=1; i <= totaldaysOfcurrMo;i++){
                    days += `<div class="gc_day" id="${y}-${m}-${cd}">${cd}</div>`;
                    cd += 1
                }
                if(m === 12){
                    m =1
                }else{
                    m+=1
                }
                for(let i=1; i<=(15-totaldaysOfcurrMo);i++){
                    days += `<div class="gc_day" id="${y}-${m}-${i}">${i}</div>`;
                }
            }
            const gchat_cont = document.getElementById('gchat_cont');
            gchat_cont.innerHTML = days
        }
        
        renderCalendar();

    })
  return(
    <>
        <div id='gchat_cont'>
        </div>
    </>
   )

 }

export default Gchat