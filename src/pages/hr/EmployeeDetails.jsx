import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeDetails() {

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All");

  const [newName, setNewName] =
    useState("");

  const [newDepartment, setNewDepartment] =
    useState("");

  const [newJob, setNewJob] =
    useState("");

  const [editId, setEditId] =
    useState(null);

  const [editName, setEditName] =
    useState("");

  const [editDepartment, setEditDepartment] =
    useState("");

  const [editJob, setEditJob] =
    useState("");

  const [employees, setEmployees] =
    useState([]);

  // FETCH EMPLOYEES

  const fetchEmployees = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/employees"
        );

      setEmployees(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchEmployees();

  }, []);

  // FILTER EMPLOYEES

  const filteredEmployees =
    employees.filter((emp) => {

      const matchSearch =
        emp.name.toLowerCase().includes(
          search.toLowerCase()
        );

      const matchDepartment =
        department === "All" ||
        emp.department === department;

      return (
        matchSearch &&
        matchDepartment
      );

    });

  // ADD EMPLOYEE

  const addEmployee = async () => {

    const newEmployee = {

      name: newName,

      email:
        `${newName.toLowerCase()}@company.com`,

      department: newDepartment,

      job: newJob,

      type: "Full time"

    };

    try {

      await axios.post(
        "http://localhost:5000/api/employees/add",
        newEmployee
      );

      alert("Employee Added");

      fetchEmployees();

      setNewName("");

      setNewDepartment("");

      setNewJob("");

    }

    catch (error) {

      console.log(error);

    }

  };

  // DELETE EMPLOYEE

  const deleteEmployee = (id) => {

    const updatedEmployees =
      employees.filter(
        (emp) => emp._id !== id
      );

    setEmployees(updatedEmployees);

  };

  // EDIT EMPLOYEE

  const editEmployee = (emp) => {

    setEditId(emp._id);

    setEditName(emp.name);

    setEditDepartment(emp.department);

    setEditJob(emp.job);

  };

  // UPDATE EMPLOYEE

  const updateEmployee = () => {

    const updatedEmployees =
      employees.map((emp) => {

        if (emp._id === editId) {

          return {

            ...emp,

            name: editName,

            department: editDepartment,

            job: editJob

          };

        }

        return emp;

      });

    setEmployees(updatedEmployees);

    setEditId(null);

  };

  return (

    <div className="content">

      <h2 className="heading">
        Employee Details
      </h2>

      <p className="small-text">
        View Employee Details
      </p>

      {/* Search Section */}

      <div className="search-section">

        <input
          type="text"

          placeholder=
            "Search by employee name"

          className="search-box"

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="department"

          value={department}

          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >

          <option value="All">
            All Departments
          </option>

          <option value="IT">
            IT
          </option>

          <option value="HR">
            HR
          </option>

          <option value="Marketing">
            Marketing
          </option>

        </select>

      </div>

      {/* Add Employee Form */}

      <div className="add-form">

        <input
          type="text"

          placeholder="Employee Name"

          value={newName}

          onChange={(e) =>
            setNewName(e.target.value)
          }

          className="search-box"
        />

        <input
          type="text"

          placeholder="Department"

          value={newDepartment}

          onChange={(e) =>
            setNewDepartment(e.target.value)
          }

          className="search-box"
        />

        <input
          type="text"

          placeholder="Job Title"

          value={newJob}

          onChange={(e) =>
            setNewJob(e.target.value)
          }

          className="search-box"
        />

        <button
          onClick={addEmployee}

          className="add-btn"
        >
          Add Employee
        </button>

      </div>

      {/* Edit Form */}

      {editId && (

        <div className="add-form">

          <input
            type="text"

            value={editName}

            onChange={(e) =>
              setEditName(e.target.value)
            }

            className="search-box"
          />

          <input
            type="text"

            value={editDepartment}

            onChange={(e) =>
              setEditDepartment(e.target.value)
            }

            className="search-box"
          />

          <input
            type="text"

            value={editJob}

            onChange={(e) =>
              setEditJob(e.target.value)
            }

            className="search-box"
          />

          <button
            onClick={updateEmployee}

            className="add-btn"
          >
            Update
          </button>

        </div>

      )}

      {/* Employee Table */}

      <table className="employee-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Employment Type</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredEmployees.map((emp, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{emp.name}</td>

              <td>{emp.email}</td>

              <td>{emp.department}</td>

              <td>{emp.job}</td>

              <td>

                <span className="badge">
                  {emp.type}
                </span>

              </td>

              <td>

                <button
                  onClick={() =>
                    editEmployee(emp)
                  }

                  className="edit-btn"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteEmployee(emp._id)
                  }

                  className="delete-btn"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default EmployeeDetails;