import { Link } from "react-router-dom";

function HRSidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">EMS</h2>

      <p className="subtitle">
        Employee management system
      </p>

      <ul className="menu">

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/employees">
            Employee Details
          </Link>
        </li>

        <li>
          <Link to="/jobs">
            Job Assignment
          </Link>
        </li>

        <li>
          <Link to="/reports">
            Reports
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default HRSidebar;