// src/Pages/employee/MyDetails.jsx

import EmployeeSidebar from "../../Components/Employee/EmployeeSidebar";
import EmployeeForm from "../../Components/Employee/EmployeeForm";

function MyDetails() {

  return (
    <div className="dashboard">

      <EmployeeSidebar />

      <div className="content">

        <div className="top-bar">
          <h1>My Details</h1>
        </div>

        <EmployeeForm />

      </div>

    </div>
  );
}

export default MyDetails;