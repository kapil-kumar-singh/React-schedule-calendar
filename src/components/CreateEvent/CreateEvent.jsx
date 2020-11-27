import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PeopleIcon from '@material-ui/icons/People';
import SubjectIcon from '@material-ui/icons/Subject';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LinkIcon from '@material-ui/icons/Link';
import FormatClearIcon from '@material-ui/icons/FormatClear';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import DropdownListCate from '../DropdownListCate/DropdownListCate';
import DropdownListEmp from '../DropdownListEmp/DropdownListEmp'
import p1 from '../../photos/wp1966777-kung-fu-panda-wallpapers.jpg'



/**
* @author
* @function CreateEvent
**/
let SD, ST, ED, ET, CreateE, Cate, Emp

const CreateEvent = (props) => {
    let allEvents = JSON.parse(localStorage.getItem("AllEvents"));
    let cc = JSON.parse(localStorage.getItem("CC"));

    const [title, setTitle] = useState('');
    const [Location, setLoc] = useState('');
    const [discription, setDis] = useState('');


    
    // console.log(title);
    const Input_title = (e) =>{
        setTitle(e.target.value);
    }
    const Input_locat = (e) =>{
        setLoc(e.target.value);
    }
    const Input_dis = (e) =>{
        setDis(e.target.value);
    }
    const start_date = (e) =>{
        SD = e.target.value;
    }
    // console.log("SD ",SD);
    const start_time = (e) =>{
        ST = e.target.value;
    }

    const end_date = (e) =>{
        ED = e.target.value;
    }
    // console.log('ED',ED);
    const end_time = (e) =>{
        ET = e.target.value;
        // console.log(ET);
    }
    const fun1 = () => {
        const popup = document.getElementById('popup_div');
        const cate_p = document.getElementById('cate_p');
        const emp_p = document.getElementById('emp_p');
        cate_p.innerText = "Select";
        emp_p.innerText = "Select";
        setTitle('');
        popup.style.width = "0px";

    }
    const fun = (e) => {
        const cate_p = document.getElementById('cate_p');
        const emp_p = document.getElementById('emp_p');
        const popup = document.getElementById('popup_div');
        const SDI = document.getElementById('SDI');
        const STI = document.getElementById('STI');
        const EDI = document.getElementById('EDI');
        const ETI = document.getElementById('ETI');
        // console.log("title ", title);
        // console.log("SD ", SD);
        // console.log("ED ", SD);
        // console.log("ST ", ST);

        // console.log("location ", Location);
        // console.log("cate ", Cate);
        // console.log("dis ", discription);

        
        if(SD === undefined || ED === undefined || ST===undefined){
            alert('Please select startDate/EndDate/startTime')
        }else{
            let secTime = ST.slice(0,2)
            let date = new Date()
            let currD = date.getDate();
            let currM = date.getMonth() +1
            let currY = date.getFullYear()
            let secSD = SD.slice(8)
            let secSM = SD.slice(5,7)
            let secSY = SD.slice(0,4)
            let secED = ED.slice(8)
            let secEM = ED.slice(5,7)
            let secEY = ED.slice(0,4)

            if(cate_p.innerText === "Select"){
                alert("Again fill Category");
            }else if(emp_p.innerText === "Select"){
                alert("Again Select Name");
            }else if(SD === undefined || (currY-secSY < 0) || (currM-secSM > 0) || (currM-secSM===0)?(currD-secSD > 0):false ){
                alert("Again Select StarDate which shuold be greater than curr date"); 
            }else if(ST === undefined ){
                alert("Again Select StarTime ");
            }else if(ET === undefined){
                alert("Again Select EndTime");
            }else if(ED === undefined || (currY-secEY < 0) || (currM-secEM > 0) || (currM-secEM===0)?(currD-secED > 0):false ){
                alert("Again Select EndDate which shuold be greater than curr date");
            }else if(title === ""){
                alert("Please Enter Title");
                setTitle('');
            }else if(Location === ""){
                alert("Please Enter Location");
                setLoc('');
            }else if( discription === ""){
                alert("Please Enter discription");
                setDis('');
            }else{
                Cate = cate_p.innerText
                Emp = emp_p.innerText
                CreateE = {title:title, SD:SD, ST:ST, ED:ED, ET:ET, cate:Cate, emp:Emp, location:Location, dis:discription}
                // console.log(CreateE)
                allEvents.push(CreateE)
                // console.log('allEvents :->',allEvents)
                const cateName = JSON.parse(localStorage.getItem("CI"))
                cateName.forEach((n)=>{
                    const arr = allEvents.filter((i)=>{ return (i.cate === n) });
                    const count = arr.length
                    document.getElementById(`${n}`).innerText = count
                })

                localStorage.removeItem("AllEvents");
                localStorage.setItem("AllEvents", JSON.stringify(allEvents))
                
                // localStorage.setItem("Ev", JSON.stringify(CreateE))
                // console.log(localStorage.getItem("Ev"));
                cate_p.innerText = "Select";
                emp_p.innerText = "Select";
                

                // console.log(SD)
                const date = SD.slice(5);
                // console.log(date)

                const day = document.getElementById(`${date}`);
                // console.log(day)

                if(day !== null ){
                    // console.log(cc[Cate]);
                    day.style.background = cc[Cate]
                    day.addEventListener('mouseenter',(e)=>{
                        // console.log('en')
                        const hoverInfo = document.getElementById('hoverInfo');
                        hoverInfo.style.width = '25vw';
                        const h_t = document.getElementById('h_t');
                        const h_emp = document.getElementById('h_emp');
                        const h_dot_icon = document.getElementById('h_dot_icon');
                        const h_cate = document.getElementById('h_cate');
                        const h_sd = document.getElementById('h_sd');
                        const h_et = document.getElementById('h_et');
                        const h_loc = document.getElementById('h_loc');
                        const h_dis = document.getElementById('h_dis');
                        h_t.innerText = title;
                        h_emp.innerText = Emp
                        h_cate.innerText = Cate
                        h_dot_icon.style.color = cc[Cate]
                        h_loc.innerText = Location
                        h_sd.innerText = SD
                        h_et.innerText = ED
                        h_dis.innerText = discription
                    })
                    day.addEventListener('mouseout',(e)=>{
                        // console.log('out')
                        const hoverInfo = document.getElementById('hoverInfo');
                        hoverInfo.style.width = '0px';
                        
                    })

                }

                const gc_day = document.getElementById(`${SD}`);
                // console.log(gc_day);
                
                // console.log(secTime)
                if(gc_day !== null){
                    gc_day.innerHTML = `${secSD}<div class="gc_info_div" style="top: ${8+(1.41*secTime)}vw;" ><div class="gc_color_info" style="background-color: ${cc[Cate]};"></div><div class="gc_info_title_div"><p>${title}</p></div><div class="image_div" style="background-image:url(${p1}); width:35px; height:35px; margin-top: 7px;"></div></div>`
                    // console.log(gc_day.getBoundingClientRect())
                }

                SDI.value =""
                STI.value =""
                EDI.value =""
                ETI.value =""
                setTitle('');
                popup.style.width = "0px";
            }
        }
        
    }
    const cate_fun = () => {
        const cate_drop = document.getElementById('cate_drop');
        cate_drop.style.width = "500px";
    }
    const emp_fun = () => {
        const emp_drop = document.getElementById('emp_drop');
        emp_drop.style.width = "500px";
    }
  return(
    <>
        <div id='close' onClick={fun1}>
            <CloseIcon fontSize="large" />
        </div>
        <input id="input_title" type="text" placeholder="Add Title" required onChange={Input_title} value={title}></input>
        
        <div id='date_time_div'>
            <input id='SDI' type='date' className='input_color' required onChange={start_date} />
            <input id='STI' type='time'className='input_color' required onChange={start_time} />
            <span>To</span>
            <input id='EDI' type='date' className='input_color' required onChange={end_date} />
            <input id='ETI' type='time' className='input_color' required onChange={end_time} />
        </div>
        <div className="al">
            <div className="mr" >
                <VideocamIcon />
            </div>
            <div className="al2 videoCall">
                <NavLink to={'/'} style={{color:"#fff", textDecoration: 'none',}}>Add Google Meet Video Conferencing</NavLink>
            </div>
        </div>
        <div className="al">
            <div className="mr">
                <LocationOnIcon />
            </div>
            <div className="al2">
                <input type="text" className="input_color" id="location" placeholder="Add locaton" onChange={Input_locat} value={Location} />
            </div>
        </div>
        <div className="al">
            <div className="mr">
                <PlaylistAddIcon />
            </div>
            <div className="al2 fl" onClick={cate_fun}>
                <p id="cate_p" className="select">Select</p>
                <ArrowDropDownIcon  style={{marginRight:"20px", marginTop:"10px"}} />
            </div>
            <div id='cate_drop' className='drop' style={{top:"350px", left:"90px"}}>
                <DropdownListCate />
            </div>
        </div>
        <div className="al">
            <div className="mr">
                <PeopleIcon />
            </div>
            <div className="al2 fl" onClick={emp_fun}>
                <p id="emp_p" className="select">Select</p>
                <ArrowDropDownIcon style={{marginRight:"20px", marginTop:"10px"}} />
            </div>
            <div id='emp_drop' className='drop' style={{top:"410px", left:"90px"}}>
                <DropdownListEmp />
            </div>
        </div>
        <div className="al" style={{height:"auto" , marginTop:"20px"}}>
            <div className="mr">
                <SubjectIcon />
            </div>
            <div className="al2 mr20" style={{height:"200px", backgroundColor:"#f1f3f4" }}>
                <div id='textArea_icons' >
                    <AttachFileIcon />
                    <FormatBoldIcon />
                    <FormatItalicIcon />
                    <FormatUnderlinedIcon />
                    <FormatListNumberedIcon />
                    <FormatListBulletedIcon />
                    <LinkIcon />
                    <FormatClearIcon />
                </div>
                <div>
                    <textarea id='textarea' rows="10" cols="60" placeholder='Add description' onChange={Input_dis} value={discription}></textarea>
                </div>
            </div>
            <div id='save_button' style={{display:"inline-block", marginLeft:"50px" }} onClick={fun}>
                <Button variant="contained" color="primary">Confirm</Button>
            </div>
        </div>
        
    </>
   )
 }
export default CreateEvent