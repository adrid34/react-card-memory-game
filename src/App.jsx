import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'

const MAIN_URL =  'https://api.pexels.com/v1/search?query=nature';
const getRandomPage = () => ( Math.round(Math.random() * (10 -1) + 1 ))  // get random 10 pages


function App() {

  const constructURL = function() {

    let url = new URL(MAIN_URL);

    url.search = new URLSearchParams( {
      query: 'nature',
      orientation: 'portrait',
      size: 'small',
      per_page: '2',
      page: getRandomPage(),
    } ) 

    return url;

  }


  fetch(constructURL(), {

    headers: {
      Authorization: import.meta.env.VITE_REACT_API_AUTH_KEY,
    }
  
  })



  return (
    
    <>
      
      <Background />
    </>
  )
}

export default App
