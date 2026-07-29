import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";

import ProtectedRoute from "./ProtectedRoute";

import Attendance from "../pages/attendance/Attendance";
import AttendanceHistory from "../pages/attendance/AttendanceHistory";

import SQLDashboard from "../pages/sql/SQLDashboard";
import SQLLab from "../pages/sql/SQLLab";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Login />} />

        <Route 
          path="/register" 
          element={<Register />} 
        />

        <Route 
          path="/forgot-password" 
          element={<ForgotPassword />} 
        />


        {/* Protected Routes */}

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

          <Route 
            path="/dashboard" 
            element={<Dashboard />} 
          />

          <Route 
            path="/profile" 
            element={<Profile />} 
          />


          <Route 
            path="/attendance" 
            element={<Attendance />} 
          />


          <Route 
            path="/attendance-history" 
            element={<AttendanceHistory />} 
          />


          {/* SQL Learning Dashboard */}

          <Route
            path="/sql-lab"
            element={<SQLDashboard />}
          />


          {/* SQL Editor */}

          <Route
            path="/sql-playground"
            element={<SQLLab />}
          />


        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;