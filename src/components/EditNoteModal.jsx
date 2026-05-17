import React from "react";

const EditNoteModal = ({ closeModal }) => {

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Edit Note</h2>

        {/* TITLE */}

        <input
          type="text"
          placeholder="Edit title..."
        />

        {/* CONTENT */}

        <textarea
          placeholder="Edit your note..."
        ></textarea>

        {/* TAGS */}

        <input
          type="text"
          placeholder="Edit tags..."
        />

        {/* BUTTONS */}

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button className="save-btn">
            Update Note
          </button>

        </div>

      </div>

    </div>

  );
};

export default EditNoteModal;