import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'


function Countdown() {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMins, setTimerMins] = useState("00");
    const [timerSec, setTimerSec] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('December 04, 2024 00:00:00').getTime();
    
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            let distance = countDownDate - now;
    
            if(distance <= 0) {
                clearInterval(interval.current);
            } else {
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((distance % (1000 * 60)) / 1000);
    
                setTimerDays(days.toString().padStart(2, '0'));
                setTimerHours(hours.toString().padStart(2, '0'));
                setTimerMins(mins.toString().padStart(2, '0'));
                setTimerSec(secs.toString().padStart(2, '0'));  
            }
    
        }, 1000);
    }
    

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <section className={styles.timercontainer}>
            <section className={styles.timer}>
                <div>
                    <section>
                        <h3>{timerDays}</h3>
                        <p><small>Days</small></p>
                    </section>
                    <span>|</span>
                    <section>
                        <h3>{timerHours}</h3>
                        <p><small>Hours</small></p>
                    </section>
                    <span>|</span>
                    <section>
                        <h3>{timerMins}</h3>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>|</span>
                    <section>
                        <h3>{timerSec}</h3>
                        <p><small>Seconds</small></p>
                    </section>

                </div>
            </section>
        </section>
    )
}

export default Countdown
