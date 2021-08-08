import React from "react";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import BlogSectionMiniature from "../components/Blog/Miniature/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";
import CoverSubPage from "../components/Cover/CoverSubPage";

const AboutUsPage = () => {
  return (
    <main>
      <CoverSubPage
        title="El Hotel"
        description={[
          "Hotel Valle Del Volcán lleva más de 25 años acercandote ",
          <br />,
          " a las termas de Copahue",
        ]}
        image="images/centro-termal-portada.jpg"
      />
      <AboutUs />
      <Rooms />
      <VideoPreview />
      <BlogSectionMiniature />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default AboutUsPage;
