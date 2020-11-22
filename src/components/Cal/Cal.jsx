import React, { useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/**
* @author
* @function Cal
**/

const Cal = (props) => {

  useEffect(()=>{
    const date = new Date();

    // const task = JSON.parse(localStorage.getItem('AllEvents'));
    // console.log(task);

    const renderCalendar = () => {
      date.setDate(1);
  
      const monthDays = document.querySelector(".days");
  
      const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
  
      const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
  
      const firstDayIndex = date.getDay();
  
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
  
      const nextDays = 7 - lastDayIndex - 1;
  
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  
      document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  
      document.querySelector(".date p").innerHTML = new Date().toDateString();
  
      let days = "";
  
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
      }
  
      for (let i = 1; i <= lastDay; i++) {
        let m = date.getMonth() + 1;
        // console.log(m)
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div id="${m}-${i}" class="today">${i}</div>`;
        } else {
          days += `<div id="${m}-${i}" class="d">${i}</div>`;
        }
      }
  
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
      }
    };
  
    document.querySelector(".prev").addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
    renderCalendar();




    let days = document.querySelectorAll('.d');
    // console.log(days);
    for(let i=0; i<days.length;i++){
      days[i].addEventListener('click',(e)=>{
        const popup = document.getElementById('popup_div');
        // console.log(popup);
        popup.style.width = "1364px";
        localStorage.removeItem("Ev");
      })
    }
  })

  

  return(
    <div className='calendar'>
        <div className="month">
          <div className='arrow prev'> <ArrowBackIosIcon style={{fontSize:"x-small"}} /> </div>
          <div className='date'>
            <h1></h1>
            <p></p>
          </div>
          <div className='arrow next'> <ArrowForwardIosIcon style={{fontSize:"x-small"}} /> </div>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className='days'>
          
        </div>
    </div>
   )

 }

export default Cal