import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Applications Developer</title>
        <meta property="og:title" content="Internal Applications Developer" />
      </Helmet>
    </div>
  )
}

export default Home
