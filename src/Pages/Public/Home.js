import { Typography } from "@mui/material";
import React from "react";
import LandingPage from "./LandingPage";
import Looking from "../../Component/Public/Looking";
import Advisory from "./Advisory";
import Global from "./Global";
import Consumer from "./Consumer";
import Industry from "./Industry";
import Workforce from "./Workforce";
import Request from "./Request";
import Slider from "../../Component/Public/Slider";
import Map from "../../Component/Public/Map";
import Partical from "../../Component/Public/Partical";

const Home = () => {
  return (
    <>
      <LandingPage />
      {/* <Looking /> */}
      <Partical />
      <Advisory />
      <Global />
      <Consumer />
      <Industry />
      <Workforce />
      <Slider />
      <Request />
      <Map />
    </>
  );
};

export default Home;
