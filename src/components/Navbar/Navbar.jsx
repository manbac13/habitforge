import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import AddTrackerDialog from "../common/AddTrackerDialog";
import SettingsDialog from "../common/SettingsDialog";

const Navbar = () => {
  const theme = useTheme();
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleTrackerDialogClose = () => {
    setTrackerOpen(false);
  };

  const handleSettingsDialogClose = () => {
    setSettingsOpen(false);
  };

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: mobile ? "space-between" : "center",
          alignItems: "center",
          py: 2,
          borderBottom: "1px solid",
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: '"Estonia", cursive' }}>
          HabitForge
        </Typography>

        {mobile && (
          <Box sx={{ display: "flex", gap: 1, pt: 2 }}>
            <Button variant="theme" onClick={() => setTrackerOpen(true)}>
              Add Goal
            </Button>
            <Button variant="theme" onClick={() => setSettingsOpen(true)}>
              Settings
            </Button>
          </Box>
        )}
      </Box>

      <AddTrackerDialog open={trackerOpen} onClose={handleTrackerDialogClose} />
      <SettingsDialog open={settingsOpen} onClose={handleSettingsDialogClose} />
    </>
  );
};

export default Navbar;
