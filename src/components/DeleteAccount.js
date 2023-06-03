"use client";
import React from "react";
import { useState } from "react";
import styles from "../../styles/Form.module.css";

export default function DeleteAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryString = `username=${username}&email=${email}&password=${password}`;
      const response = await fetch(`/api/deleteUser?${queryString}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      console.log("Successfully deleted!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Konto löschen</h2>
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
        <button type="submit">Löschen</button>
      </form>
    </>
  );
}
