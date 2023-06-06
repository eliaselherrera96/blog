import React, { useState } from "react";
import axios from "axios";

export default function ListBeitrag({ list, setList, id }) {
  const [edit, setEdit] = useState(false);
  const [newBeitrag, setNewBeitrag] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`/beitrags/${id}`);

      const filteredList = list.filter((el) => {
        return el._id != id;
      });

      console.log({ filteredList });
      setList(filteredList);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const handleEditClick = () => {
    setEdit(true);
    setNewBeitrag(beitrag);
  };

  //
  const handleEdit = async () => {
    if (newBeitrag !== "") {
      try {
        const res = await axios.put(`/beitrags/${id}`, {
            beitrag: newBeitrag,
        });

        const updateBeitragId = list.findIndex((el) => el._id === id);

        const updatedBeitragItem = (list[updateBeitragId].beitrag = newBeitrag);

        setNewBeitrag(updatedBeitragItem);

        const newList = list.map((el) => {
          if (el === newBeitrag) return newBeitrag;
          return el;
        });

        setList(newList);
        setNewBeitrag("");
      } catch (error) {
        console.log(error);
      }

      setEdit(false);
    } else {
      alert("Bitte fügen Sie Information ins Updatefeld ein!");
      setEdit(false);
    }
  };

  return (
    <>
      <li>
        {beitrag}
        <div className="imageWrapper">
          <img src={pen} onClick={handleEditClick} alt="" />
          <img src={trash} onClick={handleDelete} alt="" />
        </div>
      </li>
      {edit ? (
        <div className="editWrapper">
          <input
            value={newBeitrag}
            onChange={(evt) => setNewBeitrag(evt.target.value)}
            className="editBeitrag"
          />
          <button onClick={handleEdit}>OK</button>
        </div>
      ) : null}
    </>
  );
}