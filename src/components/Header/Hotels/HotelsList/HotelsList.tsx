import { useAppSelector } from '@/redux/hooks';
import { selectHotels } from '@/redux/slices/hotels';
import { ExpandMore } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import { generateImageUrl } from '@/utils/helpers';

const HotelsList = () => {
  const hotels = useAppSelector(selectHotels);
  console.log(hotels);
  return (
    <Grid container>
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
