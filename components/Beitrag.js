"use client";

import { useState, useEffect } from "react";
import styles from "../styles/beitrag.module.css";
import BeitragListe from "./BeitragListe";

export default function BeitragHinzufuegen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);

  const fetchBeitrags = async (method, id) => {
    if (method === "GET") {
      try {
        const response = await fetch("http://localhost:3000/api/beitrag", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);

        setList(data);
      } catch (error) {
        console.log(error);
      }
    } else if (method === "POST") {
      try {
        const response = await fetch("http://localhost:3000/api/beitrag", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });
        const data = await response.json();
        console.log(data);

        setList(data);
      } catch (error) {
        console.log(error);
      }
    // } else if (method === "DELETE") {
    //   try {
    //     const response = await fetch(
    //       `http://localhost:3000/api/beitrag/${id}`,
    //       {
    //         method: "DELETE",
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({ title, content }),
    //       }
    //     );
    //     const data = await response.json();
    //     console.log(data);

    //     const filteredList = list.filter((el) => el._id !== id);

    //     console.log({ filteredList });
    //     setList(filteredList);
    //   } catch (error) {
    //     console.log(error);
    //   }
     } 
     else if (method === "PUT") {
      try {
        const response = await fetch(
          `http://localhost:3000/api/beitrag/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              title,
              content,
              beitrag: newBeitrag,
            }),
          }
        );
        const data = await response.json();
        console.log(data);

        const updateBeitragId = list.findIndex((el) => el._id === id);

        const updatedBeitragItem = {
          ...list[updateBeitragId],
          beitrag: newBeitrag,
        };

        const newList = list.map((el) => {
          if (el._id === id) return updatedBeitragItem;
          return el;
        });

        setList(newList);
        setNewBeitrag("");
      } catch (error) {
        console.log(error);
      }
      setEdit(false);
    }
  };

  useEffect(() => {
    fetchBeitrags("GET", null);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetchBeitrags("POST"); 
    setList([...list, { title, content }]);
    setTitle("");
    setContent("");
  };

  const deleteAll = async () => {
    try {
      const response = await fetch("/api/beitrag", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setList([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAll = (evt) => {
    evt.preventDefault();
    deleteAll();
    setList([]);
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
        <button onClick={handleDeleteAll} className={styles.submitButton}>Alles löschen</button>
      </form>
      <BeitragListe beitraege={Object.values(list)} title={title} content={content} list={list} setList={setList}/>
    </div>
  );
}