import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useNotification from "@/features/notifications/notificationHook";

export default function GlobalSnackbar() {
  const { hideNotificationAction, open, message, severity } = useNotification();

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;

    hideNotificationAction();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
