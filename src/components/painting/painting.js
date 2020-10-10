import React from "react";
import ReactImageAppear from 'react-image-appear';
import { Link } from "react-scroll";
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
      <div>

        <div className={`overviewBlock-${position} overviewBlock`}>
          <div className="paintingname-block">
            <h3>{name}</h3>
            <p>{year}</p>
          </div>
          <p className="dimensions">{size}</p>
          <p className="work-section-text">{type}</p>
          
        </div>
        <div className="enquiry-box">
          <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={1100}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              className="enquiry"
              >
            Have a question? Click for enquiry!
          </Link>
        </div>
      </div>

    </div>
  );
};
export default Painting;
