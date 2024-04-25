import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

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
                        <img src="/Images/Logo.png" width={79} height={46} alt="" />
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
                <button className={`${styles.collapseButton}`} onClick={toggleCollapse}>
                    {collapsed ? <HiBars3 />  : <RxCross1 />}
                </button>
            </div>
        </>
    )
}

export default MyNavbar


 {/* <li className={styles.dropdown}>
                        <NavLink to="#" className={styles.dropbtn}>MENU</NavLink>
                        <div className={`${styles.dropdownContent}`}>
                            <NavLink to="/" >HOME</NavLink>
                            <NavLink to="/Schedule" >SCHEDULE OF EVENTS</NavLink>
                            <NavLink to="/Cast" >CAST ATTENDEES</NavLink>
                            <NavLink to="/Tickets" >TICKETS</NavLink>
                            <NavLink to="/Contact" >CONTACT US</NavLink>
                        </div>
                    </li> */}