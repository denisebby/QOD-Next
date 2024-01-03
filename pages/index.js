import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>QOD</title>
          <meta property="og:title" content="QOD" />
        </Head>
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
