'use client';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';
import { menuItems } from './menuItems';
import Image from "next/image"

const drawerWidth = 240;
const appBarHeight = 64;

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: `${appBarHeight}px`,
          height: `calc(100vh - ${appBarHeight}px)`,
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <img src="/images/hos.jpg" alt="Logo" style={{ width: '80%', objectFit: 'contain' }} />
      </Box>
      <List component="nav">
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          return (
            <div key={item.label}>
              <ListItemButton
                onClick={() => (hasChildren ? handleToggle(item.label) : null)}
                component={item.path && !hasChildren ? Link : 'div'}
                href={item.path || '#'}
              >
                <ListItemText primary={item.label} />
                {hasChildren ? (
                  openMenus[item.label] ? <ExpandLess /> : <ExpandMore />
                ) : null}
              </ListItemButton>

              {hasChildren && (
                <Collapse in={openMenus[item.label]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children!.map((subItem) => (
                      <ListItemButton
                        key={subItem.label}
                        sx={{ pl: 4 }}
                        component={Link}
                        href={subItem.path || '#'}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </Drawer>
  );
}
