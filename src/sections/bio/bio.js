import React from "react";
import "./bio.css";

const Bio = () => {
  return (
    <div id="bio" className="bio">
      <div className="bio-section">
        <h3>Education</h3>
        <p>2009 - 2012. High school of Art, Uzice, Serbia</p>
        <p>
          2013 - 2017. Bachelor of Applied Painting, University of Applied Arts,
          University of Arts in Belgrade, Serbia
        </p>
        <p>
          2022 - 2024. Master of Drawing, Academy of Arts, University of Novi
          Sad, Novi Sad, Serbia
        </p>
      </div>
      <div className="bio-section">
        <h3>Solo exhibitions</h3>
        <p>2018. It doesn’t matter, Ostavinska gallery, Belgrade, Serbia</p>
      </div>
      <div className="bio-section">
        <h3>Group exhibitions</h3>
        <p>
          2023. Exhibition Masteri, Gallery of Art Academy, Novi Sad, Serbia
        </p>
        <p>
          2021. Izložba New members of The Association of Fine Artists of
          Serbia, Pavilion Cvijeta Zuzorić, Belgrade, Serbia
        </p>
        <p>2017. Traženja, Big Gallery Catch 22, Belgrade, Serbia</p>
        <p>2017. Festival umetnosti Devet, Belgrade, Serbia</p>
        <p>2017. Izložba na vodi, Gallery Štab, Belgrade, Serbia</p>
        <p>
          2016. Forth International exhibition Stone in Architecture and Art,
          Gallery of Art Center of University Library Svetozar Markovic,
          Belgrade, Serbia
        </p>
        <p>
          2016. Izložba studentskih radova, Gallery of Student Cultural Centar,
          Belgrade, Serbia
        </p>
      </div>
      <div className="bio-section">
        <h3>Awards</h3>
        <p>
          2016. First award for mosaic on Forth International exhibition Stone
          in Architecture and Art, Gallery of Art Center of University Library
          Svetozar Markovic, Belgrade, Serbia
        </p>
      </div>
      <div className="bio-section">
        <h3>Work experience</h3>
        <p>
          From 2013 to 2018, she participated in realization of monumental art
          projects in sacred and public areas, under the guidance of professor
          Miroslav Lazović.
        </p>
        <p>Most notable are:</p>
        <p>
          - creation of a mosaic for the chapel of St. Đorđe Kratovac, SPC in
          Dusseldorf, Germany
        </p>
        <p>
          - creation of a portal mosaic in the Cathedral of Christ's
          Resurrection in Podgovrica, CrnaGora
        </p>
        <p>
          - creation of a mosaic Holly Trinity in Ostrog Monastery, Montenegro
        </p>
        <p>
          - relief mosaics in the interior and exterior in Viminacium, Serbia
        </p>
      </div>
    </div>
  );
};

export default Bio;
