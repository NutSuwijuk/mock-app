'use client';

import Layout from '@/components/Layout';
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        หน้าหลักของระบบจัดการเนื้อหา (CMS)
      </Typography>
      <Typography>
        ยินดีต้อนรับเข้าสู่แผงควบคุมของคุณ คุณสามารถจัดการเนื้อหาได้จาก Sidebar
      </Typography>
    </Layout>
  );
}
