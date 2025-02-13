import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ApiDocs from "../components/ApiDocs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>JC Web API - Powerful API Backend</title>
        <meta name="description" content="A robust backend API for real-time applications." />
      </Head>
      <Hero />
      <Features />
      <ApiDocs />
      <Footer />
    </div>
  );
}
