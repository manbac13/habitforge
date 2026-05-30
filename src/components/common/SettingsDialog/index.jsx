import useAuth from "@/features/auth/authHook";
import GeneralSettings from "@/sections/Settings/GeneralSettings";
import ThemeSettings from "@/sections/Settings/ThemeSettings";
import {
  Box,
  Dialog,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: 1, slug: "general", title: "General" },
  { id: 2, slug: "theme", title: "Theme" },
  { id: 3, slug: "logout", title: "Logout" },
];

const SettingsDialog = ({ open, onClose }) => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState("general");
  const { logoutAction } = useAuth();
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <Box sx={{ height: "70vh" }}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              size={3}
              sx={{
                borderRight: `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[700]}`,
              }}
            >
              <Box
                sx={{
                  p: 2,
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: "1.25rem" }}>
                  Settings
                </Typography>
              </Box>

              <Box>
                <List disablePadding>
                  {tabs.map((item) => (
                    <ListItem key={item.slug} disablePadding>
                      <ListItemButton
                        disableRipple
                        selected={selectedTab === item.slug}
                        onClick={() => {
                          if (item.slug !== "logout") {
                            setSelectedTab(item.slug);
                          } else {
                            logoutAction();
                          }
                        }}
                      >
                        <ListItemText>{item.title}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid size={9}>
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{
                    minHeight: "3.875rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={onClose} size="small">
                    <X />
                  </IconButton>
                </Box>
                {selectedTab === "general" && <GeneralSettings />}
                {selectedTab === "theme" && <ThemeSettings />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default SettingsDialog;
