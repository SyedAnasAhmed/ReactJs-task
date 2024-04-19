import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import React from 'react';

function MyNavbar() {
    return (
        <>
            <div className={`${styles.customnav}`}>
                <ul className={`${styles.mynavlinks}`}>
                    <li>
                        <img src="/public/Images/Logo.png" width={79} height={46} alt="" />
                    </li>
                    <li className={`${styles.homepagelink}`}>
                        <NavLink to="/" >HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Schedule" >SCHEDULE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tickets" >TICKETS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" >CONTACT US</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cast" >CAST</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MyNavbar

