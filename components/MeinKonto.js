"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function MeinKonto() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit">Login</button>
      <button type="">Clear</button>
      <p>
        Haben Sie kein Konto?
        <Link href="/mein-konto/registieren">Registrieren Sie sich hier</Link>
      </p>
    </form>
  );
}
