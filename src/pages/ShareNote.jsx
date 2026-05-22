import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import React from "react";

const ShareNote = () => {
  const darkMode =
  localStorage.getItem("theme") === "dark";

  const sharedNote = JSON.parse(
    localStorage.getItem("sharedNote")
  );

  if (!sharedNote) {
    return (
      <div className={darkMode ? "share-page dark" : "share-page"}>
        <h2>No shared note found...</h2>
      </div>
    );
  }

  return (
    <div className="share-page">

      <div className="share-card">

        <h1>{sharedNote.title}</h1>

        <p className="share-text">
          {sharedNote.content}
        </p>

        <div className="share-tags">

          {sharedNote.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}

        </div>

        <div className="public-badge">
          🌍 Public Note
       </div>

        <div className="share-actions">

         <button
           className="whatsapp-btn"
           onClick={() =>
           window.open(
            `https://wa.me/?text=${sharedNote.title} - ${sharedNote.content}`
           )
           }
           >
           <FaWhatsapp />
            WhatsApp
         </button>

          <button
            className="instagram-btn"
            onClick={() => {
            navigator.clipboard.writeText(
            `${sharedNote.title} - ${sharedNote.content}`
            );

            alert("Note copied for Instagram sharing 🚀");
           }}
           >
           <FaInstagram />
            Instagram
         </button>

          <button
           className="twitter-btn"
           onClick={() =>
           window.open(
           `https://twitter.com/intent/tweet?text=${sharedNote.title}`
           )
           }
           >
            <FaTwitter />
           Twitter
         </button>

         <button
           className="facebook-btn"
           onClick={() =>
           window.open(
           `https://www.facebook.com/sharer/sharer.php?u=https://peblo-ai-notes.vercel.app`
           )
           }
           >
           <FaFacebook />
           Facebook
         </button>
         <button
            className="facebook-btn"
            onClick={() => {
            navigator.clipboard.writeText(window.location.href);

            alert("Link copied 🚀");
           }}
           >
            Copy Link
         </button>

        </div>
      </div>

    </div>
  );
};

export default ShareNote;