import Filters from '@/components/Header/Hotels/FIlters/Filters';
import HotelsList from '@/components/Header/Hotels/HotelsList/HotelsList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
  return (
    <Container>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Filters />
        </Grid>
        <Grid item xs={12}>
          <HotelsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
