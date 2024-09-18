import { useState } from 'react'
import Header from '../components/Header.jsx'
import Content from '../components/Content.jsx'
import Footer from '../components/Footer.jsx'
import './App.css'



function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
