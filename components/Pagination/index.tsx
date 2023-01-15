import { Paper, Button, IconButton } from '@mui/material';
import { FC } from 'react';
import { sx } from './style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type TPagination = {
  page: number;
  onNextPage: () => void;
  onPreviewPage: () => void;
};

const Pagination: FC<TPagination> = ({
  page = 1,
  onPreviewPage,
  onNextPage,
}) => {
  return (
    <Paper
      elevation={4}
      sx={sx.paper}
      className='animate__animated animate__pulse'
    >
      {page > 1 && (
        <IconButton color='primary' sx={sx.leftBtn} onClick={onPreviewPage}>
          <ChevronLeftIcon />
        </IconButton>
      )}
      <Button
        component='span'
        sx={sx.btn}
        color='primary'
        variant='contained'
        size='small'
      >
        {page}
      </Button>

      <IconButton color='primary' sx={sx.rightBtn} onClick={onNextPage}>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
};

export default Pagination;
