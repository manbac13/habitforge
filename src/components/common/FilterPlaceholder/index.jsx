import { Box, Button, Typography } from "@mui/material";

const FilterPlaceHolder = ({ status, setStatus }) => {
  console.log("props received", status);
  const filterTitle =
    status === "pending"
      ? "You don't any new goals."
      : status === "in_progress"
        ? "Start working on a new goal."
        : "You have not completed any goals yet.";
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 265px)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: 500, fontSize: "1.75rem" }}>
            {filterTitle}
          </Typography>
          {/* <Typography>Track progress and stay consistent</Typography> */}
        </Box>

        <Button
          onClick={() => setStatus("")}
          variant="outlined"
          color="warning"
        >
          Clear Filter
        </Button>
      </Box>
    </>
  );
};

export default FilterPlaceHolder;
