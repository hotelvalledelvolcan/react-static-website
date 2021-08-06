import React from "react";
import Header from "./Header/Header";
import Cover from './Cover/Cover'
import AboutUs from './About/AboutUs'
import Rooms from "./Rooms/Rooms";

const Home = () => {
  return (
    <>
      <header>
        <Header/>
        <Cover/>
        <AboutUs/>
        <Rooms/>
      </header>
    </>
  );
};

export default Home;
