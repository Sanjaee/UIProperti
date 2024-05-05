import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/Home/HomePage";
import UplodeProduct from "./Pages/UplodeProduct";
import DetailProduct from "./Pages/DetailProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uplode" element={<UplodeProduct />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
