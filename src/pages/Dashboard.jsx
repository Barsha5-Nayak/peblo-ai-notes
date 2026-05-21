import { useNavigate } from "react-router-dom";
import AISummaryModal from "../components/AISummaryModal";
import EditNoteModal from "../components/EditNoteModal";
import CreateNoteModal from "../components/CreateNoteModal";
import React, { useEffect } from "react";
import {
  Search,
  Plus,
  FileText,
  Sparkles,
  Tag,
} from "lucide-react";

  const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showSummaryModal, setShowSummaryModal] = React.useState(false);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSummary, setSelectedSummary] = React.useState("");
  const [notes, setNotes] = React.useState(() => {
  const savedNotes = localStorage.getItem("notes");

    return savedNotes
    ? JSON.parse(savedNotes)
     : [
       {
          id: 1,
          title: "Project Planning",
          content:
            "Discuss project roadmap and frontend implementation details...",
          tags: ["#work", "#meeting"],
        },
        {
          id: 2,
          title: "React Learning",
          content:
            "Learn components, props, hooks and routing in React.js...",
          tags: ["#react", "#study"],
        },
    ];
  });
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  
  const updateNote = (updatedNote) => {
   const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
   );

   setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);

    setNotes(filtered);
  };
   

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const filteredNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const generateSummary = async (content) => {
   const res = await fetch("http://localhost:5001/api/summarize", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
      },
     body: JSON.stringify({
       text: content,
      }),
   });

   const data = await res.json();

   setSelectedSummary(data.summary);

   setShowSummaryModal(true);
  };
  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>Peblo AI</h2>

        <ul>
         <li
            className="active"
            onClick={() => navigate("/dashboard")}
           >
            Dashboard
         </li>

         <li onClick={() => navigate("/notes")}>
            Notes
         </li>

         <li onClick={() => navigate("/analytics")}>
           Analytics
         </li>

         <li onClick={() => navigate("/settings")}>
          Settings
         </li>
       </ul>

        <button
          className="logout-btn"
          onClick={() => navigate("/")}
         >
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
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
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

            <h3>{notes.length}</h3>

            <p>Total Notes</p>

          </div>

          <div className="stat-card">

            <Sparkles size={24} />

            <h3>{notes.length}</h3>

            <p>AI Summaries</p>

          </div>

          <div className="stat-card">

            <Tag size={24} />

            <h3>
             {
               [...new Set(notes.flatMap((note) => note.tags))].length
             }
           </h3>

            <p>Top Tags</p>

          </div>
          <div className="stat-card">

            <h3>Weekly Activity</h3>

            <p>{notes.length} notes created</p>

            <p>{notes.length} AI summaries generated</p>

            <p>3 notes shared</p>

          </div>


        </div>



        {/* NOTES */}

        <div className="notes-section">

          {filteredNotes.map((note) => (
         <div className="note-card" key={note.id}>
           <h3>{note.title}</h3>
           <p>{note.content}</p>
            <div className="tags">
              {note.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="card-buttons">
              <button
               className="summary-btn"
               onClick={() => generateSummary(note.content)}
               >
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
              <button
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
               >
                Delete
             </button>
             <button
               className="share-btn"
               onClick={() => {
               localStorage.setItem(
               "sharedNote",
               JSON.stringify(note)
               );

               navigate(`/share/${note.id}`)
                }}
                >
                Share Note
             </button>
           </div>
          </div>
          ))}
          {filteredNotes.length === 0 && (
           <p className="no-notes">
             No notes found...
           </p>
          )}

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
      summary={selectedSummary}
     />
     )
     }
     
    </div>
  );
};

export default Dashboard;