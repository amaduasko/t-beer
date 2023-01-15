import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import HomeComponent from '@/components/Layout/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Find a Beer</title>
        <meta name='description' content='Find something to drink, why not ?' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <HomeComponent />
      </main>
    </>
  );
}
