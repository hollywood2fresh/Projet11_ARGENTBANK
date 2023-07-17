import React from 'react'
import './home.scss'

import NavBar from '../../components/navBar/navBar'
import Banner from '../../components/banner/banner'
import Features from '../../containers/features/features'
import Footer from '../../components/footer/footer'

export default function Home() {
  return (
    <>
        <NavBar/>
        <main>
          <Banner/>
          <Features/>
        </main>
        <Footer/>
    </>
  )
}
