import React, { useState } from 'react';
import './App.css';
import paintingsData from './data/paintings_data'
import Navbar from './components/navbar/navbar'
import Home from './sections/home/home'
import Work from './sections/work/work'
import Contact from './sections/contact/contact'
import Bio from './sections/bio/bio'

function App() {

  const [ data ] = useState(paintingsData.exhibition)

  let exhibition = data.map((paintings,i)=> {
    return (<Work key={i} paintings={paintings} />)
  })

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Bio />
      {exhibition}
      <Contact />
    </div>
  );


}

export default App;
