import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>

      <Navbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        <Outlet />

      </Box>

    </Box>
  );
}

export default MainLayout;