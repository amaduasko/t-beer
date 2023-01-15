import Card from '@/components/Card';
import { TBeer } from '@/types/beer';
import { Paper } from '@mui/material';
import { FC } from 'react';
import { sx } from './style';

interface IProps {
  beer: TBeer;
}

const Beer: FC<IProps> = ({ beer }) => {
  return beer && Object.keys(beer).length > 0 ? (
    <Paper
      elevation={4}
      sx={sx.paper}
      className='animate__animated animate__pulse'
    >
      <Card fullView item={beer as TBeer} />
    </Paper>
  ) : null;
};

export default Beer;
