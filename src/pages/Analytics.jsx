import React from "react";

const Analytics = () => {
  const darkMode =
  localStorage.getItem("theme") === "dark";
  return (
    <div className={darkMode ? "dashboard dark" : "dashboard"}>

      <div className="sidebar">
        <h2>Peblo AI</h2>
      </div>

      <div className="main-content">

        <div className="topbar">
          <h2>Analytics</h2>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Notes Activity</h3>
            <p>Analytics insights will appear here.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;