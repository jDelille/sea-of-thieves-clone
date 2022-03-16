import React from "react";
import "./Scroll.scss";

function Scroll() {
  return (
    <div className="container">
      <section className="section fixed">
        <div className="img-wrapper">
          <img
            src="https://compass-ssl.xboxlive.com/assets/75/4d/754db206-cca3-48fa-9a51-d1c48bd4b366.jpg?n=Parallax_divs_Large_Desktop_01.jpg"
            alt=""
            className="scroll-img"
          />
        </div>
      </section>

      <section className="even-1 even"></section>

      <section className="section">
        <div className="img-wrapper">
          <img
            src="https://compass-ssl.xboxlive.com/assets/c3/4c/c34ccf69-8d36-4259-8db7-73901fb1fde8.jpg?n=Parallax_Sections_Large_Desktop_01.jpg"
            alt=""
            className="scroll-img"
          />
        </div>
      </section>

      <section className="even-2 even"></section>

      <section className="section">
        <div className="img-wrapper">
          <img
            src="https://compass-ssl.xboxlive.com/assets/ca/4a/ca4a3039-5c68-45bc-a0b3-96b9eefb421a.jpg?n=Parallax_Sections_Large_Desktop_01.jpg"
            alt=""
            className="scroll-img"
          />
        </div>
      </section>

      <section className="even-3 even"></section>

      <section className="section">
        <div className="img-wrapper">
          <img
            src="https://compass-ssl.xboxlive.com/assets/1f/35/1f355aca-753c-4213-8a42-563128129070.jpg?n=Parallax_Sections_Large_Desktop_01.jpg"
            alt=""
            className="scroll-img"
          />
        </div>
      </section>

      <div className="content"></div>
    </div>
  );
}

export default Scroll;
