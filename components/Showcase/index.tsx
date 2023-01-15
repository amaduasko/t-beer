import { TBeers } from '@/types/beer';
import { Box, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Card from '../Card';
import { sx } from './style';
import { useRouter } from 'next/router';

const Showcase: FC<{ items: TBeers; loading?: boolean }> = ({
  items,
  loading,
}) => {
  const router = useRouter();

  const handleDetails = (id: number) => {
    router.push(`/beer/${id}`);
  };

  return (
    <Paper sx={sx.paper} elevation={4}>
      {loading || items.length === 0 ? (
        <Box sx={sx.loader}>
          {!loading && items.length === 0 ? (
            <>
              sorry, no
              <SportsBarIcon />
              ...
            </>
          ) : (
            <CircularProgress
              sx={{
                color: '#1976d2 !important',
              }}
            />
          )}
        </Box>
      ) : (
        <Grid container justifyContent='space-evenly' spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} item>
              <Card item={item} onClick={() => handleDetails(item.id)} />
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Showcase;
