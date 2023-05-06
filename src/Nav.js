import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const[show,handleshow]=useState([]);
    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
            handleshow(true);}
        else{ handleshow(false)}
        return ()=>
        window.removeEventListener("scroll");
    })

    },[]);
  return (
    <div className={`Nav ${show && "nav_black"}`}>
    <img className='Nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png' alt='Netflix_logo'/>
    <img className='Nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix_avatar'/>
      
    </div>
  )
}

export default Nav
