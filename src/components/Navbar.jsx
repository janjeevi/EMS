import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>EMS</h2>
        <p>Employee management system</p>
      </div>

      <ul className="nav-links">
        <li>Employee Details</li>
        <li>View Employee Details</li>
        <li>Attendance & Leave</li>
        <li>View Leave Details</li>
      </ul>

    </nav>
  );
}

export default Navbar;