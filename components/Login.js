"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Form.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.titel}>Login</h2>
      <div className={styles.labelInput}>
        <label className={styles.label} htmlFor="username">
          Benutzername:
        </label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className={styles.label} htmlFor="password">
          Passwort:
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div className="btns">
        <button className={styles.btn} type="submit">
          Anmelden
        </button>

        <button href="/mein-konto/registieren" className={styles.btn}>
          <Link className={styles.link} href="/mein-konto/registieren">
            Registrieren
          </Link>
        </button>
      </div>
      <br />
      <Link className={styles.link} href="/mein-konto/passwort-vergessen">
        Passwort vergessen?
      </Link>
      <Link className={styles.link} href="/mein-konto/konto-loschen">
        Konto Löschen
      </Link>

      {/* <p className="link">
        Haben Sie kein Konto?
        <Link href="/mein-konto/registieren">Registrieren Sie sich hier</Link>
      </p> */}
    </form>
  );
}
