import React from "react";
import { Routes, BrowserRouter as Router, Route, Navigate, } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import Aboutus from "../pages/Aboutus";

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservacion" element={<BookingPage />} />
            <Route path="/nosotros" element={<Aboutus />} />

            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>

)
}

export default AppRouter