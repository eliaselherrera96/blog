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
          <Link href="/">
            <span className={router.pathname === "/" ? "active" : ""}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className={router.pathname === "/" ? "active" : ""}>
              Beiträge
            </span>
          </Link>
        </li>
      </ul>
      <div className="login-signup">
        <li>
          <Link href="/">
            <span className={router.pathname === "/" ? "active" : ""}>
              Mein Konto
            </span>
          </Link>
        </li>
      </div>
    </nav>
  );
}

//   <ul className={styles.navbarLinks}>
//     <li>
//       <Link href="/">
//         <span className={router.pathname === "/" ? "active" : ""}>
//           HOME
//         </span>
//       </Link>
//     </li>

//     <li
//       className={`${styles.dropdown} ${
//         router.pathname === "/about" ? styles.active : ""
//       }`}
//     >
//       {" "}
//       <Link href="/about">
//         <span>ÜBER MICH</span>
//       </Link>
//       <ul className={styles.dropdownMenu}>
//         <li>
//           <Link href="/about">
//             <span>ÜBER MICH</span>
//           </Link>
//         </li>
//         <li>
//           <Link href="/collaboration">
//             <span>ZUSAMMENARBEIT</span>
//           </Link>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <Link href="/travel">
//         <span className={router.pathname === "/travel" ? "active" : ""}>
//           REISEN
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/adventure">
//         <span className={router.pathname === "/adventure" ? "active" : ""}>
//           Abenteuer
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/munich">
//         <span className={router.pathname === "/munich" ? "active" : ""}>
//           MÜNCHEN
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/photography">
//         <span
//           className={router.pathname === "/photography" ? "active" : ""}
//         >
//           FOTOGRAFIE
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/sustainability">
//         <span
//           className={router.pathname === "/sustainability" ? "active" : ""}
//         >
//           NACHHALTIGKEIT
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/login">
//         <span className={router.pathname === "/login" ? "active" : ""}>
//           LOGIN
//         </span>
//       </Link>
//     </li>
//     <li>
//       <Link href="/signup">
//         <span className={router.pathname === "/signup" ? "active" : ""}>
//           SIGNUP
//         </span>
//       </Link>
//     </li>
//   </ul>
