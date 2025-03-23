import React from 'react'
import Header from '../components/Header'
import SponserSection from '../components/SponserSection'
import ComparisionCards from '../components/ComparisionCards'
import JustLaunched from '../components/JustLaunched'
import TrendingSection from '../components/TrendingSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <SponserSection/>
      <ComparisionCards/>
      <JustLaunched/>
      <TrendingSection/>
    </div>
  )
}

export default Home