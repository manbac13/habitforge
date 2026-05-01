import useSettings from "@/features/settings/settingsHook";
import { Box, Button, FormLabel, Stack, useTheme } from "@mui/material";

const ThemeSettings = () => {
  const theme = useTheme();
  const { toggleThemeAction, appThemeMode } = useSettings();

  const handleToggleTheme = () => {
    if (appThemeMode === "light") {
      toggleThemeAction("dark");
    } else if (appThemeMode === "dark") {
      toggleThemeAction("light");
    }
  };
  return (
    <>
      <Box>
        <Stack sx={{ display: "flex", alignItems: "start" }} spacing={1}>
          <FormLabel
            sx={{
              color:
                theme.palette.mode === "light"
                  ? theme.palette.common.black
                  : theme.palette.common.white,
            }}
          >
            Pick Your Theme
          </FormLabel>
          <Button
            onClick={handleToggleTheme}
            variant="outlined"
            color="warning"
          >
            {appThemeMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ThemeSettings;
