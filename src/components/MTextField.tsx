import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export default function MTextField(props: TextFieldProps) {
  return <TextField sx={{
    "& .MuiInputLabel-formControl.Mui-focused:not(.Mui-disabled, .Mui-error)": {
      color: "var(--color-primary)"
    },
    "& .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline , .MuiInputBase-root:not(.Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary)"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-secondary)"
    },
    "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before , .MuiFilledInput-root:not(.Mui-disabled, .Mui-error):before ": {
      borderBottom: "1px solid var(--color-secondary)",
    },
    "& .MuiFilledInput-root:not(.Mui-disabled, .Mui-error)::after": {
      borderColor: "var(--color-primary)"
    },
    "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: "1px solid var(--color-secondary)",
    },
    "& .MuiInputBase-root.MuiInput-root:not(.Mui-disabled, .Mui-error)::after": {
      borderColor: "var(--color-primary)"
    }
  }}{...props} />;
}