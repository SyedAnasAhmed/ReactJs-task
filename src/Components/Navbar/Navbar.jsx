import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";



function MyNavbar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <div className={`${styles.customnav} `}>
                <ul className={`${styles.mynavlinks} `}>
                    <ul className={styles.logoholder}>
                        <img src="/public/Images/Logo.png"  width={79} height={46} alt="" />
                    </ul>
                    <li className={`${styles.homepagelink}`}>
                        <NavLink to="/" >HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Schedule" >SCHEDULE OF EVENTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cast" >CAST ATTENDEES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tickets" >TICKETS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" >CONTACT US</NavLink>
                    </li>
                </ul>
                {/* <button className={`${styles.collapseButton}`} onClick={toggleCollapse}>
                    {collapsed ? <HiBars3 />  : 'Collapse'}
                </button> */}
            </div>
        </>
    )
}

export default MyNavbar
