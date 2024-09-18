import { useState } from 'react'
import Header from '../components/Header.jsx'
import './App.css'

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

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
