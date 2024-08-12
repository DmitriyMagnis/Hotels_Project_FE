import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchAllCities, selectCities } from '@/redux/slices/cities';
import type { IFilters } from '@/appTypes';
import { fetchAllHotels } from '@/redux/slices/hotels';

const Filters = () => {
  const destinations = useAppSelector(selectCities);
  const dispatch = useAppDispatch();
  const [filters, setFilter] = useState<IFilters>({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    rooms: '',
  });
  //   const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log(filters);
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(state => ({ ...state, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    dispatch(fetchAllCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllHotels(filters));
  }, [filters, dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component={Paper}
        px={2}
        py={1}
        sx={{
          paddingBottom: 2,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'flex-end',
        }}
      >
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="age-id">Destination</InputLabel>
          <Select
            size="small"
            labelId="age-id"
            id="age"
            name="destination"
            value={filters.destination}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {destinations.map(city => (
              <MenuItem key={city.id} value={city.id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <DateRangePicker
            slotProps={{ textField: { variant: 'standard' } }}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="adults-label">Adults</InputLabel>
          <Select
            size="small"
            labelId="adults-label"
            id="adults"
            name="adults"
            value={filters.adults}
            onChange={handleChange}
            label="Adults"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="children-label">Children</InputLabel>
          <Select
            size="small"
            labelId="children-label"
            id="children"
            name="children"
            value={filters.children}
            onChange={handleChange}
            label="Children"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <Button
            onClick={() => dispatch(fetchAllHotels(filters))}
            size="small"
            variant="contained"
            sx={{ color: 'white' }}
          >
            Search
          </Button>
        </FormControl>
      </Box>
    </LocalizationProvider>
  );
};

export default Filters;
