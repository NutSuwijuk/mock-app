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

const LoginPage = () => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const Img = '@/path/image/hos.jpg'

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem", // Add gap between columns
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "10vh",
        border: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="Img" alt="Login Illustration" style={{ maxWidth: "100%" }} />
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <MTextField
          fullWidth
          label="ชื่อผู้ใช้งาน"
          margin="normal"
          variant="outlined"
          required
        ></MTextField>
        <MTextField
          fullWidth
          label="รหัสผ่าน"
          type={isPasswordShown ? "text" : "password"}
          margin="normal"
          variant="outlined"
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
        />
        <div className="flex justify-between items-center gap-x-3 gap-y-1 flex-wrap">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Typography
            className="text-end"
            color="primary"
            component={Link}
            href="/forgot-password"
          >
            Forgot password?
          </Typography>
        </div>
        <Button fullWidth variant="contained" type="submit">
          Log In
        </Button>
        <div className="flex justify-center items-center flex-wrap gap-2">
          <Typography>New on our platform?</Typography>
          <Typography component={Link} href="/register" color="primary">
            Create an account
          </Typography>
        </div>
      </Box>
    </Box>
  );
};
export default LoginPage;
//     <div >
        
//       <MTextField
//         fullWidth
//         label="ชื่อผู้ใช้งาน"
//         margin="normal"
//         variant="outlined"
//         required
//       ></MTextField>
//       <MTextField
//         fullWidth
//         label="รหัสผ่าน"
//         type={isPasswordShown ? "text" : "password"}
//         margin="normal"
//         variant="outlined"
//         required
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton
//                 onClick={togglePasswordVisibility}
//                 onMouseDown={handleMouseDown}
//                 edge="end"
//               >
//                 {isPasswordShown ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//       <div className="flex justify-between items-center gap-x-3 gap-y-1 flex-wrap">
//         <FormControlLabel control={<Checkbox />} label="Remember me" />
//         <Typography
//           className="text-end"
//           color="primary"
//           component={Link}
//           href="/forgot-password"
//         >
//           Forgot password?
//         </Typography>
//       </div>
//       <Button fullWidth variant="contained" type="submit">
//         Log In
//       </Button>
//       <div className="flex justify-center items-center flex-wrap gap-2">
//         <Typography>New on our platform?</Typography>
//         <Typography component={Link} href="/register" color="primary">
//           Create an account
//         </Typography>
//       </div>
//     </div>
//   );
// };
// export default LoginPage;
