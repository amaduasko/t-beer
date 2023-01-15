import { Box, Button, Paper, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { sx } from './style';
import { TBeer } from '@/types/beer';
import { FC } from 'react';
import { getDescription } from './helpers';

const Card: FC<{
  item: TBeer;
  onClick?: () => void;
  fullView?: boolean;
}> = ({ item, onClick, fullView }) => {
  return fullView ? (
    <Paper sx={sx(fullView).paper} elevation={5}>
      <Box sx={sx(fullView).card}>
        <Box sx={sx(fullView).cardImage}>
          <img
            alt={item.name + ' picture'}
            title={item.name + ' picture'}
            src={item.image_url}
          />
        </Box>

        <Box sx={sx(fullView).detailsBox}>
          <Typography color='white' variant='h5' component='h3'>
            <strong>Name: </strong>
            {item.name}
          </Typography>
          <Typography
            color='white'
            variant='caption'
            component='span'
            display='block'
          >
            <Typography variant='h6' component='span'>
              Abv:
            </Typography>
            {item.abv || '~'}%
          </Typography>
          <Typography
            color='white'
            variant='caption'
            component='span'
            display='block'
          >
            <Typography variant='h6' component='span'>
              Tagline:{' '}
            </Typography>
            {item.tagline}
          </Typography>
          <Typography
            color='white'
            variant='caption'
            component='span'
            display='block'
          >
            <Typography variant='h6' component='span'>
              Food Paring:{' '}
            </Typography>
            {item.food_pairing?.join(', ')}
          </Typography>
          <Typography
            color='white'
            variant='caption'
            component='span'
            display='block'
          >
            <Typography variant='h6' component='span'>
              Description:{' '}
            </Typography>
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  ) : (
    <Paper sx={sx(fullView).paper} elevation={5}>
      <Box sx={sx(fullView).card}>
        <Box sx={sx(fullView).cardImage}>
          <img
            alt={item.name + ' picture'}
            title={item.name + ' picture'}
            src={item.image_url}
          />
        </Box>
        <Box sx={sx(fullView).cardDetails}>
          <Typography color='white' variant='h5' component='h3'>
            {item.name}
          </Typography>
          <Typography color='white' variant='caption' component='span'>
            {getDescription(item.description)}
          </Typography>
        </Box>
        <Button
          sx={sx(fullView).cardBtn}
          variant='contained'
          fullWidth
          onClick={onClick}
        >
          details <LaunchIcon fontSize='small' />
        </Button>
      </Box>
    </Paper>
  );
};

export default Card;
