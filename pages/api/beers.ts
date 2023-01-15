import { config } from '@/config';
import { TBeers } from '@/types/beer';
import ky from 'ky-universal';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TBeers | null>
) {
  try {
    const { beerName = '', page = 1, limit = 10 } = req.query;
    const uri = `${config.NEXT_API_URI}${
      beerName ? `?beer_name=${beerName}&` : '?'
    }page=${page}&per_page=${limit}`;
    const data = beerName ? await ky(uri).json() : [];
    res.status(200).json(data as TBeers);
  } catch (error) {
    res.status(404).json([]);
  }
}
