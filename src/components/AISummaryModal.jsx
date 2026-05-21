import React from "react";

const AISummaryModal = ({ closeModal, summary }) => {

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>AI Summary</h2>

        <div className="summary-content">

          <h4>Summary</h4>

          <p>{summary}</p>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Close
          </button>

        </div>

      </div>

    </div>

  );
};

export default AISummaryModal;