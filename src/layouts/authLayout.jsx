import { Box, Fade, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Fade in={true} appear timeout={1000}>
        <Grid container>
          <Grid
            size={{ xs: 0, md: 5, lg: 4 }}
            sx={{
              background: (theme) => theme.palette.warning.dark,
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                gap: 1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  // fontFamily: '"Estonia", cursive',
                  color: (theme) => theme.palette.common.white,
                }}
              >
                HabitForge
              </Typography>
              <Typography sx={{ color: (theme) => theme.palette.common.white }}>
                The Smarter Way to Build Lasting Habits.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <main>
              <Outlet />
            </main>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};

export default AuthLayout;
