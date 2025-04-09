'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles'; // Import useTheme

export default function Navbar() {
  const theme = useTheme(); // Get the theme
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // จำลองชื่อผู้ใช้
  const username = 'John Doe';

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1, 
        backgroundColor: '#1976d2',
        // height: '50px', // ลดความสูงของ Navbar
        marginLeft: '240px', // กำหนด margin ซ้าย 240px ให้ Navbar
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0, // ปรับให้ไม่มี margin ซ้ายในหน้าจอเล็ก
        },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          CMS Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          {/* แสดงชื่อผู้ใช้แทน Avatar */}
          <Button color="inherit" onClick={handleMenu}>
            {username}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
