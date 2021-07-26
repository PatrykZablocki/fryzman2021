import Layout from './Layout/Layout'

import HeroSection from './components/HeroSection/HeroSection'
import InfoSection from './components/InfoSection/InfoSection';
import PriceListSection from './components/PriceListSection/PriceListSection';
import Footer from './components/Footer/Footer'
import React from 'react'

const App = () => {
  return (
    <Layout>
      <HeroSection />
        <InfoSection  />
      <PriceListSection />
      <Footer />
    </Layout>
  )
}

export default App;
