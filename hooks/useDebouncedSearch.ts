import { useState } from 'react';
import { useAsync } from 'react-async-hook';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';

const useDebouncedSearch = (searchFunction: (text: string) => void) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 500)
  );

  const searchResults = useAsync(
    async () => debouncedSearchFunction(inputValue),
    [debouncedSearchFunction, inputValue]
  );

  return {
    inputValue,
    setInputValue,
    searchResults,
  };
};

export default useDebouncedSearch;
