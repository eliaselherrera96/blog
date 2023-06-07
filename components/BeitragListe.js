import Image from "next/image";
import styles from "../styles/beitragListe.module.css";
import React, { useState } from "react";
import trash from "../public/trash.svg";
import pen from "../public/pen.svg";

const BeitragListe = ({ beitraege, title, content, list, setList, id }) => {
  const [edit, setEdit] = useState(false);
  const [ newContent, setNewContent] = useState("");

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/beitrag/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );
      const data = await response.json();
      console.log(data);

      const filteredList = list.filter((el) => el._id !== id);

      console.log({ filteredList });
      setList(filteredList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = () => {
    setEdit(true);
    setNewContent(content);
  };

  //
  const handleEdit = async () => {
    if (newContent !== "") {
      try {
        const updatedBeitrag = {
          ...content,
          content: newContent
        };
  
        const response = await fetch(`/beitrags/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedBeitrag)
        });
  
        if (response.ok) {
          const updatedList = list.map((beitrag) => {
            if (beitrag._id === id) {
              return {
                ...beitrag,
                content: newContent
              };
            }
            return beitrag;
          });
  
          setList(updatedList);
          setEdit(false);
          setNewContent("");
        } else {
          console.log("Fehler beim Aktualisieren des Beitrags");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Bitte fügen Sie Informationen in das Updatefeld ein!");
      setEdit(false);
    }
    console.log("beitraege",beitraege)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Beiträge</h2>
      <ul className={styles.list}>
        {beitraege.map((content, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.title}>Title: {content.title}</h3>
            <p className={styles.content}>Content: {content.content}</p>
            <Image src={trash} width={20} height={20} onClick={()=>{
              handleDelete(content._id)
            }} alt="" />
            <Image src={pen} width={20} height={20} onClick={handleEditClick} alt="" />
          </li>
          
        ))}
        {edit ? (
        <div>
          <input
            value={newContent}
            onChange={(evt) => setNewContent(evt.target.value)}
          />
          <button onClick={handleEdit}>OK</button>
        </div>
      ) : null}
      </ul>
    </div>
  );
};
export default BeitragListe;