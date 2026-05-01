import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { useMemo } from "react";
import getTheme from "./theme/theme";
import useSettings from "./features/settings/settingsHook";

function App() {
  const { appThemeMode } = useSettings();

  const theme = useMemo(() => getTheme(appThemeMode), [appThemeMode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
