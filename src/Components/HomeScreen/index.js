import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({setSearch}) => {
  return (
    <>
       <Navbar />
       <HomeScreen setSearch={setSearch}/>


    </>
  )
}

export default Home
