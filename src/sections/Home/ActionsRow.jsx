import AddTrackerDialog from "@/components/common/AddTrackerDialog";
import SettingsDialog from "@/components/common/SettingsDialog";
import { Box, Button, Chip, Fade, useMediaQuery, useTheme } from "@mui/material";
import { Check } from "lucide-react";
import { useState } from "react";

const statusList = [
  { slug: "pending", title: "Not Started" },
  { slug: "in_progress", title: "In Progress" },
  { slug: "completed", title: "Completed" },
];

const HomeActions = ({ setStatus, status }) => {
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
      <Fade in={true} appear timeout={1000}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            py: 1,
            borderBottom: "1px solid",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {statusList.map((item) => (
              <Chip
                variant="outlined"
                size="small"
                label={item.title}
                key={item.slug}
                sx={{
                  cursor: "pointer",
                  transition: "0.3s all",
                  px: 1,
                  // border: `1px solid ${theme.palette.grey[300]}`,
                  borderStyle: status === item.slug ? "dashed" : "solid",
                  borderColor:
                    status === item.slug
                      ? theme.palette.warning.dark
                      : "inherit",
                  color:
                    status === item.slug
                      ? theme.palette.warning.dark
                      : "inherit",
                }}
                icon={
                  status === item.slug ? (
                    <Check
                      size={12}
                      style={{
                        marginRight: "2px",
                        color: theme.palette.warning.dark,
                      }}
                    />
                  ) : null
                }
                onClick={() =>
                  status === item.slug ? setStatus("") : setStatus(item.slug)
                }
              />
            ))}
          </Box>
          {!mobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="theme" onClick={() => setTrackerOpen(true)}>
                Add Goal
              </Button>
              <Button variant="theme" onClick={() => setSettingsOpen(true)}>
                Settings
              </Button>
            </Box>
          )}
        </Box>
      </Fade>

      <AddTrackerDialog open={trackerOpen} onClose={handleTrackerDialogClose} />
      <SettingsDialog open={settingsOpen} onClose={handleSettingsDialogClose} />
    </>
  );
};

export default HomeActions;
