import React from 'react'
import styles from './styles.module.css';

function HomeCard(props) {
    return (
        <>
            <div className={`${styles.cardmaindiv}`}>
                <div className={`${styles.cardtext}`}>
                    <p>{props.para1}</p>
                    <p>{props.para2}</p>
                    <p>{props.para3}</p>
                </div>
                <div className={`${styles.cardimgWrapper}`}>
                    <img src={props.src} className={`${styles.cardimg}`} width={588} height={443} alt="" />
                </div>
                <div className={`${styles.cardimgBg}`}>
                </div>
            </div>
        </>
    )
}
export default HomeCard
