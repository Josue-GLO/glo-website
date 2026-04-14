import styles from './HomeHeroSection.module.css'
import icons from '../../../assets/homePage/home-hero-icons.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';

const studentOptions = [
  {name: "Know about GLO", url: ""}, {name: "Know about deadlines/enrollment", url: ""}, 
  {name: "Discover benefits", url: ""}, {name: "Know about financial planning/scholarships", url: ""}, 
  {name: "Meet the team", url: ""}, {name: "Read blogs", url: ""}, {name: "Study abroad", url: ""},
  {name: "Discover testimonials", url: ""}, {name: "Know the experience", url: ""}, 
  {name: "Transfer credits", url: ""}, {name: "Know whats included", url: ""}, {name: "Know why GLO", url: ""}
];

const alumniOptions = [
  {name: "Go abroad again", url: ""}, {name: "Become an ambassador", url: ""}, 
  {name: "Work with GLO", url: ""}, {name: "Customized programs", url: ""}, 
];

const parentOptions = [
  {name: "Discover the programs", url: ""}, {name: "Register a payment", url: ""},
  {name: "View FAQ's", url: ""}
];

const facultyOptions = [
  {name: "Work with GLO", url: ""}, {name: "Customized programs", url: ""},
  {name: "Read case studies", url: ""}, {name: "View marketing resources", url: ""}, 
  {name: "View programs structure", url: ""}, {name: "Transfer credits", url: ""}
];

function HomeHeroSection() {
  const [selectedRole, setSelectedRole] = useState("");

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
          <button className={selectedRole === "Student" ? styles.button__active : ""} onClick={() => selectedRole === "Student" ? setSelectedRole("") : setSelectedRole("Student")}>Student <br />🧑‍🎓</button>
          <button className={selectedRole === "Alumni" ? styles.button__active : ""} onClick={() => selectedRole === "Alumni" ? setSelectedRole("") : setSelectedRole("Alumni")}>Alumni <br />🎓</button>
          <button className={selectedRole === "Parent" ? styles.button__active : ""} onClick={() => selectedRole === "Parent" ? setSelectedRole("") : setSelectedRole("Parent")}>Parent <br />👪</button>
          <button className={selectedRole === "Faculty/Advisor" ? styles.button__active : ""} onClick={() => selectedRole === "Faculty/Advisor" ? setSelectedRole("") : setSelectedRole("Faculty/Advisor")}>Faculty/Advisor <br />🏫</button>
        </div>

        {selectedRole &&
          <div className={styles.links__container}>
            <p>Looking to...</p>
            <div className={styles.links__list}>
              {
                selectedRole === "Student" && studentOptions.map((option, index) => (
                  <a key={index} href={option.url}>{option.name} <FaArrowRightLong className={styles.arrow__icon} /></a>
                ))
              }
              {
                selectedRole === "Alumni" && alumniOptions.map((option, index) => (
                  <a key={index} href={option.url}>{option.name} <FaArrowRightLong className={styles.arrow__icon} /></a>
                ))
              }
              {
                selectedRole === "Parent" && parentOptions.map((option, index) => (
                  <a key={index} href={option.url}>{option.name} <FaArrowRightLong className={styles.arrow__icon} /></a>
                ))
              }
              {
                selectedRole === "Faculty/Advisor" && facultyOptions.map((option, index) => (
                  <a key={index} href={option.url}>{option.name} <FaArrowRightLong className={styles.arrow__icon} /></a>
                ))
              }
            </div>
          </div>
    }
      </div>
    </div>
  )
}

export default HomeHeroSection
