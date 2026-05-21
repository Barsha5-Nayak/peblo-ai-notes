import React from "react";

const Notes = () => {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Peblo AI</h2>
      </div>

      <div className="main-content">

        <div className="topbar">
          <h2>Notes</h2>
        </div>

        <div className="notes-section">

          <div className="note-card">
            <h3>All Notes</h3>

            <p>
              Your created notes will appear here.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Notes;