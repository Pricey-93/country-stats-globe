import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//layouts
import RootLayout, { loader as rootLoader } from './layouts/RootLayout';

//pages
import Home from './pages/home/Home';
import CountryDetails from './pages/countryDetails/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/country-finder",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "countries/:name", 
        element: <CountryDetails /> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
