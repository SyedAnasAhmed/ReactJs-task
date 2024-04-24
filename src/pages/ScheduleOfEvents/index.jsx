import React from 'react'
import MyNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer';
import styles from './styles.module.css'
import ScheduleCard from '../../Components/ScheduleCard';

function Schedule() {
  return (
    <>

      <div className={styles.navbarContainer}>
        <MyNavbar />
      </div>


      <div className={styles.bannersec} >
        <img src="/public/Images/schduleBanner.png" className={styles.bannerimg} alt="" />
      </div>


      <div className={styles.banner2} >
        <img src="/public/Images/schdulehero2.png" className={styles.banner2img} alt="" />

          <div className={styles.banner2head}>
            <h1>MIAMI VICE 40TH ANNIVERSARY REUNION</h1>
            <p>(More events, experiences, VIP Perks & opportunities will be added as the event date approaches so check back regularly for more updates!)</p>
          </div>

          <div className={styles.cardholder}>
            <ScheduleCard 
            src={"/public/Images/scheduleCard1.png"} 
            heading={"OPENINIG NIGHT VIP RECEPTION AT THE MIAMI VICE MUSEUM"} 
            para={"VIP Ticket holder & Invitation Only Opening Night Ceremony with Live Musical Performances, Cocktails & hors d'oeuvres catered by The Avalon Hotel's Five Star Restaurant: A Fish Called Avalon."}
             />

             <ScheduleCard 
            src={"/public/Images/scheduleCard4.png"} 
            heading={"DAY ONE"} 
            para={"Two Seatings Ticketed Cast & Crew Dinner Experience at the Avalon Hotel's Five Star Restaurant: A Fish Called Avalon."}
            para2={"The Miami Vice Museum Opens at 11am until 5pm."}
             />

             <ScheduleCard 
            src={"/public/Images/scheduleCard2.png"} 
            heading={"DAY TWO"} 
            para={"Two Seatings Ticketed Cast & Crew Dinner Experience at the Avalon Hotel's Five Star Restaurant: A Fish Called Avalon."}
            para2={"The Miami Vice Museum Opens at 11am until 5pm."}
             />

             <ScheduleCard 
            src={"/public/Images/scheduleCard3.png"} 
            heading={"DAY THREE"} 
            para={"Two Seatings Ticketed Cast & Crew Dinner Experience at the Avalon Hotel's Five Star Restaurant: A Fish Called Avalon."}
            para2={"The Miami Vice Museum Opens at 11am until 5pm."}
            />
            
          </div>
      
      </div>

      

      <Footer />

    </>
  )
}

export default Schedule
