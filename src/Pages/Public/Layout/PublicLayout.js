import React from "react";
import HomeAppBar from "../../../Component/Public/HomeAppBar";
import { Outlet } from "react-router-dom";
import Footer from '../../../Component/Public/Footer'
import { Toolbar } from "@mui/material";

const PublicLayout = () => {
  return (
    <div>
      <HomeAppBar />
      <Toolbar />
      <Toolbar />
      <Toolbar /> <Toolbar /> 
      <Toolbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
