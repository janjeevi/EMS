// src/Components/Employee/EmployeeForm.jsx

import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    department: "",
    jobTitle: "",
    employmentType: "",
    joiningDate: "",
    address: "",
  });

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/employees/add",
        formData
      );

      console.log(response.data);

      alert("Employee Details Uploaded Successfully");

    }

    catch (error) {

      console.log(error);

      alert("Something Went Wrong");

    }

  };

  return (

    <div className="details-container">

      <p className="details-text">
        View and Update your personal information
      </p>

      <h3 className="section-title">
        Personal Information
      </h3>

      <form onSubmit={handleSubmit}>

        <div className="details-box">

          {/* FULL NAME */}

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Arun"
              value={formData.fullName}
              onChange={handleChange}
            />

          </div>

          {/* EMAIL */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="arun@example.com"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* PHONE */}

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="9383736353"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          {/* DOB */}

          <div className="form-group">

            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

          </div>

          {/* GENDER */}

          <div className="form-group">

            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

          </div>

          {/* MARITAL STATUS */}

          <div className="form-group">

            <label>Marital Status</label>

            <input
              type="text"
              name="maritalStatus"
              placeholder="Single"
              value={formData.maritalStatus}
              onChange={handleChange}
            />

          </div>

          {/* DEPARTMENT */}

          <div className="form-group">

            <label>Department</label>

            <input
              type="text"
              name="department"
              placeholder="IT Department"
              value={formData.department}
              onChange={handleChange}
            />

          </div>

          {/* JOB TITLE */}

          <div className="form-group">

            <label>Job Title</label>

            <input
              type="text"
              name="jobTitle"
              placeholder="Software Developer"
              value={formData.jobTitle}
              onChange={handleChange}
            />

          </div>

          {/* EMPLOYMENT TYPE */}

          <div className="form-group">

            <label>Employment Type</label>

            <input
              type="text"
              name="employmentType"
              placeholder="Full Time"
              value={formData.employmentType}
              onChange={handleChange}
            />

          </div>

          {/* JOINING DATE */}

          <div className="form-group">

            <label>Date of Joining</label>

            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
            />

          </div>

          {/* ADDRESS */}

          <div className="form-group address-group">

            <label>Address</label>

            <input
              type="text"
              name="address"
              placeholder="123, Anna Nagar, Chennai"
              value={formData.address}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* BUTTONS */}

        <div className="button-group">

          <button type="button" className="edit-btn">
            Edit Detail
          </button>

          <button type="submit" className="upload-btn">
            Upload Detail
          </button>

        </div>

      </form>

    </div>

  );
}

export default EmployeeForm;