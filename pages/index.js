import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home({results}) {

  const router = useRouter();

  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Nav/>
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = `fetch${context.query.genre}`;
  const page = context.query.page || 1;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}&page=${page}`)
  .then(res => res.json());
  
  return {
    props: {
      results: request.results,
    }
  };
}
