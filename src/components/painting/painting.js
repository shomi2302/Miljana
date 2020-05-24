import React from "react";
import ReactImageAppear from 'react-image-appear';
import "./painting.css";

const Painting = ({ painting }) => {
  const { name, imageUrl, type, size, year, position } = painting;
  return (
    <div className={`projectBlock-${position} projectBlock`}>
      <div className={`paintintgBlock-${position} paintingBlock`}>
        <a target="_blank" rel="noopener noreferrer" href={imageUrl}>
          <ReactImageAppear
            className="painting"
            src={`${process.env.PUBLIC_URL}${imageUrl}`}
            alt={`painting - ${name}`}
            placeholder
            showLoader={false} />
        </a>
      </div>
      <div className={`overviewBlock-${position} overviewBlock`}>
        <div className="paintingname-block">
          <h3>{name}</h3>
          <p>{year}</p>
        </div>
        <p className="dimensions">{size}</p>
        <p className="work-section-text">{type}</p>
      </div>
    </div>
  );
};
export default Painting;
