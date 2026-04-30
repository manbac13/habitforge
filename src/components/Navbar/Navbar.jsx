import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
          borderBottom: "1px solid",
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: '"Estonia", cursive' }}>
          HabitForge
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
