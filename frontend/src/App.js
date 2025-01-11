import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SigninPage from "./SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoutes";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute children={<SigninPage />} />}
        />
        <Route
          path="/temp"
          element={<PublicRoute children={<Home />} />}
        />
        <Route
          path="/home"
          element={<PublicRoute children={<Home />} />}
        />
        <Route
          path="/requests"
          element={<PublicRoute children={<Home />} />}
        />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;