import React from "react";
import styles from "../styles/beitragListe.module.css";

const BeitragListe = ({ beitraege }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Beiträge</h2>
      <ul className={styles.list}>
        {beitraege.map((beitrag, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.title}>Title: {beitrag.title}</h3>
            <p className={styles.content}>Content: {beitrag.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BeitragListe;