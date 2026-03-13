import type { NextPage } from 'next';
import Head from 'next/head';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Classes } from '../components/Classes';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <Features />
      <Classes />
      <About />
      <Contact />
    </div>
  );
};

export default Home;