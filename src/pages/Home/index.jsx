import React from 'react';
import styles from './styles.module.css';
import HomeCard from '../../Components/ImgTxtCard';
import AttendeesCard from '../../Components/AttendeesCard';
import Disclaimer from '../../Components/Disclaimer';
import Footer from '../../Components/Footer';
import MyNavbar from '../../Components/Navbar/Navbar';
import Countdown from '../../Components/CountdownTimer';



function Home() {
  return (
    <>


      <div className={styles.backgroundContainer}>
        <img src={"/Images/hero1.png"} alt="Background" className={styles.backgroundImage} />
        <img src={"/Images/hero1DaysCounter.png"} alt="" className={styles.anotherImage} />

        <div  className={styles.textholder}>
          <div className={styles.textOverlay}>MIAMI VICE 40th ANNIVERSARY</div>
          <div className={styles.textOverlay2}>REUNION OPENING NIGHT</div>
        </div>

        <div className={styles.timer}>
        <Countdown/>
        </div>

        <div className={styles.navbarContainer}>
          <MyNavbar />
        </div>
      </div>


      <div className={styles.hero2}>
        <img src={"/Images/Hero2img.png"} width={1180} height={573} alt="" />
        <p>Promotional Footage for the Miami Vice 40th Anniversary Reunion is Courtesy of Derek <br />
          Hedlund, Rick Bravo, The Miami Vice Preservation Society & Universal Studios LLC.</p>
      </div>


      <div className={styles.hero3}>
        <img src={"/Images/hero3bg.png"} className={styles.herobgimg} height={989} alt="" />
        <div>
          <h1 className={styles.hero3textoverlay}>1980S SOUTH BEACH</h1>
        </div>
        <div className={styles.cardholder} >
          <HomeCard para1="Ocean Drive was a deteriorating stretch of hotels and co-ops used primarily as retirement homes for the elderly. 
            " para2="Crime was rampant, cocaine cowboys were shooting it out in the streets, and the drug war was raging.
            " para3="One television show changed everything and made South Beach, Miami Dade County and South Florida the ultimate paradise and travel destination that it is today for the entire world. That show was called…"
            src="/Images/homecard1.png" />
        </div>
        <div className={styles.button}>
          <button>GET TICKETS NOW</button>
        </div>
      </div>


      <div className={styles.hero4}>
        <div className={styles.hero4head}>
          <h1>NEWEST CAST ATTENDEES</h1>
          <p>Be sure to check back on our homepage & social medias for more attending Miami Vice <br /> Alumni announcements!</p>
        </div>

        <div className={styles.cardsection}>
          <AttendeesCard img="/Images/attendee1.png" name="SAUNDRA  SANTIAGO" title="DET. GINA CALABRESE" />
          <AttendeesCard img="/Images/attendee2.png" name="MICHAEL  MADSEN" title="SALY ALVARADO" />
          <AttendeesCard img="/Images/attendee3.png" name="BRUCE MCGILL" title="DET. HANK WELDON RET." />
        </div>

        <div className={styles.txtbtn}>
          <p>To see all Confirmed Attending Miami Vice Alumni</p>
          <button className={styles.button2}>View More</button>

        </div>
      </div>

      {/* <div className={styles.hero5}>
          <img src="/Images/hero5bg.png" alt="" height={2221} />

          <div className={styles.hero5head}>
            <h1>MIAMI VICE</h1>
            <p>If Miami hasn’t got it they havent invented it yet!</p>
          </div>

          <div className={styles.cardsdiv}>
              <HomeCard src={"/Images/hero5card1.png"} className={styles.card1} para1={"SEPTEMBER 12-15 2024: Travel back in time 40 years ago to the big 80s the greatest era in American History and literally relive the most influential television show in history! "}
                  para2={"Spearheaded by the world’s biggest Miami Vice fan: Derek Hedlund & original Miami Vice crew member Rick Bravo who was crucial to the success of the show from the very beginning they have come together to put on a REAL REUNION and return the original cast and guest stars whose careers began on Miami Vice back to South Beach for one final huge sendoff into the sunset the show deserves. "} />
            
          </div>
          
          <div className={styles.btndiv}>
              <button>GET TICKETS NOW</button>
          </div>
      </div> */}


      <div className={styles.hero6}>
        <img src="/Images/hero6overlayimg.png" className={styles.hero6mainimg} alt="" />
        <div className={styles.hero6heading}>
          <h1>PROCEEDS FROM THE MIAMI VICE REUNION WILL BENEFIT THE POLICE OFFICER ASSISTANT TRUST (POAT)</h1>
        </div>

        <div className={styles.hero6anniversary}>
          <img src="/Images/anniversarylogo.png" alt="" />
          <p>The 40th Anniversary Reunion is a nonprofit event to benefit a great cause: the Police Officer Assistance Trust for the families of Fallen Miami Dade Police Officers. In the past the show & cast often did many charitable and promotional events for Miami Police Officers and the city and we'd like to keep that beautiful theme going</p>
        </div>

        <div className={styles.socialmediaacc} >
          <h2>FOLLOW THE OFFICIAL MIAMI VICE REUNION SOCIAL MEDIAS AT</h2>
          <div className={styles.vectors}>
            <img src="/images/instavector.png" alt="" />
            <img src="/Images/fbvector.png" alt="" />
            <img src="/Images/tiktok.png" alt="" />
            <img src="/Images/twittervector.png" alt="" />
          </div>
        </div>

        <div className={styles.bottomhead}>
          <h1>SPONSORS AND PARTNERS</h1>
        </div>
      </div>

      <div className={styles.lastsec}>
        <img src="/Images/sponsorsandpartners.png" alt="" />

        <div className={styles.logos} >
          <img src="/Images/logolarge.png" alt="" />
          <img src="/Images/logolarge.png" alt="" />
          <img src="/Images/logolarge.png" alt="" />
          <img src="/Images/logolarge.png" alt="" />
        </div>
      </div>

      <Disclaimer />
      <Footer />

    </>
  );
}

export default Home