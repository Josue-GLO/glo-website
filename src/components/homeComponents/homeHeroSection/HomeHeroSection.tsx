import styles from './HomeHeroSection.module.css'
import icons from '../../../assets/homePage/home-hero-icons.webp'
import { FaArrowRightLong } from "react-icons/fa6";

function HomeHeroSection() {
  return (
    <div className={styles.main__container}>
      <div className={styles.content__container}>
        <div className={styles.top__text__container}>
          <h1>Empower Your</h1>
          <img src={icons} alt="Hero Icons" />
        </div>
        <h1>Future, Globally</h1>

        <p>I am a...</p>
        <div className={styles.buttons__container}>
          <button>Student <br />🧑‍🎓</button>
          <button>Alumni <br />🎓</button>
          <button>Parent <br />👪</button>
          <button>Faculty/Advisor <br />🏫</button>
        </div>

        <div className={styles.links__container}>
          <p>Looking to...</p>
          <a href="">Know about GLO <FaArrowRightLong className={styles.arrow__icon} /></a>
        </div>
      </div>
    </div>
  )
}

export default HomeHeroSection
