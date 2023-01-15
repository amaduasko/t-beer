import { config } from '@/config';
import { TBeer } from '@/types/beer';
import ky from 'ky-universal';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TBeer | {}>
) {
  try {
    const { id = '' } = req.query;
    const uri = config.NEXT_API_URI + id;
    const data = id ? await ky(uri).json() : {};
    res.status(200).json(data as TBeer);
  } catch (error) {
    res.status(404).json({});
  }
}
