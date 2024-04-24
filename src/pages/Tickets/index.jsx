import React from 'react'
import MyNavbar from '../../Components/Navbar/Navbar'
import Disclaimer from '../../Components/Disclaimer';
import Footer from '../../Components/Footer';
import styles from "./styles.module.css"

function Tickets() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <MyNavbar />
      </div>

      <div className={styles.hero1}>
        <img src="/public/Images/ticketshero1bg.png" className={styles.hero1img} />
      </div >

      <div  className={styles.hero2}>
        <div  className={styles.herohead}>
          <h1>MIAMI VICE 40TH ANNIVERSARY REUNION</h1>
        </div>
        <div className={styles.cardsec}>
          <img src="/public/Images/ticketcardsbg.png" alt="" />
        </div>
      </div>

      <Disclaimer />

      <Footer />


    </>
  )
}

export default Tickets
