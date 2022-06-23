import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Paintings from "../components/Paintings";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Paintings />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
