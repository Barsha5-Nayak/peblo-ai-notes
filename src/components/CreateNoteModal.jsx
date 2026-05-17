import React from "react";

const CreateNoteModal = ({ closeModal }) => {
  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Create New Note</h2>

        {/* TITLE */}

        <input
          type="text"
          placeholder="Enter note title"
        />

        {/* CONTENT */}

        <textarea
          placeholder="Write your note content..."
        ></textarea>

        {/* TAGS */}

        <input
          type="text"
          placeholder="Add tags (react, study...)"
        />

        {/* BUTTONS */}

        <div className="modal-buttons">

          <button className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button className="save-btn">
            Save Note
          </button>

        </div>

      </div>

    </div>
  );
};

export default CreateNoteModal;