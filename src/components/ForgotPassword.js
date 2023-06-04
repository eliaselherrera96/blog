"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/forgotPassword", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          code,
          newPassword,
          confirmNewPassword,
        }),
      });
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Passwort vergessen</h2>
        <label htmlFor="username">Benutzername:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
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
        <label htmlFor="code">Bestätigungs Code:</label>
        <input
          type="text"
          name="code"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <label htmlFor="password">Neues Passwort:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <label htmlFor="password">Neues Passwort bestätigen:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <br />
        <button type="submit">Ändern</button>
        <button>
          <Link href="/mein-konto">zurück</Link>
        </button>
      </form>
    </>
  );
}
