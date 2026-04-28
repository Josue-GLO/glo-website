import styles from "./HomeMissionSection.module.css";
import missionTableImage from "../../../assets/homePage/home-mission-image.webp";
import { PiShareNetworkFill } from "react-icons/pi";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

function HomeMissionSection() {
  return (
    <section className={styles.main__container}>
      <div className={styles.image__container}>
        <div className={styles.floating__container}>
          <p className={styles.title__text}>40+</p>
          <p>
            Years of <br /> Experience
          </p>
        </div>
        <div
          className={
            styles.floating__container + " " + styles.experience__container
          }
        >
          <p className={styles.title__text}>650+</p>
          <p>
            Successful <br /> Programs
          </p>
        </div>
        <div
          className={
            styles.floating__container + " " + styles.students__container
          }
        >
          <p className={styles.title__text}>30K+</p>
          <p>
            Students Enrolled <br /> in Programs
          </p>
        </div>
        <img src={missionTableImage} alt="people working together" />
      </div>
      <div className={styles.right__container}>
        <p className={styles.main__text}>Our Mission, Vision, and Values</p>
        <p>
          Global Learning Opportunities (formerly International Business
          Seminars) organizes short-term, faculty-led, multi-destination study
          abroad programs that are designed as your first business trip abroad
          experience.
        </p>
        <p className={styles.light__blue__text}>
          GLO programs provide an opportunity for students to:
        </p>
        <div className={styles.cards__container}>
          <div className={styles.card}>
            <div className={styles.card__title__container}>
              <PiShareNetworkFill className={styles.card__icon} />
              <p className={styles.card__title}>Network</p>
            </div>
            <p>
              Network with business executives from global companies in a
              variety of industries.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.card__title__container}>
              <FaGlobeAmericas className={styles.card__icon} />
              <p className={styles.card__title}>Explore</p>
            </div>
            <p>
              Experience some of the world's most remarkable attractions and
              destinations.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.card__title__container}>
              <TbTargetArrow className={styles.card__icon} />
              <p className={styles.card__title}>Career</p>
            </div>
            <p>
              Earn university credit while gaining a competitive advantage for
              your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMissionSection;
