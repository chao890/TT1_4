import React from "react";
import "./App.css";
import SigninPage from "./SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoutes";
import Home from "./Home";
import TestPage from "./pages/TestPage"
import RequestPage from './RequestPage'

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
          element={<PublicRoute children={<RequestPage />} />}
        />
        
        <Route path="/delete"
        element={<PublicRoute children={<TestPage />} />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;