// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { mockNut } from '../mockAPI';
// import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

// const NutSchema = z.object({
//   username: z.string().min(1, 'Username is required'),
//   password: z.string().min(1, 'Password is required'),
// });

const Nut = () => {
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: zodResolver(NutSchema),
  // });
  // const router = useRouter();

  // const onSubmit = (data) => {
  //   const response = mockNut(data);
  //   if (response.success) {
  //     router.push('/dashboard');
  //   } else {
  //     alert(response.message);
  //   }
  // };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>Nut</Typography>
      <form>
        <TextField
          // {...register('username')}
          label="Username"
          fullWidth
          // error={!!errors.username}
          // helperText={errors.username?.message}
          margin="normal"
        />
        <TextField
          // {...register('password')}
          label="Password"
          type="password"
          fullWidth
          // error={!!errors.password}
          // helperText={errors.password?.message}
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Nut
        </Button>
      </form>
    </Box>
  );
};

export default Nut;
