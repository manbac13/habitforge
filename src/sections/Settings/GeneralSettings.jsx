import useSettings from "@/features/settings/settingsHook";
import {
  Box,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const GeneralSettings = () => {
  const theme = useTheme();

  //general settings
  const { setPrecisionAction, precision } = useSettings();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box>
        <Stack
          direction={mobile ? "column" : "row"}
          sx={{ justifyContent: "space-between", gap: mobile ? 1 : 0 }}
        >
          <Stack>
            <FormLabel
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.common.black
                    : theme.palette.common.white,
                fontWeight: 500,
              }}
            >
              Percentage Precision
            </FormLabel>
            <Typography variant="body2">
              Enter how many digits to show after the decimal point
            </Typography>
          </Stack>

          <Select
            value={precision}
            onChange={(e) => setPrecisionAction(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 180 }}
          >
            <MenuItem value={null}>Select decimals</MenuItem>
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </Stack>
      </Box>
    </>
  );
};
export default GeneralSettings;
