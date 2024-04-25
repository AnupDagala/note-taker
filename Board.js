import React from "react";

const Board = (props) => {
  return (
    <div className="board">
      {props.notesData.map((note, index) => (
        <div key={index} className="note" style={{ backgroundColor: note.color }}>
          <h2>{note.noteMainTitle}</h2>
          <h3>{note.noteSubTitle}</h3>
          <p>{note.noteDescription}</p>
          <button onClick={() => props.handleDeleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Board;
