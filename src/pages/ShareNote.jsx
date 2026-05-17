import React from "react";

const ShareNote = () => {

  return (

    <div className="share-page">

      <div className="share-card">

        <h1>React Learning Notes</h1>

        <p className="share-text">

          These notes cover React fundamentals
          including components, hooks, routing
          and project structure.

        </p>

        <div className="share-tags">

          <span>#react</span>

          <span>#frontend</span>

          <span>#study</span>

        </div>

        <div className="public-badge">

          Publicly Shared

        </div>

      </div>

    </div>
  );
};

export default ShareNote;