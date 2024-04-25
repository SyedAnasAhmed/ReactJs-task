import React, { useState } from 'react'
import styles from './styles.module.css'

function BuyTicketCard(props) {
    const [prevCount, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };



    const decrement = () => {
        if(prevCount > 0){
            setCount(prevCount => prevCount - 1);
        }
        else{
            setCount(0)
        }
    };


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
                            <img src="/Images/previous.png" alt="" onClick={decrement} />
                            <p>{prevCount}</p>
                            <img src="/Images/next.png" alt="" onClick={increment} />
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
