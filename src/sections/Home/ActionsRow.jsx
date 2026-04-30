import AddTrackerDialog from "@/components/common/AddTrackerDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const HomeActions = () => {
  const [trackerOpen, setTrackerOpen] = useState(false);

  const handleTrackerDialogClose = () => {
    setTrackerOpen(false);
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
        <Button variant='theme' onClick={() => setTrackerOpen(true)}>
          Add Goal
        </Button>
      </Box>

      <AddTrackerDialog open={trackerOpen} onClose={handleTrackerDialogClose} />
    </>
  );
};

export default HomeActions;
