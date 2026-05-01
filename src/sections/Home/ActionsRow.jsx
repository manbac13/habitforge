import AddTrackerDialog from "@/components/common/AddTrackerDialog";
import SettingsDialog from "@/components/common/SettingsDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const HomeActions = () => {
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleTrackerDialogClose = () => {
    setTrackerOpen(false);
  };

  const handleSettingsDialogClose = () => {
    setSettingsOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          py: 1,
          borderBottom: "1px solid",
        }}
      >
        <Button variant="theme" onClick={() => setTrackerOpen(true)}>
          Add Goal
        </Button>
        <Button variant="theme" onClick={() => setSettingsOpen(true)}>
          Settings
        </Button>
      </Box>

      <AddTrackerDialog open={trackerOpen} onClose={handleTrackerDialogClose} />
      <SettingsDialog open={settingsOpen} onClose={handleSettingsDialogClose} />
    </>
  );
};

export default HomeActions;
