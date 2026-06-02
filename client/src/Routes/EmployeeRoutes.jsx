// src/Routes/EmployeeRoutes.jsx

import { Routes, Route } from "react-router-dom";

import MyProfile from "../Pages/employee/MyProfile";
import MyDetails from "../Pages/employee/MyDetails";

function EmployeeRoutes() {

  return (
    <Routes>

      <Route path="/" element={<MyProfile />} />

      <Route path="/details" element={<MyDetails />} />

    </Routes>
  );
}

export default EmployeeRoutes;