import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SigninPage from "./SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoutes";
import Temp from "./temp";
import RequestPage from "./RequestPage";


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
        <Route
          path="/requests"
          element={<PublicRoute children={<RequestPage />} />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;