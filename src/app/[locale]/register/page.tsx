"use client"

import LogoImage from '@/components/login/LogoImage';
import MTextField from '@/components/MTextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {
  const t = useTranslations("AuthPage");

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

    // เช็คว่าทั้งสองฟิลด์มีค่าหรือไม่
    const isFormValid = username.trim() !== "" && email.trim() !== "" && password.trim() !== "";

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
          {t("Register")}
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
          label={t("Email")}
          margin="normal"
          variant="outlined"
          required
          value={email}
          onChange={handleEmailChange}
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

        <Button
          fullWidth
          variant="contained"
          type="button"
          // onClick={handleRegister}
          disabled={!isFormValid}
          sx={{
            mt: 2,
            mb: { xs: 2, md: 3 }, // ปรับ margin bottom ตามขนาดหน้าจอ
          }}
        >
          {t("Register")}
        </Button>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography sx={{ lineHeight: 2.5 }}>
            {t("HaveAnAccount")}
          </Typography>
          <Typography  component={Link}
            href="/login"
            color="primary" sx={{ lineHeight: 2.5 }}>
            {t("Login")}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default RegisterPage;