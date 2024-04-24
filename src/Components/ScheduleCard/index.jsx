import React from 'react'
import styles from './styles.module.css'

function ScheduleCard(props) {
  return (
    <div className={styles.cardmain}>
            <div className={styles.cardimg}>
                <img src={props.src} alt="" />
            </div>
            <div className={styles.carddetails}>
                <h1>{props.heading}</h1>
                <p className={styles.para2}>{props.para2}</p>
                <p className={styles.para1}>{props.para}</p>
                <button className={styles.button}>GET TICKETS NOW</button>
            </div> 
    </div>
  )
}

export default ScheduleCard
