import { useState } from "react";
import gloLogo from "./../../assets/glo-header-logo.webp";
import styles from "./header.module.css";
import { TbMenu } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import MainButton from "../mainButton/MainButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavLink, setSelectedNavLink] = useState("Home");

  function handleMenuButtonClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleNavLinkClick(selectedNav: string): void {
    setSelectedNavLink(selectedNav);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <a href="#" className={styles.logo__image}>
            <img src={gloLogo} alt="glo logo" />
          </a>
          <nav className={styles.nav__container}>
            <a href="#" className={selectedNavLink === "Home" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Home")}>Home</a>
            <a href="#" className={selectedNavLink === "Why GLO" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Why GLO")}>Why GLO</a>
            <a href="#" className={selectedNavLink === "Programs" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Programs")}>Programs</a>
            <a href="#" className={selectedNavLink === "Faculty & Universities" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Faculty & Universities")}>Faculty & Universities</a>
            <a href="#" className={selectedNavLink === "Our Blogs" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Our Blogs")}>Our Blogs</a>
          </nav>
          <MainButton className={styles.contact__button} text="Contact" />
          <button className={styles.menu__button} onClick={handleMenuButtonClick}>
            <TbMenu size={35}/>
          </button>
        </div>
      </header>
      <div className={`${styles.popup__container} ${isMenuOpen ? styles.popup__container__open : ""}`}>
        <nav className={`${styles.popup__nav} ${isMenuOpen ? styles.popup__nav__open : ""}`}>
          <a href="#" className={styles.logo__image}>
            <img src={gloLogo} alt="glo logo" />
          </a>
          <a href="#" className={selectedNavLink === "Home" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Home")}>Home</a>
          <a href="#" className={selectedNavLink === "Why GLO" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Why GLO")}>Why GLO</a>
          <a href="#" className={selectedNavLink === "Programs" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Programs")}>Programs</a>
          <a href="#" className={selectedNavLink === "Faculty & Universities" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Faculty & Universities")}>Faculty & Universities</a>
          <a href="#" className={selectedNavLink === "Our Blogs" ? styles.nav__active : ""} onClick={() => handleNavLinkClick("Our Blogs")}>Our Blogs</a>
        </nav>
        <div className={styles.overlay__container} onClick={handleMenuButtonClick}>
          <button onClick={handleMenuButtonClick}><IoIosClose /></button>
        </div>
      </div>
    </>
  )
}

export default Header
