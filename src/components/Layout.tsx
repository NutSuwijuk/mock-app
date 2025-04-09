'use client';


import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = 240;
const appBarHeight = 64;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main
        style={{
          marginTop: appBarHeight,
          marginLeft: drawerWidth,
          padding: '16px',
          backgroundColor: '#f4f4f4',
          minHeight: `calc(100vh - ${appBarHeight}px)`,
        }}
      >
        {children}
      </main>
    </>
  );
}
