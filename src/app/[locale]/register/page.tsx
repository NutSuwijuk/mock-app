"use client"

import MTextField from '@/components/MTextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material';
import { useState } from 'react';

const RegisterPage = () => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Registering with data:', formData);
  // };

  return (
    <div className="register-container">
      {/* <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form> */}

      <Box
        sx={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem", // Add gap between columns
          padding: "2rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "10vh",
          border: "1px solid #eee",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography variant='h5' sx={{ fontSize: "2rem", fontWeight: 500 }}>
          Register
        </Typography>
        <MTextField
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          fullWidth
          margin="normal"
          required
        ></MTextField>
        <MTextField
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          fullWidth
          margin="normal"
          required
        ></MTextField>
        <MTextField
          type={isPasswordShown ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter your password"
          fullWidth
          margin="normal"
          required
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
        ></MTextField>
        <Button fullWidth variant="contained" type="submit">Register</Button>
      </Box>
    </div>
  );
};

export default RegisterPage;