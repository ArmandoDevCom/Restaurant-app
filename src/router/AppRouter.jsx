import React from "react";
import { Routes, BrowserRouter as Router, Route, Navigate, } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import Aboutus from "../pages/Aboutus";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PlatilloPage from "../pages/PlatilloPage";


const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <div className="">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:name/:id" element={<PlatilloPage />} />
            <Route path="/reservacion" element={<BookingPage />} />
            <Route path="/nosotros" element={<Aboutus />} />

            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
        
        <Footer />
    </Router>

)
}

export default AppRouter