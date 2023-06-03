import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="centered-image">
        <Link href="/">
          <Image
            className="header-img"
            src="/Logo.png"
            alt="logo"
            width={400}
            height={100}
          />
        </Link>
        <div>
          <p>Reiseblog & Outdoor-Abenteuer aus München</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
