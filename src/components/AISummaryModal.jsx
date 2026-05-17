import React from "react";

const AISummaryModal = ({ closeModal }) => {

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>AI Summary</h2>

        <div className="summary-content">

          <h4>Summary</h4>

          <p>
            This note discusses React hooks,
            routing, component structure and
            frontend development concepts.
          </p>

          <h4>Action Items</h4>

          <ul>

            <li>Practice React hooks</li>

            <li>Build mini project</li>

            <li>Revise React Router</li>

          </ul>

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