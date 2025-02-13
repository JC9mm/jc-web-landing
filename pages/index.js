import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ApiDocs from '../components/ApiDocs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JC Web API - Landing</title>
      </Head>
      <Hero />
      <Features />
      <ApiDocs />
      <Footer />
    </div>
  );
}