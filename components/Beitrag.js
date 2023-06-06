"use client";

import { useState, useEffect } from "react";
import styles from "../styles/beitrag.module.css";


export default function BeitragHinzufuegen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);

  const fetchBeitrags = async (method) => {

    if( method === "GET"){
      try {
        const response = await fetch("/api/beitrag", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
        });
        const data = await response.json();
        console.log(data);
  
        setList(data);
      } catch (error) {
        console.log(error);
      }
    }
    else if( method === "POST"){
      try {
        const response = await fetch("/api/beitrag", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({title, content})
        });
        const data = await response.json();
        console.log(data);
  
        setList(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  useEffect(() => {
    fetchBeitrags();
  }, []);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchBeitrags("POST")
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Beitrag hinzufügen</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Titel:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            Inhalt:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Beitrag hinzufügen
        </button>
      </form>
    </div>
  );
}
