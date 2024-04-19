import React from 'react'
import styles from './styles.module.css';

function HomeCard() {
    return (
        <>
            <div className={`${styles.cardmaindiv}`}>
                <div className={`${styles.cardtext}`}>
                    <p>Ocean Drive was a deteriorating stretch of hotels and co-ops used primarily as retirement homes for the elderly. </p>
                    <p>    Crime was rampant, cocaine cowboys were shooting it out in the streets, and the drug war was raging. </p>
                    <p>    One television show changed everything and made South Beach, Miami Dade County and South Florida the ultimate paradise and travel destination that it is today for the entire world. That show was called…</p>
                </div>
                <div className={`${styles.cardimgWrapper}`}>
                    <img src={"/public/Images/homecard1.png"} className={`${styles.cardimg}`} width={588} height={443} alt="" />
                </div>
            </div>
        </>
    )
}
export default HomeCard
