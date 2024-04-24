import React from 'react'
import styles from './styles.module.css'

function BuyTicketCard(props) {
    return (
        <>
            <div className={styles.cardwrapper}>
                <div className={styles.cardHeadingandimg}>
                    <h1>{props.cardheading}</h1>
                    <img src={props.dateimgsrc} alt="" />
                </div>

                <div className={styles.cardpara}>
                    <p>{props.details}</p>
                </div>

                <div className={styles.cardbuyopt}>
                    <div className={styles.qtty}>
                        <p>Available Tickets: 40</p>
                    </div>
                    <div className={styles.counterandprice}>
                        <p>Quantity:</p>
                        <div className={styles.counter}>
                            <img src="/public/Images/previous.png" alt="" />
                            <p>0</p>
                            <img src="/public/Images/next.png" alt="" />
                        </div>
                        <div className={styles.pricediv}>
                            <p>Price</p>
                            <p className={styles.price}>${props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyTicketCard
