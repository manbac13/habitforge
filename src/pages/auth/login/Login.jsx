import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { loginSchema } from "./schema";
import useAuth from "@/features/auth/authHook";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "@/utils/notify/notify";

const labelStyle = {
  fontWeight: 500,
  fontSize: "14px",
};

const Login = () => {
  const theme = useTheme();
  const { loading, loginAction } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const res = await loginAction(formData).unwrap();
      localStorage.setItem("access_token", res.data.access_token);
      notify({ message: res.message, severity: "success" });
      navigate("/");
    } catch (error) {
      notify({ message: error, severity: "error" });
      console.error(error);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 4,
        }}
      >
        <Box
          sx={{
            py: 6,
            px: 4,
            border: "1px solid",
            borderColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[200]
                : "inherit",
            borderTop: "4px solid",
            minWidth: { xs: "80%", sm: "60%", md: "70%", lg: "45%", xl: "40%", xxl: '35%' },
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h4" align="center">
              Sign In
            </Typography>
            <Stack spacing={2}>
              <Stack spacing={0.5}>
                <FormLabel sx={{ ...labelStyle }}>Email</FormLabel>
                <TextField
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  size="small"
                  placeholder="e.g. johndoe@company.com"
                />
              </Stack>

              <Stack spacing={0.5}>
                <FormLabel sx={{ ...labelStyle }}>Password</FormLabel>
                <TextField
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  size="small"
                  placeholder="Enter your password"
                />
              </Stack>
            </Stack>

            <Box>
              <Button
                loading={loading}
                onClick={handleSubmit(onSubmit)}
                size="large"
                variant="contained"
                color="warning"
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  style={{ textDecorationColor: theme.palette.warning.dark }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: theme.palette.warning.dark,
                    }}
                  >
                    Sign up
                  </span>
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
