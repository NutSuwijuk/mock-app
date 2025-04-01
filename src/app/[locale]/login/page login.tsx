import MTextField from "@/components/MTextField";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  return (
    <>
    <Box sx={{  top: "1rem", right: "1rem" }}>
        <Box
        sx={{
          padding: "2rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "10vh",
          border: "1px solid #eee",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          // borderRadius: "4px",
        }}
      >
        <Stack spacing={2} useFlexGap>
      <Typography variant="h5" sx={{ fontSize: "2rem", fontWeight: 500 }}>
        เข้าสู่ระบบ
      </Typography>
      <MTextField
        required
        type="username"
        label="ชื่อผู้ใช้งาน"
        placeholder="ชื่อผู้ใช้งาน"
        variant="outlined"
        fullWidth
        id="username"
        name="username"
        margin="normal"
      ></MTextField>
      <MTextField
        type="password"
        label="รหัสผ่าน"
        placeholder="******"
        name="password"
        fullWidth
        id="password"
        // autoComplete='current-password'
        required
        variant="outlined"
        margin="normal"
      ></MTextField>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="จำฉันไว้"
        sx={{
          marginLeft: "-12px",
          "& .MuiFormControlLable-lable": { userSelect: "none" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        Login
      </Button>
      <Box textAlign="center">
        <Link href="/forgot-password" variant="body2" color="primary">
          Forgot Password?
        </Link>
      </Box>
      <Box textAlign="center" marginTop={1}>
        <Link href="/register" variant="body2" color="primary">
          Don't have an account? Register
        </Link>
      </Box>
      </Stack>
      </Box>
    </Box>
    </>

  );
};
export default LoginPage;
