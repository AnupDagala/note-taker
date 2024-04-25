import React, { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FormModal from "./components/formModal";
import SearchModal from "./components/searchModal";
import Board from "./components/Board";
import SpotifyPlayer from "./components/SpotifyPlayer"; // Import the SpotifyPlayer component

function App() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [noteMainTitle, setNoteMainTitle] = useState("");
  const [noteSubTitle, setNoteSubTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [searchNoteQuery, setSearchNoteQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState(""); // State variable for selected color

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  const handleNoteMainTitle = (e) => {
    setNoteMainTitle(e.target.value);
  };

  const handleNoteSubTitle = (e) => {
    setNoteSubTitle(e.target.value);
  };

  const handleNoteDescription = (e) => {
    setNoteDescription(e.target.value);
  };

  const handleNoteSubmission = (e) => {
    e.preventDefault();
    setNotes([...notes, { noteMainTitle, noteSubTitle, noteDescription, color: selectedColor }]);
    setNoteMainTitle("");
    setNoteSubTitle("");
    setNoteDescription("");
  };

  const handleClearNotes = () => {
    setNotes([]);
  };

  const handleNoteSearchFunction = (e) => {
    setSearchNoteQuery(e.target.value);
  };

  const handleSearchFunction = (e) => {
    e.preventDefault();
    const searchedNotes = notes.filter((obj) => {
      return obj.noteMainTitle.includes(searchNoteQuery);
    });
    setNotes(searchedNotes);
    console.log(searchedNotes);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Fragment>
      <NavBar
        showFormModalFunction={openFormModal}
        showSearchModalFunction={openSearchModal}
        noteClearanceFunction={handleClearNotes}
      />
      <FormModal
        noteModalShowStatement={showFormModal}
        closeFormModalFunction={closeFormModal}
        noteMainTitleFunction={handleNoteMainTitle}
        noteSubTitleFunction={handleNoteSubTitle}
        noteDescriptionFunction={handleNoteDescription}
        noteMainTitleValue={noteMainTitle}
        noteSubTitleValue={noteSubTitle}
        noteDescriptionValue={noteDescription}
        noteSubmissionFunction={handleNoteSubmission}
        handleColorChange={handleColorChange} // Pass the handleColorChange function
      />
      <SearchModal
        searchModalShowStatement={showSearchModal}
        closeSearchModalFunction={closeSearchModal}
        noteSearchFunction={handleSearchFunction}
        searchQueryValue={searchNoteQuery}
        noteSearchQueryFunction={handleNoteSearchFunction}
      />
      <Board notesData={notes} />
      <SpotifyPlayer />
    </Fragment>
  );
}

export default App;
