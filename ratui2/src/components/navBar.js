import { useState } from "react"
import React from "react"


const SideNav = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };

    return (
    <>
        <button className={isOpen ? "toggle-btn-close" : "toggle-btn-open"}onClick={toggleNav}>
            {isOpen ? 'Close' : 'Open'} Menu
        </button>
      <div className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
    </>
    
    )
}

export default SideNav;