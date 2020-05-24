import React from "react";
import Painting from "../../components/painting/painting";
import Gallery from "../gallery/gallery"
import "./work.css";

const Work = ({paintings}) => {
  const paintingsMap = paintings.paintings.map((painting, i) => {
    return <Painting key={i} painting={painting} />;
  });




  return (
    <section id="work" className="container work-section">
      <div className="selected-work">
        <p>Selected Works</p>
      </div>
      {paintingsMap}
      <Gallery gallery={paintings.gallery}/>
    </section>
  );
};

export default Work;
