import { useState, useEffect, useCallback } from 'react';
import ky from 'ky-universal';
import { TBeers } from '@/types/beer';

type TVariables = {
  limit?: number;
  page?: number;
  beerName?: string;
  skip?: boolean;
};

type TInfos = {
  data: TBeers;
  error: null | string;
  loading: boolean;
};

const url = '/api/beers';

export const useFetchBeers = ({
  limit = 10,
  page = 1,
  beerName = '',
  skip = false,
}: TVariables) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState<any | null>(null);
  // const [error, setError] = useState('');
  const [info, setInfo] = useState<TInfos>({
    data: [],
    error: null,
    loading: false,
  });

  const setDefaultPreset = () =>
    setInfo({ data: [], loading: false, error: null });

  const setDefaultPresetWithLoading = () =>
    setInfo({ data: [], loading: true, error: null });

  const fetchBeer = useCallback(async () => {
    if (skip) {
      setDefaultPreset();
      return;
    }
    try {
      setDefaultPresetWithLoading();
      const result = await ky(
        `${url}?beerName=${beerName}&page=${page}&limit=${limit}`
      ).json();
      if (result) {
        setInfo({ data: result as TBeers, loading: false, error: null });
      }
    } catch (error) {
      if (error instanceof Error)
        setInfo({ data: [], loading: false, error: error?.message });
    }
  }, [beerName, limit, page]);

  useEffect(() => {
    fetchBeer();
  }, [beerName, page]);

  return info;
};
