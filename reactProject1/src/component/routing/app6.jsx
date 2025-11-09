import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// Import your page components
import HomePage from "./home";
import AboutPage from "./about";
import DashboradPage from "./dashborad";
import Navbar from "./navbar";
import ParamComp from "./parameter";
import Courses from "./course";
import NotFound from "./notfound";
// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <AboutPage />
      </div>
    ),
  },
  {
    path: "/dashborad",
    element: (
      <div>
        <Navbar />
        <DashboradPage />
      </div>
    ),
    children: [{ path: "course", element: <Courses /> }],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App6 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App6;
