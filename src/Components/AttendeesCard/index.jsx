import React from 'react'
import styles from './styles.module.css'

function AttendeesCard( props ) {
  return (
    <>
        <div className={styles.cardmain}>
            <div className={styles.cardimg}>
                <img src={props.img} width={365} height={442}  alt="" />
            </div>
            <div className={styles.name}>
                <h3>{props.name}</h3>
            </div>
            <div className={styles.title}>
                <p>{props.title}</p>
            </div>
        </div> 
    </>
  )
}

export default AttendeesCard
