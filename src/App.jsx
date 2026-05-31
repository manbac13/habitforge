import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useMemo } from "react";
import getTheme from "./theme/theme";
import useSettings from "./features/settings/settingsHook";
import GlobalSnackbar from "./components/GlobalSnackbar/globalSnackbar";
import { setLogoutHandler } from "./utils/authEvents";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "./features/auth/authSlice";
import { notify } from "./utils/notify/notify";
import { setNotificationHandler } from "./utils/notificationEvents";

function App() {
  const { appThemeMode } = useSettings();
  const dispatch = useDispatch();

  const theme = useMemo(() => getTheme(appThemeMode), [appThemeMode]);

  useEffect(() => {
    setLogoutHandler(() => {
      dispatch(setIsAuthenticated(false));
      notify({
        message: "Session timed out. Please login again.",
        severity: "error",
      });
    });

    setNotificationHandler((notification) => {
      notify(notification);
    });
    return () => {
      setLogoutHandler(null);
      setNotificationHandler(null);
    };
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
        <GlobalSnackbar />
      </ThemeProvider>
    </>
  );
}

export default App;
