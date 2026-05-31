import AddTrackerDialog from "@/components/common/AddTrackerDialog";
import AppLoader from "@/components/common/AppLoader";
import FilterPlaceHolder from "@/components/common/FilterPlaceholder";
import GoalCard from "@/components/common/GoalCard";
import useGoals from "@/features/goals/goalsHook";
import HomeActions from "@/sections/Home/ActionsRow";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const Home = () => {
  const { goalsData, getAllGoalsAction, loading } = useGoals();

  const [trackerOpen, setTrackerOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleTrackerDialogClose = () => {
    setTrackerOpen(false);
  };

  const filteredGoalList = useMemo(() => {
    if (!status) {
      return goalsData;
    }
    const filteredData = goalsData?.filter((item) => item.status === status);
    return filteredData || [];
  }, [goalsData, status]);
  // console.log("filtered data", goalsData);

  useEffect(() => {
    getAllGoalsAction();
  }, []);
  return (
    <>
      <AppLoader loading={loading} />
      <Box>
        <HomeActions setStatus={setStatus} status={status} />
        {goalsData?.length === 0 && (
          <Box
            sx={{
              height: "calc(100vh - 265px)",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "1.75rem" }}>
                Set a new goal
              </Typography>
              <Typography>Track progress and stay consistent</Typography>
            </Box>

            <Button
              onClick={() => setTrackerOpen(true)}
              variant="contained"
              color="warning"
            >
              Add Goal
            </Button>
          </Box>
        )}

        {goalsData?.length !== 0 && filteredGoalList?.length === 0 && (
          <FilterPlaceHolder status={status} setStatus={setStatus} />
        )}
        <Box
          sx={{
            width: { xs: "70%", sm: "100%", margin: "auto" },
            mt: 8,
            mb: 4,
          }}
        >
          <Grid container spacing={3}>
            {filteredGoalList?.map((goal) => (
              <Grid key={goal._id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3, xxl: 2.4 }}>
                <GoalCard data={goal} key={goal._id} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <AddTrackerDialog
        open={trackerOpen}
        onClose={handleTrackerDialogClose}
      />
    </>
  );
};

export default Home;
