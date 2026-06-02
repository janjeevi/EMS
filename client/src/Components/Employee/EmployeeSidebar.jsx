// src/Components/Employee/EmployeeSidebar.jsx

import { Link } from "react-router-dom";

function EmployeeSidebar() {

  return (
    <div className="sidebar">

      <h2>EMS</h2>

      <ul>

        <li>
          <Link to="/">My Profile</Link>
        </li>

        <li>
          <Link to="/details">My Details</Link>
        </li>

        <li>
          <Link to="/">Logout</Link>
        </li>

      </ul>

    </div>
  );
}

export default EmployeeSidebar;