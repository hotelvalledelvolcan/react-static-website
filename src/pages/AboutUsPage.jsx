import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import Spinner from "../components/Preloader/Spinner";
import BlogSectionMiniature from "../components/Blog/Miniature/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";
import BackToTop from "../components/BackToTop/BackToTop";
import CoverSubPage from "../components/Cover/CoverSubPage";

const AboutUsPage = () => {
  return (
    <main>
      <CoverSubPage />
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
