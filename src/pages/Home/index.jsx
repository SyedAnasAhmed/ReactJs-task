// import React from 'react'
// import styles from "./styles.module.css";
// import MyNavbar from '../../Components/Navbar/Navbar';



// function Home() {
//   return (
//     <>
//       <div className={`${styles.custom}`}>
//         <div className={`${styles.navmargin}`   }>
//           <MyNavbar />
//         </div>
//       </div>

//     </>
//   )
// }

// export default Home


import React from 'react';
import styles from './styles.module.css';
import MyNavbar from '../../Components/Navbar/Navbar';
import HomeCard from '../../Components/ImgTxtCard';
// import backgroundImage from './backgroundImage.jpg'; // Import your background image

function Home() {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <img src={"/public/Images/hero1.png"} alt="Background" className={styles.backgroundImage} />
        <img src={"/public/Images/hero1DaysCounter.png"} alt="" className={styles.anotherImage} />
        <div className={styles.textOverlay}>MIAMI VICE 40th ANNIVERSARY</div>
        <div className={styles.textOverlay2}>REUNION OPENING NIGHT</div>

        <div className={styles.navbarContainer}>
          <MyNavbar />
        </div>
      </div>
      <div className={styles.hero2}>
        <img src={"/public/Images/Hero2img.png"} width={1180} height={573} alt="" />
        <p>Promotional Footage for the Miami Vice 40th Anniversary Reunion is Courtesy of Derek <br />
          Hedlund, Rick Bravo, The Miami Vice Preservation Society & Universal Studios LLC.</p>
      </div>
      <div className={styles.hero3}>
        <img src={"/public/Images/hero3bg.png"} height={989} alt="" />
        <div>
          <h1 className={styles.hero3textoverlay}>1980S SOUTH BEACH</h1>
        </div>
        <div className={styles.cardholder} >
          <HomeCard para1="Ocean Drive was a deteriorating stretch of hotels and co-ops used primarily as retirement homes for the elderly. 
            " para2="Crime was rampant, cocaine cowboys were shooting it out in the streets, and the drug war was raging.
            " para3="One television show changed everything and made South Beach, Miami Dade County and South Florida the ultimate paradise and travel destination that it is today for the entire world. That show was called…" 
            src="/public/Images/homecard1.png" />
        </div>
        <div className={styles.button}>
          <button>GET TICKETS NOW</button>
        </div>
      </div>
    </>
  );
}

export default Home