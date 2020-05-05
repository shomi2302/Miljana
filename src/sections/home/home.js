import React from "react";
import './home.css'
import heroimg from './home-img.jpg';


const Home = () => {

  return (
  <div id="home" className="home">
    <div className="main-block">
      <div className="content-block">
        <div className="cb">
          <h1>
            Hi, I am <span>Miljana</span>
          </h1>
          <p>
            I am a visual artist from Serbia. I graduated applied painting at
            the Faculty of Applied arts at The University of Arts in Belgrade,
            Serbia. I live, work and explore in the Middle East.
          </p>
        </div>
      </div>
      <div className="image-block">
        <div>
          <img src={heroimg} alt="portfolio img" />
        </div>
      </div>
    </div>
  </div>
)};

export default Home;
