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
      <h2>Login</h2>

      <label htmlFor="username">Benutzername:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Passwort:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Anmelden</button>
      <Link href="/mein-konto/konto-loschen">Konto Löschen</Link>
      <p>
        <Link href="/mein-konto/passwort-vergessen">Passwort vergessen?</Link>
      </p>
      <p>
        Haben Sie kein Konto?
        <Link href="/mein-konto/registieren">Registrieren Sie sich hier</Link>
      </p>
    </form>
  );
}
