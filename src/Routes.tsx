import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;