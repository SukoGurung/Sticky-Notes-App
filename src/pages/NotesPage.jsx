import React from "react";
import {fakeData as notes} from "../assets/fakeData";
import Notecard from "../components/NotesCard";

const NotesPage = () => {
 
  return (
    <div>
      {notes.map((note) => (
        <Notecard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;