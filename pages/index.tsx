import React from 'react'
import Head from 'next/head'
import PageTitle from '../components/PageTitle'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <PageTitle>All Walks</PageTitle>
  </div>
)

export default Home
