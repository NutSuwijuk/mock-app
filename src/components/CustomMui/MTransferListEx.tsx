
"use client";
import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import MTransferList from '../MTransferList';

export default function MTextFieldEx() {
  const dataMain = [
    {
      name:"ไม่ต้องตรวจสุขภาพ",
      code:"G001"
    },
    {
      name:"ผู้ป่วยใน",
      code:"G002"
    },
    {
      name:"ค่าห้อง",
      code:"G003"
    },
    {
      name:"เหมาจ่าย",
      code:"G004"
    },
    {
      name:"ลดหย่อนภาษี",
      code:"G005"
    },
    {
      name:"คุ้มครองกรณีเสียชีวิต",
      code:"G006"
    },
    {
      name:"เงินชดเชยรายวัน",
      code:"G007"
    },
    {
      name:"ค่ารักษาพยาบาลแบบเหมาจ่าย",
      code:"G008"
    },
  ]
  const [dataNotSelect, setDataNotSelect] = useState<string[]>(["G001","G002","G003","G004"]);
  const [dataSelect, setDataSelect] = useState<string[]>(["G005","G006","G007"]);

  return (
    <Fragment>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <MTransferList 
          dataMain={dataMain} 
          dataSelect={dataSelect} 
          dataNotSelect={dataNotSelect} 
          actionSelect={(selected: string[]) => setDataSelect(selected)}
          actionNotSelect={(selected: string[]) => setDataNotSelect(selected)}
          />
        </div>
      </Box>
    </Fragment>

  );
}