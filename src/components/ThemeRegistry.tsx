"use client"; // บอก Next.js ว่านี่เป็น Client Component

import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme();

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}