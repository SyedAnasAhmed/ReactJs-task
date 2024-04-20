import React from 'react'
import styles from "./styles.module.css";

function Disclaimer() {
    return (

        <>
            <div className={`${styles.disclaimerHolder}`}>
                <div className={`${styles.disclaimerHeading}`} >
                    <h1>DISCLAIMER</h1>
                </div>
                <div className={`${styles.disclaimertextholder}`} >
                    <div className={`${styles.disclaimertext}`}>
                        <p>We are NOT affiliated with ViceEvents Inc or ViceEvent.com. The star attendees you saw posted there are no longer  affiliated with them as well and will be attending our ticketed event here. Thank you for sticking with us and for your understanding in helping us make this the most  successful television reunion event in History!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Disclaimer
