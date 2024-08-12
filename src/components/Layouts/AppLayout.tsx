import { Box, Toolbar } from '@mui/material';
import type { PropsWithChildren } from 'react';
import Header from '@components/Header/Header';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
