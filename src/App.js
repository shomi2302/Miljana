import React from 'react';
import './App.css';
// import {firestore, exhibitions} from './firebase/firebase'
import paintings from './data/paintings_data'
import Navbar from './sections/navbar/navbar'
import Home from './sections/home/home'
import Work from './sections/work/work'
import Contact from './sections/contact/contact'
import Slider from './sections/gallery/gallery'

class App extends React.Component {
  state = {
    paintings
  }


  render(){
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Work paintings={this.state.paintings} />
        <Slider />
        <Contact />
      </div>
    );
  }

}

export default App;
