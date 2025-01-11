import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SigninPage from "./SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoutes";
import Temp from "./temp";

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
          element={<PublicRoute children={<Temp />} />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;