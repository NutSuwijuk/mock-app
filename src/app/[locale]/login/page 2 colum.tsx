import { Box, Paper } from "@mui/material"

const LoginPage = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Paper>Header</Paper>
      <Box display="flex" gap={2}>
        <Box flex={1}>
          <Paper>Left Content</Paper>
        </Box>
        <Box flex={1}>
          <Paper>Right Content</Paper>
        </Box>
      </Box>
      <Paper>Footer</Paper>
    </Box>
  )
}
export default LoginPage