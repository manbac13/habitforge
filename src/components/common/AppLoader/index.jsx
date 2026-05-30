import { LinearProgress, Fade } from "@mui/material";

const AppLoader = ({ loading }) => {
  return (
    <Fade in={loading} unmountOnExit>
      <LinearProgress
        color="warning"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.snackbar + 1,
          height: 5,
        }}
      />
    </Fade>
  );
};

export default AppLoader;
