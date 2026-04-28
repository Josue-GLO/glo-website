import Header from "../../components/header/header";
import HomeHeroSection from "../../components/homeComponents/homeHeroSection/HomeHeroSection";
import HomeMissionSection from "../../components/homeComponents/homeMissionSection/HomeMissionSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <HomeHeroSection />
      <main className={styles.main}>
        <HomeMissionSection />
      </main>
    </>
  );
}

export default Home;
