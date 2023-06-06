"use client";

import ListBeitrag from "../components/listBeitrag.js";
import { useState, useEffect } from "react";
import styles from "../styles/beitrag.module.css";
import axios from 'axios';

const baseURL = "/beitrags";


export default function BeitragHinzufuegen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);

  const fetchBeitrags = async () => {
    try {
      const response = await axios.get(baseURL);
      const data = response.data;

      setList(data);
    } catch (error) {
      console.log(error);
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      
      try {
        const response = await axios.post("/upload", formData);
        // Hier kannst du die Antwort des Servers verarbeiten, z. B. die URL des hochgeladenen Bildes erhalten
        const imageURL = response.data.imageURL;
        
        // Hier kannst du den Beitrag speichern und die URL des Bildes zusammen mit dem Titel und Inhalt senden
        const postData = {
          title: title,
          content: content,
          imageURL: imageURL,
        };
        
        // Hier kannst du den Beitrag an den Server senden
        const postResponse = await axios.post("/posts", postData);
        // Hier kannst du die Antwort des Servers verarbeiten, z. B. die neue Liste der Beiträge aktualisieren
        const updatedList = [...list, postResponse.data];
        setList(updatedList);
        
        // Zurücksetzen der Eingabefelder
        setTitle("");
        setContent("");
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
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
