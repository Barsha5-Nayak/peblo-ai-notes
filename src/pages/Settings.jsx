import React from "react";

const Settings = () => {
  const darkMode =
  localStorage.getItem("theme") === "dark";
  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>

      <div className="sidebar">
        <h2>Peblo AI</h2>
      </div>

      <div className="main-content">

        <div className="topbar">
          <h2>Settings</h2>
        </div>

        <div className="stats-grid">

          <div className="stat-card">

           <h3>Profile Settings</h3>

            <p>
              Profile settings will appear here.
           </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;