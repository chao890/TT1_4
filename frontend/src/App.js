import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SigninPage from "./SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoutes";
import Temp from "./temp";
import TestPage from "./pages/TestPage"

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
        <Route path="/delete"
        element={<PublicRoute children={<TestPage />} />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;