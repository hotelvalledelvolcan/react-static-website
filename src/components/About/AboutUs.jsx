import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="about-low-area about-bg pt-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-9">
              <div className="section-tittle text-center mb-60">
                <h2>
                  Las termas de Copahue son las únicas termas en el mundo que
                  reunen una innumerable cantidad de recursos minerales
                  naturales.
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="about-caption">
                <div className="section-tittle section-tittle2">
                  <h2>Cercanía y comodidad para disfrutar Copahue </h2>
                  <p>
                    {" "}
                    Junto al volcán copahue hacen una combinación perfecta para
                    que Copahue sea un paraíso termal.
                  </p>
                  <a
                    href="https://preview.colorlib.com/theme/ecoho/index.html#"
                    className="btn"
                  >
                    Saber más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="about-img ">
                <div className="about-font-img">
                  <img
                    width="600px"
                    src="images/hotel-estructura.jpg"
                    alt=""
                  />
                </div>
                <div className="about-back-img">
                  <img
                    src="images/salto-del-agrio.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
