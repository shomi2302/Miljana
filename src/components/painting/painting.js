import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import LazyLoad from 'react-lazyload';
import ReactImageAppear from 'react-image-appear';
import "./painting.css";

const Painting = ({ painting }) => {
  const { name, imageUrl, type, size, year, position } = painting;
  return (
    <div className={`projectBlock-${position} projectBlock`}>
      <div className={`paintintgBlock-${position} paintingBlock`}>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
          pan={{lockAxisX:true, lockAxisY:true}}
          Options={{limitToBounds:true}}
        >
          {({ zoomIn, zoomOut, resetTransform,lockAxisX,lockAxisY, ...rest }) => (
            <React.Fragment>
              <TransformComponent >
                <div>
                  <ReactImageAppear
                    className="painting"
                    src={imageUrl}
                    alt={`painting - ${name}`}
                    placeholder
                    showLoader={false}
                  />
                </div>
              </TransformComponent>

            </React.Fragment>
          )}
        </TransformWrapper>
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
