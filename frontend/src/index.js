import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import SigninPage from './pages/SigninPage.jsx';
import Home from "./pages/Home";
import TestPage from "./pages/TestPage"
import PrivateRoute from "./routes/privateRoute.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<SigninPage />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
        <Route path='/requests' element={<Home />} />
        <Route path='/delete' element={<TestPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
