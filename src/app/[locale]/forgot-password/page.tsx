"use client"

import MTextField from "@/components/MTextField";
import { Email } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const mockData = {
    title: "Forgot Password",
    description: "Please enter your email address to receive a password reset link.",
    emailPlaceholder: "Enter your email",
    submitButtonText: "Send Reset Link"
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "10vh",
        border: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: 500 }}>{mockData.title}</Typography>
      <MTextField
        type="email" 
        fullWidth 
        placeholder={mockData.emailPlaceholder}
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <Button fullWidth variant="contained" type="button" onClick={handleSubmit}>{mockData.submitButtonText}</Button>
    </Box>
  );
}
export default ForgotPasswordPage