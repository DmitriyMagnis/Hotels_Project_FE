import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchAllHotels, selectHotels } from '@/redux/slices/hotels';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { generateImageUrl } from '@/utils/helpers';

const HotelsList = () => {
  const hotels = useAppSelector(selectHotels);

  return (
    <Grid container spacing={1}>
      {hotels.map(hotel => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <Card>
            <CardHeader
              //   action={
              //     <IconButton aria-label="settings">
              //       <MoreVertIcon />
              //     </IconButton>
              //   }
              title={hotel.name}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={generateImageUrl(hotel.image)}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button size="small" variant="contained" sx={{ color: 'white' }}>
                DETAILS
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HotelsList;
