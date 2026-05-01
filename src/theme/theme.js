import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light" && {
        background: { default: "#f8f6f5" },
      }),
    },

    typography: {
      fontFamily: '"Google Sans", "Inter", sans-serif',
    },

    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
        variants: [
          {
            props: { variant: "theme" },
            style: ({ theme }) => ({
              color:
                theme.palette.mode === "light"
                  ? theme.palette.grey[800]
                  : theme.palette.grey[300],
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingInline: "10px",
              minWidth: "auto",
              fontSize: "0.8125rem",
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

export default getTheme;
