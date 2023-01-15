import Search from '@/components/Search';
import Showcase from '@/components/Showcase';
import { useFetchBeers } from '@/hooks/useFetchBeers';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Pagination from '../../Pagination';
import { sx } from './style';

const Home = () => {
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState('');
  const { data, loading } = useFetchBeers({
    limit: 7,
    page,
    beerName,
    skip: !beerName,
  });

  const pageCount = data ? data.length / 6 : null;

  const handleNextPage = () => setPage(page + 1);

  const handlePreviewPage = () => setPage(page > 1 ? page - 1 : 1);

  const handleSearch = (value: string) => {
    if (!value) {
      setPage(1);
    }
    setBeerName(value);
  };

  return (
    <Paper
      elevation={4}
      sx={sx.paper}
      className='animate__animated animate__pulse'
    >
      <Search onSearch={handleSearch} />
      <Showcase loading={loading} items={data.slice(0, 6)} />
      {((page > 1 || (pageCount && pageCount > 1)) && (
        <Pagination
          page={page}
          onNextPage={handleNextPage}
          onPreviewPage={handlePreviewPage}
        />
      )) ||
        null}
    </Paper>
  );
};

export default Home;
