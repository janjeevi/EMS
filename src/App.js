import "./styles/hr.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HRSidebar from "./components/HRSidebar";

import HRDashboard from "./pages/hr/HRDashboard";
import EmployeeDetails from "./pages/hr/EmployeeDetails";
import JobAssignment from "./pages/hr/JobAssignment";
import Reports from "./pages/hr/Reports";

function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        <HRSidebar />

        <Routes>

          <Route
            path="/"
            element={<HRDashboard />}
          />

          <Route
            path="/employees"
            element={<EmployeeDetails />}
          />

          <Route
            path="/jobs"
            element={<JobAssignment />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;