import React from "react";

const EditNoteModal = ({
  closeModal,
  selectedNote,
  updateNote,
  }) => 
{
  
    const [title, setTitle] = React.useState(selectedNote.title);
    const [content, setContent] = React.useState(selectedNote.content);
    const [tags, setTags] = React.useState(
    selectedNote.tags.join(",")
    );

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Edit Note</h2>

        {/* TITLE */}

        <input
          type="text"
          placeholder="Edit title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
       />

        {/* CONTENT */}

        <textarea
         placeholder="Edit your note..."
         value={content}
         onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* TAGS */}

        <input
         type="text"
         placeholder="Edit tags..."
         value={tags}
         onChange={(e) => setTags(e.target.value)}
       />

        {/* BUTTONS */}
        <div className="modal-buttons">

         <button
            className="cancel-btn"
            onClick={closeModal}
           >
             Cancel
          </button>
          <button
            className="save-btn"
            onClick={() => {
            const updatedNote = {
            ...selectedNote,
            title,
            content,
            tags: tags.split(","),
           };

            updateNote(updatedNote);

            closeModal();
           }}
           >
            Update Note
         </button>
         
        </div>

      </div>

    </div>

  );
};

export default EditNoteModal;