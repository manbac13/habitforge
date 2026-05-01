import {
  calculatePercentage,
  formatDate,
  formatPercentageWithPrecision,
} from "@/utils";
import {
  alpha,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  LinearProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import AddTrackerDialog from "../AddTrackerDialog";
import useTracker from "@/features/tracker/trackerHook";
import useSettings from "@/features/settings/settingsHook";

const GoalDataDialog = ({ open, onClose, data }) => {
  const theme = useTheme();
  const { deleteTrackerDataAction } = useTracker();
  const { precision } = useSettings();

  const [editOpen, setEditOpen] = useState(false);

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const percentage = calculatePercentage(
    data.units_completed,
    data.total_units,
  );
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: "1.5rem",
              mb: 2,
              fontWeight: 500,
            }}
          >
            {data.title}
          </Typography>

          <Typography>{data.description}</Typography>

          <Box
            sx={{
              mt: 2,
              px: 2,
              py: 2,
              borderRadius: 1,
              border: `1px solid ${alpha(theme.palette.warning.light, 0.25)}`,
              bgcolor: alpha(theme.palette.warning.light, 0.1),
            }}
          >
            <Typography variant="body2">
              You began on{" "}
              <span style={{ fontWeight: 500 }}>
                {formatDate(data.createdAt)}.
              </span>
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {formatPercentageWithPrecision(percentage, precision)}% Complete
              </Typography>
              <LinearProgress
                variant="determinate"
                value={calculatePercentage(
                  data.units_completed,
                  data.total_units,
                )}
                sx={{
                  height: 8,
                  backgroundColor: theme.palette.grey[500],
                  borderRadius: 1,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: (theme) => theme.palette.warning.main,
                    transition: "transform 0.4s ease",
                  },
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => deleteTrackerDataAction(data.id)}
            variant="outlined"
            color="error"
          >
            Delete this task
          </Button>
          <Stack direction={"row"} spacing={1}>
            <Button onClick={onClose} color="error">
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ background: (theme) => theme.palette.warning.dark }}
              onClick={() => handleEdit()}
            >
              Edit
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      <AddTrackerDialog open={editOpen} onClose={handleEditClose} data={data} />
    </>
  );
};
export default GoalDataDialog;
