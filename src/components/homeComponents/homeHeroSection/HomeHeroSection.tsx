import styles from './HomeHeroSection.module.css'
import icons from '../../../assets/homePage/home-hero-icons.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';

const studentOptions = [
  {name: "Know about GLO", url: ""}, {name: "Know about deadlines/enrollment", url: ""}, 
  {name: "Discover benefits", url: ""}, {name: "View funding options/scholarships", url: ""}, 
  {name: "Meet the team", url: ""}, {name: "Study abroad", url: ""},
  {name: "Discover testimonials", url: ""}, {name: "Know the experience", url: ""}, 
  {name: "Transfer credits", url: ""}, {name: "See whats included", url: ""}
];

const alumniOptions = [
  {name: "Go abroad again", url: ""}, {name: "Become an ambassador", url: ""}, 
  {name: "Work with GLO", url: ""}, {name: "Request a custom program", url: ""}, 
];

const parentOptions = [
  {name: "Discover the programs", url: ""}, {name: "Register a payment", url: ""},
  {name: "View FAQ's", url: ""}
];

const facultyOptions = [
  {name: "Work with GLO", url: ""}, {name: "Request a custom program", url: ""},
  {name: "Read case studies", url: ""}, {name: "View marketing resources", url: ""}, 
  {name: "View programs structure", url: ""}, {name: "Transfer credits", url: ""}
];

function HomeHeroSection() {
  const [selectedRole, setSelectedRole] = useState("Student");

  return (
    <section className={styles.main__container}>
      <div className={styles.content__container}>
        <div className={styles.top__text__container}>
          <h1>Empower Your</h1>
          <img src={icons} alt="Hero Icons" />
        </div>
        <h1>Future, Globally</h1>

        <p>I am a...</p>
        <div className={styles.buttons__container}>
          <button className={selectedRole === "Student" ? styles.button__active : ""} onClick={() => selectedRole === "Student" ? setSelectedRole("") : setSelectedRole("Student")}>Student <br />🧑‍🎓</button>
          <button className={selectedRole === "Alumni" ? styles.button__active : ""} onClick={() => selectedRole === "Alumni" ? setSelectedRole("") : setSelectedRole("Alumni")}>Alumni <br />🎓</button>
          <button className={selectedRole === "Parent" ? styles.button__active : ""} onClick={() => selectedRole === "Parent" ? setSelectedRole("") : setSelectedRole("Parent")}>Parent <br />👪</button>
          <button className={selectedRole === "Faculty/Advisor" ? styles.button__active : ""} onClick={() => selectedRole === "Faculty/Advisor" ? setSelectedRole("") : setSelectedRole("Faculty/Advisor")}>Faculty/Advisor <br />🏫</button>
        </div>

        <div className={styles.links__container}>
          {selectedRole && (
            <p key={selectedRole + "-label"} className={styles.label}>
              Looking to...
            </p>
          )}
          <div className={styles.links__list} key={selectedRole}>
            {(selectedRole === "Student" ? studentOptions
              : selectedRole === "Alumni" ? alumniOptions
              : selectedRole === "Parent" ? parentOptions
              : selectedRole === "Faculty/Advisor" ? facultyOptions
              : []
            ).map((option, index) => (
              <a key={index} href={option.url} className={styles.link__item} style={{ animationDelay: `${index * 35}ms` }} >{option.name} <FaArrowRightLong className={styles.arrow__icon} /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
