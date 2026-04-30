import { Box, Typography } from "@mui/material";

const Fallback = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    </>
  );
};

export default Fallback;
