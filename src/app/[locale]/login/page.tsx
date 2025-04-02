"use client";
import React, { useState } from "react";
import MTextField from "@/components/MTextField";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
// import imd from "@/path/images/hos.jpg";
import { useRouter } from "next/navigation"; // Use next/navigation for client components
import { useTranslations } from "next-intl";
import LogoImage from "@/components/login/LogoImage";

// Mock data for login credentials
const mockUserData = {
  email: "user@example.com",
  password: "password123",
};

const LoginPage = () => {
  const t = useTranslations("AuthPage");

  const router = useRouter(); // Initialize useRouter
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === mockUserData.email && password === mockUserData.password) {
      console.log("Login successful");
      router.push("/Test");
    }
  };

  // เช็คว่าทั้งสองฟิลด์มีค่าหรือไม่
  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "1rem", md: "2rem" }, // ปรับ gap ตามขนาดหน้าจอ
        padding: { xs: "1rem", md: "2rem" }, // ปรับ padding ตามขนาดหน้าจอ
        maxWidth: "800px",
        width: { xs: "95%", md: "800px" }, // ปรับความกว้างตามขนาดหน้าจอ
        margin: "auto",
        marginTop: { xs: "5vh", md: "10vh" }, // ปรับ margin top ตามขนาดหน้าจอ
        border: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
      }}
    >
      <Box
        sx={{
          flex: { xs: "none", md: 1 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <LogoImage></LogoImage>
      </Box>
      <Box
        sx={{
          flex: { xs: "none", md: 1 },
          width: { xs: "100%", md: "auto" }, // ปรับความกว้างตามขนาดหน้าจอ
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" }, // ปรับขนาดตัวอักษรตามขนาดหน้าจอ
            fontWeight: 500,
            textAlign: { xs: "center", md: "left" }, // ปรับการจัดวางตัวอักษรตามขนาดหน้าจอ
          }}
        >
          {t("Login")}
        </Typography>
        <MTextField
          fullWidth
          label={t("Username")}
          margin="normal"
          variant="outlined"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <MTextField
          fullWidth
          label={t("Password")}
          type={isPasswordShown ? "text" : "password"}
          margin="normal"
          variant="outlined"
          required
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  onMouseDown={handleMouseDown}
                  edge="end"
                >
                  {isPasswordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <FormControlLabel control={<Checkbox />} label={t("RememberMe")} />
          <Typography color="primary" component={Link} href="/forgot-password" sx={{ lineHeight: 2.5 }}>
            {t("ForgotPassword")}
          </Typography>
        </div>
        <Button
          fullWidth
          variant="contained"
          type="button"
          onClick={handleLogin}
          disabled={!isFormValid}
          sx={{
            mt: 2,
            mb: { xs: 2, md: 3 }, // ปรับ margin bottom ตามขนาดหน้าจอ
          }}
        >
          {t("Login")}
        </Button>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography sx={{ lineHeight: 2.5 }}>
            {t("DoNotHaveAnAccount")}
          </Typography>
          <Typography  component={Link}
            href="/register"
            color="primary" sx={{ lineHeight: 2.5 }}>
            {t("Register")}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
export default LoginPage;
