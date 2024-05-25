import Image from "next/image";
import styles from "./page.module.css";
import LandingScreen from '../app/landing_screen/page'; // Renaming the import to LandingScreen

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingScreen /> 
    </main>
  );
}
