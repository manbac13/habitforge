import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  // FormControlLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { registerSchema } from "./schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useAuth from "@/features/auth/authHook";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "@/utils/notify/notify";

const labelStyle = {
  fontWeight: 500,
  fontSize: "14px",
};

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { registerAction, loginAction, loading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const res = await registerAction(formData).unwrap();
      if (res.success) {
        await loginAction({
          email: formData.email,
          password: formData.password,
        }).unwrap();
        notify({ message: res.message, severity: "success" });
        navigate("/");
      }
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
            minWidth: { xs: "80%", sm: "60%", md: "70%", lg: "45%" },
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h4" align="center">
              Create an account
            </Typography>
            <Stack spacing={2}>
              <Stack spacing={0.5}>
                <FormLabel sx={{ ...labelStyle }}>Name</FormLabel>
                <TextField
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  size="small"
                  placeholder="e.g. John Doe"
                />
              </Stack>

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
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  size="small"
                  placeholder="Enter your password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
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
                Create an account
              </Button>
              <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ textDecorationColor: theme.palette.warning.dark }}
                >
                  <span
                    style={{
                      cursor: "pointer",
                      color: theme.palette.warning.dark,
                    }}
                  >
                    Sign in
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

export default Register;
