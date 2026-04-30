import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Google Sans", "Inter", sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true, // removes shadow
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none", // removes uppercase
        },
      },

      variants: [
        {
          props: { variant: "theme" }, // your custom variant name
          style: ({ theme }) => ({
            color: theme.palette.grey[800],
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingInline: "10px",
            minWidth: "auto",
            fontSize: "0.8125rem" /* ~13px */,
            minHeight: "30px",

            "&:hover": {
              color: theme.palette.warning.dark,
              textDecoration: "underline",
              backgroundColor: "transparent",
            },

            transition: "0.1s ease-in-out",
          }),
        },
      ],
    },
  },
});

export default theme;
