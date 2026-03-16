import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import Design from './Components/Design/Design'
import Users from './Components/Users/Users'
import Started from './Components/Started/Started'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Section />
    <Design />
    <Users />
    <Started />
    <Footer />
    </>
  )
}

export default App;