"use client";

import ListBeitrag from "./listBeitrag.js";
import { useState } from "react";
import styles from "../styles/beitrag.module.css";

export default function BeitragHinzufuegen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code hinzufügen, um den Beitrag und das Bild zu speichern oder zu verarbeiten
    // Du kannst das `image`-State verwenden, um das ausgewählte Bild an den Server zu senden oder zu speichern
    console.log("Beitrag hinzufügen:", { title, content, image });
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
        <div className={styles.formGroup}>
          <label htmlFor="image" className={styles.label}>
            Image:
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Beitrag hinzufügen
        </button>
      </form>
      <div className="listWrapper">
        <ul>
          {list.map((el, index) => (
            <ListBeitrag
              key={index}
              beitrag={el.beitrag}
              list={list}
              setList={setList}
              id={el._id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
