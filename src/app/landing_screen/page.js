import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className={styles.description}>
        <Image
          src="../vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>LandingScreen</h1>
          <a href="/Login" rel="noopener noreferrer">
            <p> login</p>
          </a>
          <a href="/Signup" rel="noopener noreferrer">
            <p> SIGN</p>
          </a>
        </div>
      </div>
    </div>
  );
}
