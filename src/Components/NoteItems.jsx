import React from "react";
import { Link } from "react-router-dom";

const NoteItems = ({ note }) => {
  console.log(note);
  return (
  <Link to={`/Edit-note/${note.id}`} className="note">
  <h4>
    {/* substr yerine slice de kullanılabilir*/}
    {note.title.lenght > 30 ? note.title.substr(0, 30) + "..." : note.title}
  </h4>
  <p>{note.date}</p>
  </Link>)
};

export default NoteItems;
