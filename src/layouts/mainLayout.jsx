import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Box sx={{ width: { xs: "95%", md: "90%" }, margin: "auto" }}>
      <Navbar />

      <main style={{minHeight: 'calc(100vh - 104.8px)'}}>
        <Outlet />
      </main>
    </Box>
  );
}
