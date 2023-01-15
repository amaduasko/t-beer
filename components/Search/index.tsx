import { Button, Paper, TextField, Typography } from '@mui/material';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ClearIcon from '@mui/icons-material/Clear';
import { sx } from './style';
import useDebouncedSearch from '@/hooks/useDebouncedSearch';

const Search = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const useSearch = () => useDebouncedSearch((text) => onSearch(text));

  const { inputValue: value, setInputValue: setValue } = useSearch();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleClearValue = () => setValue('');

  return (
    <form onSubmit={handleFormSubmit} onReset={handleClearValue}>
      <Paper sx={sx.paper} elevation={4}>
        <Typography component='span'>
          <SportsBarIcon style={sx.icon} />
        </Typography>
        <TextField
          sx={sx.field}
          onChange={handleChange}
          size='small'
          placeholder='Пишите что нибудь...'
          fullWidth
        />
        {value && (
          <Button
            sx={sx.formBtn}
            color='error'
            variant='contained'
            type='reset'
            aria-label='clear'
          >
            <ClearIcon fontSize='large' />
          </Button>
        )}
      </Paper>
    </form>
  );
};

export default Search;
