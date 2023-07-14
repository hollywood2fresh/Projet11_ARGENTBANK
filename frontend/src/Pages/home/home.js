import React from 'react'
import './home.scss'
import NavBar from '../../Containers/navBar/navBar'
import Banner from '../../Containers/banner/banner'
import Features from '../../Containers/features/features'

export default function Home() {
  return (
    <>
      <NavBar/>
      <main>
        <Banner/>
        <Features/>
      </main>
    </>
  )
}
