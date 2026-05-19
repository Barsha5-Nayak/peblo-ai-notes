import AISummaryModal from "../components/AISummaryModal";
import EditNoteModal from "../components/EditNoteModal";
import CreateNoteModal from "../components/CreateNoteModal";
import React from "react";
import {
  Search,
  Plus,
  FileText,
  Sparkles,
  Tag,
} from "lucide-react";

  const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showSummaryModal, setShowSummaryModal] = React.useState(false);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [notes, setNotes] = React.useState([
    {
     id: 1,
     title: "Project Planning",
     content: "Discuss project roadmap and frontend implementation details...",
     tags: ["#work", "#meeting"],
    },
    {
     id: 2,
     title: "React Learning",
     content: "Learn components, props, hooks and routing in React.js...",
     tags: ["#react", "#study"],
    },
  ]);
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  
  const updateNote = (updatedNote) => {
  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
  );

  setNotes(updatedNotes);
  };

  const generateSummary = async () => {
  const res = await fetch("http://localhost:5001/api/summarize", {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: "This is my sample note for AI summary",
  }),
  });

  const data = await res.json();

  alert(data.summary);
  };
  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>Peblo AI</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Notes</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn">
          Logout
        </button>

      </div>



      {/* MAIN CONTENT */}

      <div className="main-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search notes..."
            />

          </div>

          <button className="create-btn" onClick={()=> setShowModal(true)}>
           + Create Note

          </button>

        </div>



        {/* DASHBOARD CARDS */}

        <div className="stats-grid">

          <div className="stat-card">

            <FileText size={24} />

            <h3>24</h3>

            <p>Total Notes</p>

          </div>

          <div className="stat-card">

            <Sparkles size={24} />

            <h3>12</h3>

            <p>AI Summaries</p>

          </div>

          <div className="stat-card">

            <Tag size={24} />

            <h3>8</h3>

            <p>Top Tags</p>

          </div>
          <div className="stat-card">

            <h3>Weekly Activity</h3>

            <p>8 notes created</p>

            <p>5 AI summaries generated</p>

            <p>3 notes shared</p>

          </div>


        </div>



        {/* NOTES */}

        <div className="notes-section">

          {notes.map((note) => (
         <div className="note-card" key={note.id}>
           <h3>{note.title}</h3>
           <p>{note.content}</p>
            <div className="tags">
              {note.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="card-buttons">
              <button onClick={generateSummary}>
                Generate AI Summary
             </button>

              <button
               onClick={() => {
               setSelectedNote(note);
               setShowEditModal(true);
               }} 
               > 
                Edit Note Modal
              </button>
           </div>
          </div>
          ))}

        </div>

      </div>
      {
      showModal && (
      <CreateNoteModal
      closeModal={() => setShowModal(false)}
      addNote={addNote}
     />
     )
     }
     {
      showEditModal && (
      <EditNoteModal
      closeModal={() => setShowEditModal(false)}
      selectedNote={selectedNote}
      updateNote={updateNote}
     />
     )
     }
     {
      showSummaryModal && (
      <AISummaryModal
      closeModal={() => setShowSummaryModal(false)}
      />
     )
     }
     
    </div>
  );
};

export default Dashboard;