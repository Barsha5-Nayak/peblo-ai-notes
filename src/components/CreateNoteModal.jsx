import React from "react";

const CreateNoteModal = ({ closeModal, addNote }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tags, setTags] = React.useState("");
  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Create New Note</h2>

        {/* TITLE */}

        <input
         type="text"
         placeholder="Enter note title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
       />

        {/* CONTENT */}

        <textarea
         placeholder="Write your note content..."
         value={content}
         onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* TAGS */}

        <input
         type="text"
         placeholder="Add tags (react, study...)"
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
             const newNote = {
               id: Date.now(),
               title,
               content,
               tags: tags.split(","),
              };

              addNote(newNote);

             closeModal();
            }}
           > 
            Save Note
         </button>
        </div>


      </div>

    </div>
  );
};

export default CreateNoteModal;