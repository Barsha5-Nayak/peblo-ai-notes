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

          <div className="note-card">

            <h3>Project Planning</h3>

            <p>
              Discuss project roadmap and frontend
              implementation details...
            </p>

            <div className="tags">

              <span>#work</span>

              <span>#meeting</span>

            </div>
            <div className="card-buttons">

              <button
               onClick={() => setShowSummaryModal(true)}
               >
               Generate AI Summary
              </button>

              <button
               onClick={() => setShowEditModal(true)}
              >
               Edit Note
              </button>

            </div>

          </div>



          <div className="note-card">

            <h3>React Learning</h3>

            <p>
              Learn components, props, hooks and
              routing in React.js...
            </p>

            <div className="tags">

              <span>#react</span>

              <span>#study</span>

            </div>

            <div className="card-buttons">

              <button
               onClick={() => setShowSummaryModal(true)}
                >
               Generate AI Summary
              </button>

              <button
                onClick={() => setShowEditModal(true)}
              >
               Edit Note
              </button>

            </div>

          </div>

        </div>

      </div>
      {
      showModal && (
      <CreateNoteModal
      closeModal={() => setShowModal(false)}
     />
     )
     }
     {
      showEditModal && (
      <EditNoteModal
      closeModal={() => setShowEditModal(false)}
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