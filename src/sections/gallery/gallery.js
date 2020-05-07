import React from 'react';
import Carousel from 'nuka-carousel';
import './gallery.css'

class Slider extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <div id="gallery" className="container galleryComponent">
        <div className="gallerySlider">
          <Carousel

            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
          >
            <img alt="gallery" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f4f5.appspot.com/o/It%20doesnt%20matter%2Fgallery%2Fgallery_1.jpg?alt=media&token=f89f1a01-16e6-44a6-a978-01548a115f9e" />
            <img alt="gallery" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f4f5.appspot.com/o/It%20doesnt%20matter%2Fgallery%2Fgallery_3.jpg?alt=media&token=1f8904e9-4ffb-48a2-8cad-e163fbbd29b9" />
            <img alt="gallery" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f4f5.appspot.com/o/It%20doesnt%20matter%2Fgallery%2Fgallery_2.jpg?alt=media&token=49115288-dc81-4e01-9fb4-d9c63eaf66f1" />
            <img alt="gallery" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f4f5.appspot.com/o/It%20doesnt%20matter%2Fgallery%2Fgallery_4.jpg?alt=media&token=58c06a8c-c4a9-483d-bd3c-cf78b2c8f06b" />
            <img alt="gallery" src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f4f5.appspot.com/o/It%20doesnt%20matter%2Fgallery%2Fgallery_5.jpg?alt=media&token=99fce8f8-b158-49d8-a4cd-1dc84badb3b6" />
          </Carousel>
        </div>
        <div className="galleryText">
          <h3>It Doesn't matter</h3>
          <p className="galleryYear">2018</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores voluptatem vel incidunt quo reiciendis, temporibus beatae,
            numquam, quasi consequuntur dolores nobis eaque dignissimos totam explicabo.</p>
        </div>
      </div>
    );
  }
}

export default Slider;
