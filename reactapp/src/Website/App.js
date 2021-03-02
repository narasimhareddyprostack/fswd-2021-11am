import React, { Fragment } from "react";
import Navbar from "./Website/Navbar";
import "./App.css";
import LandingPage from "./Website/LandingPage";
import Cards from "./Website/Cards";
import InfoBox from "./Website/InfoBox";
import Contact from "./Website/Contact";
import Footer from "./Website/Footer";
import "./bootstrap/bootstrap.css";

let App = () => {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
      <Cards />
      <InfoBox />
      <Contact />
      <Footer />
    </Fragment>
  );
};
export default App;
