import React from 'react'
import MyNavbar from '../../Components/Navbar/Navbar'
import Disclaimer from '../../Components/Disclaimer';
import Footer from '../../Components/Footer';
import styles from "./styles.module.css"
import BuyTicketCard from '../../Components/BuyTicketsCard';

function Tickets() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <MyNavbar />
      </div>

      <div className={styles.hero1}>
        <img src="/public/Images/ticketshero1bg.png" className={styles.hero1img} />
      </div >

      <div className={styles.hero2}>
        <div className={styles.herohead}>
          <h1>MIAMI VICE 40TH ANNIVERSARY REUNION</h1>
        </div>

        <div className={styles.cardsec}>

          <div className={styles.cardholder}>
            <BuyTicketCard
              cardheading={"Series Regular"}
              dateimgsrc={"/public/Images/12-15sep.png"}
              details={"Two VIP admission tickets to ALL events (all FOUR days). $500 Value • Two Limited Edition 40th Anniversary Reunion t-shirts. • 10% off Tickets to a dinner and or brunch with cast members, guest stars, and crew of Miami Vice at the Avalon Hotels 5 Star Restauraunt: A Fish Called Avalon with VIP Seating. • Special mention/special thanks listed on our website, social media and on the Cast dinner program. • VIP Free Admission invitation to the Miami Vice Museum Popup Exhibit opening night reception: Thursday September 12, 2024. • Professional Photo taken with A Featured Cast Member and more to be announced!"}
              price={"600"}
            />

            <BuyTicketCard
              cardheading={"Recurring Character"}
              dateimgsrc={"/public/Images/12-15sep.png"}
              details={"One VIP admission ticket to ALL events (all FOUR days). • One Limited Edition 40th Anniversary Reunion t-shirt. • 10% off Tickets to a dinner and or brunch with cast members, guest stars, and crew of Miami Vice at the Avalon Hotels 5 Star Restaurant: A Fish Called Avalon with VIP Seating. • Special mention/special thanks listed on our website, social media and on the Cast dinner program. • VIP Free Admission to the Miami Vice Museum Popup Exhibit opening night reception. • Professional Photo taken with A Featured Cast Member and more to be announced!"}
              price={"400"}
            />


            <BuyTicketCard
              cardheading={"Guest Star"}
              dateimgsrc={"/public/Images/13-15sep.png"}
              details={"One general admission ticket to ALL events (THREE days). $200 Value • 10% off Tickets to a dinner and or brunch with the cast members, guest stars, and crew of Miami Vice at the Avalon Hotels 5 Star Restaurant: A Fish Called Avalon • 1 Limited Edition 40th Anniversary Celebration t-shirt."}
              price={"300"}
            />

            <BuyTicketCard
            className={styles.lastcard}
              cardheading={"Series Extra"}
              dateimgsrc={"/public/Images/13-15sep.png"}
              details={"Individual three-day admission to the main exhibit events • Free event gift (TBA)."}
              price={"200"}
            />

            <div className={styles.totaldiv}>
                <p>Total</p>
                <p className={styles.price}>$0</p>
            </div>

            
          </div>

        </div>



      </div>

      <Disclaimer />

      <Footer />


    </>
  )
}

export default Tickets
