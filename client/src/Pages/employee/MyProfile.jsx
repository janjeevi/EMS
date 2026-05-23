// src/Pages/employee/MyProfile.jsx

import EmployeeSidebar from "../../Components/Employee/EmployeeSidebar";

function MyProfile() {

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <EmployeeSidebar />

      {/* CONTENT */}

      <div className="content">

        <div className="top-bar">
          <h1>My Profile</h1>
        </div>

        {/* PROFILE CARD */}

        <div className="profile-card">

          {/* LEFT SIDE */}

          <div className="profile-left">

            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="profile"
              className="profile-image"
            />

            <h2>Arun Kumar</h2>

            <p className="job-role">
              Software Developer
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="profile-right">

            <div className="detail-box">
              <h4>Employee Name</h4>
              <p>Arun Kumar</p>
            </div>

            <div className="detail-box">
              <h4>Department</h4>
              <p>IT Department</p>
            </div>

            <div className="detail-box">
              <h4>Date of Joining</h4>
              <p>12 March 2026</p>
            </div>

            <div className="detail-box">
              <h4>Employment Type</h4>
              <p>Full Time</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyProfile;