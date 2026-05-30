import {
  Box,
  Fade,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import GoalStatusChip from "../GoalStatusChip";
import { useState } from "react";
import GoalDataDialog from "../GoalDataDialog";
import { calculatePercentage, formatDate } from "@/utils";

const GoalCard = ({ data }) => {
  const theme = useTheme();

  const [openGoalData, setOpenGoalData] = useState(false);

  const handleGoalClose = () => {
    setOpenGoalData(false);
  };
  return (
    <>
      <Fade in={true} appear timeout={1000}>
        <Tooltip
          arrow
          title={`${calculatePercentage(
            data.units_completed,
            data.total_units,
          )}% completed`}
        >
          <Box
            sx={{
              height: "24rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid",
              borderColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[200]
                  : "inherit",
              borderTop: "4px solid",
              borderBottom: "none",
              pt: 1.5,
              cursor: "pointer",
              "&:hover .goal-title": {
                color: (theme) => theme.palette.warning.dark,
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "2px",
              },
            }}
            onClick={() => setOpenGoalData(true)}
          >
            <Box>
              <Stack sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <GoalStatusChip label={data.status} />
              </Stack>

              <Typography
                className="goal-title"
                sx={{
                  px: 2,
                  textAlign: "center",
                  fontSize: "2rem",
                  lineHeight: "36px",
                }}
              >
                {data.title}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1,
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: theme.palette.grey[600],
                }}
              >
                {formatDate(data.createdAt)}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={calculatePercentage(
                  data.units_completed,
                  data.total_units,
                )}
                sx={{
                  height: 10,
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#1a1a1a"
                      : theme.palette.grey[200],
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: (theme) =>
                      calculatePercentage(
                        data.units_completed,
                        data.total_units,
                      ) === 100
                        ? theme.palette.success.main
                        : theme.palette.warning.light,
                    transition: "transform 0.4s ease",
                  },
                }}
              />
            </Box>
          </Box>
        </Tooltip>
      </Fade>

      <GoalDataDialog
        open={openGoalData}
        onClose={handleGoalClose}
        data={data}
      />
    </>
  );
};

export default GoalCard;
