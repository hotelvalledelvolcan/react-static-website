import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cover from "../components/Cover/Cover";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import Spinner from "../components/Preloader/Spinner";
import BlogSectionMiniature from "../components/Blog/Miniature/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";
import BackToTop from "../components/BackToTop/BackToTop";

const HomePage = () => {
  return (
      <main>
        <Cover />
        <AboutUs />
        <Rooms />
        <VideoPreview/>
        <BlogSectionMiniature />
        <Testimonials />
        <Gallery />
      </main>
      
  );
};

export default HomePage;
