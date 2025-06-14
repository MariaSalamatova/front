import React from "react";

const Content = () => {
  
  const imgs = [];
  return (
    <section className="content-grid">
      <div className="carousel-container">
        <button id="prevBtn" className="carousel-btn left-btn">
          {" "}
          ❮{" "}
        </button>
        <div className="event-poster">
          <img
            src="pictures/26 event/Dialogues behind bars.jpg"
            className="active"
          />
          <img src="pictures/26 event/Ruinas Gloriosas y Directrices de Metáforas.jpg" />
          <img src="pictures/26 event/wilderness pack.jpg" />
        </div>
        <button id="nextBtn" className="carousel-btn right-btn">
          {" "}
          ❯{" "}
        </button>
      </div>

      <section className="treiler-ver">
        <video
          src="pictures/26 event/Version 2.6 Trailer - Folie et Dйraison _ Reverse_ 1999.mp4"
          controls
        ></video>
      </section>
    </section>
  );
};

export default Content;