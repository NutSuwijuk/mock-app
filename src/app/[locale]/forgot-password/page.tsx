"use client"

import LogoImage from "@/components/login/LogoImage";
import MTextField from "@/components/MTextField";
import { Email } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const t = useTranslations("AuthPage");

  const mockData = {
    title: "Forgot Password",
    description: "Please enter your email address to receive a password reset link.",
    emailPlaceholder: "Enter your email",
    submitButtonText: "Send Reset Link"
  };

  const [email, setEmail] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
  };
  
  const isFormValid = email.trim() !== "";

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
          {t("ForgotPassword")}
        </Typography>
        <MTextField
          fullWidth
          label={t("Email")}
          margin="normal"
          variant="outlined"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          fullWidth
          variant="contained"
          type="button"
          // onClick={handleForgotPassword}
          disabled={!isFormValid}
          sx={{
            mt: 2,
            mb: { xs: 2, md: 3 }, // ปรับ margin bottom ตามขนาดหน้าจอ
          }}
        >
          {t("ResetPassword")}
        </Button>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
export default ForgotPasswordPage