"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Form.module.css";
import axios from "axios";

export default function Registieren() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user.name, user.email, user.password);
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
    } catch {}
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Registieren</h2>
        <label htmlFor="name">Benutzername:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <button type="submit">Registieren</button>
      </form>
    </>
  );
}
