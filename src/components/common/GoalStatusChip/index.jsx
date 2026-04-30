import { Box, Typography } from "@mui/material";

const removeUnderscores = (str) => str.replace(/_/g, " ");

const GoalStatusChip = ({ label }) => {
  return (
    <>
      <Box
        sx={{
          border: (theme) => `1px solid ${theme.palette.grey[300]}`,
          px: 0.5,
        }}
      >
        <Typography sx={{ fontSize: "0.625rem", textTransform: "uppercase", fontWeight: 500 }}>
          {removeUnderscores(label)}
        </Typography>
      </Box>
    </>
  );
};

export default GoalStatusChip;
