import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({setSearch,openVoiceSearch}) => {
  return (
    <>
       <Navbar />
       <HomeScreen setSearch={setSearch} openVoiceSearch={openVoiceSearch} />


    </>
  )
}

export default Home
