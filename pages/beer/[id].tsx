import Head from 'next/head';
import ky from 'ky-universal';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styles from '@/styles/Home.module.css';

import { TBeers } from '@/types/beer';
import { FC } from 'react';
import { config } from '@/config';
import Beer from '@/components/Layout/Beer';

interface IProps {
  beers?: TBeers;
}

const Index: FC<IProps> = ({ beers = [] }) => {
  const beer = beers[0];
  return (
    <>
      <Head>
        <title>{beer?.name}</title>
        <meta name='description' content={beer?.name} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>{beer && <Beer beer={beer} />}</main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { id } = params as ParsedUrlQuery & { id?: string };

  const url = `${config.NEXT_API_URI}/${id}`;

  const beers: TBeers | [] = await ky(url).json();
  if (!id) {
    return {
      redirect: {
        destination: '/',
      },
      props: {
        beers,
      },
    };
  }
  return {
    props: { beers },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default Index;
