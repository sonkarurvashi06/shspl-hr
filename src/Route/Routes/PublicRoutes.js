import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../../Pages/Public/Layout/PublicLayout";
import Home from "../../Pages/Public/Home";
import About from "../../Pages/Public/About";
import Services from "../../Pages/Public/Services";
import Contact from "../../Pages/Public/Contact";
import Rpo from "../../Pages/Public/Rpo";
import Career from "../../Pages/Public/Career";
import Employer from "../../Pages/Public/Employer";
import Learnmore from "../../Pages/Public/Learnmore";
import Beginhere from "../../Pages/Public/Beginhere";
import Ourcompany from "../../Pages/Public/Ourcompany";
// import Error from '../../Pages/Error'; // Uncomment if needed

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="rpo-ites" element={<Rpo />} />
        <Route path="career" element={<Career />} />
        <Route path="employer" element={<Employer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/begin" element={<Beginhere />} />
        <Route path="/company" element={<Ourcompany />} />
      </Route>
      {/* Error Page */}
      {/* <Route path='*' element={<Error />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
