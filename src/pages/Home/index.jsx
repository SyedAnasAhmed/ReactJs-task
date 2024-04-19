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
// import backgroundImage from './backgroundImage.jpg'; // Import your background image

function Home() {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <img src={"/public/Images/hero1.png"} alt="Background" className={styles.backgroundImage} />
        <img src={"/public/Images/DaysCounter.png"} alt="" className={styles.anotherImage} />
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
      </div>
    </>
  );
}

export default Home;
