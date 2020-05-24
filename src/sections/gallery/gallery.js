import React from 'react';
import Carousel from 'nuka-carousel';
import './gallery.css'

const Gallery = ({gallery}) => {

  let {gallImgUrl,name,year,overview} = gallery

  let mapGallery = gallImgUrl.map((item,i)=> <img key={i} src={`${process.env.PUBLIC_URL}${item}`} alt="gallery"/>)

  return (
    <div id="gallery" className="container galleryComponent">
      <div className="gallerySlider">
        <Carousel>
          {mapGallery}
        </Carousel>
      </div>
      <div className="galleryText">
        <h3>{name}</h3>
        <p className="galleryYear">{year}</p>
        <p>{overview}</p>
      </div>
    </div>
    )
  }


export default Gallery;
