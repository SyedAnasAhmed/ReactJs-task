import React from 'react'
import styles from "./style.module.css"

function Footer() {
    return (
        <>
            <div className={`${styles.footersections}`}>
                {/* <div className={`${styles.footerimagesholder}`}> */}
                    <div className={`${styles.footerimages}`}>
                        <img src="/public/Images/footer2.png" className={`${styles.coloroverlayimage}`} alt="" />
                        <img src="/public/Images/Footerimg.png"  className={`${styles.sceneryimage}`}  alt="" />
                        <img src="/public/Images/footer3.png" className={`${styles.coloroverlayimage2}`} alt="" />
                    </div>
                    <div className={`${styles.logo}`}>

                    </div>
                    <div className={`${styles.footerLinks}`}>

                    </div>
                    <div className={`${styles.footerPolice}`}>

                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Footer
