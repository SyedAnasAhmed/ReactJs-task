import React from 'react';
import styles from "./style.module.css";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className={styles.footersections}>
            <div className={styles.footerimages}>
                <img src="/Images/footer2.png" className={styles.coloroverlayimage} alt="" />
                <img src="/Images/Footerimg.png" className={styles.sceneryimage} alt="" />
                <img src="/Images/footer3.png" className={styles.coloroverlayimage2} alt="" />

                <div className={styles.logo}>
                    <img src="/Images/logolarge.png" width={252} height={152} alt="" />
                </div>
                <div className={styles.footerLinks}>
                    <ul className={styles.mynavlinks}>
                        <li className={styles.homepagelink}>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Schedule">SCHEDULE OF EVENTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cast">CAST ATTENDEES</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tickets">TICKETS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
            <div className={styles.footerPolice}>
                <img src="/Images/police1.png" alt="" />
                <p>This event is sanctioned by and operating in <br /> conjunction with the <br /> Miami Dade Police Department</p>
                <img src="/Images/police2.png" alt="" />
            </div>
            </div>
        </div>
    );
}

export default Footer;
