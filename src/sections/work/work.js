import React from "react";
import Painting from "../../components/painting/painting";
import "./work.css";

const Work = ({paintings}) => {
  const paintingsMap = paintings.map((painting, i) => {
    return <Painting key={i} painting={painting} />;
  });

  return (
    <section id="work" className="container work-section">
      <div className="selected-work">
        <p>Selected Works</p>
      </div>
      {paintingsMap}
    </section>
  );
};

export default Work;
