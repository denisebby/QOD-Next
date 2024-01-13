import React from 'react'
import Head from 'next/head'

import NavbarInteractive from '../components/navbar-interactive'
import Description from '../components/description'
import ResponsiveContainer from '../components/responsive-container'
import AnswerChoices from '../components/answer-choices'
import Stats from '../components/stats'
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
        <Description rootClassName="description-root-class-name"></Description>
        <ResponsiveContainer rootClassName="responsive-container-root-class-name"></ResponsiveContainer>
        <AnswerChoices rootClassName="answer-choices-root-class-name"></AnswerChoices>
        <Stats rootClassName="stats-root-class-name"></Stats>
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
