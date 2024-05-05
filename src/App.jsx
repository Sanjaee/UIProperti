import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/Home/HomePage";
import UplodeProduct from "./Pages/UplodeProduct";
import DetailProduct from "./Pages/DetailProduct";
import ClientPage from "./Pages/Client/ClientPage";
import RegisterPage from "./Pages/Client/ResgiterPage";
import LoginPage from "./Pages/Client/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uplode" element={<UplodeProduct />} />
        <Route path="/detail/:id" element={<DetailProduct />} />

      
      {/* Client Routes  */}
      <Route path="/client" element={<ClientPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
