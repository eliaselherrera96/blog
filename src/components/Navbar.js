"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li>
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/beitrage"
            className={
              router.pathname === "/beitrage"
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span>Beiträge</span>
          </Link>
        </li>
        <li>
          <Link
            href="/mein-konto"
            className={
              router.pathname === "/mein-konto"
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            <span>Mein Konto</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
