import React from "react";

// layout
import MainLayout from "src/layouts/MainLayout";
import DashboardLayout from "src/layouts/DashboardLayout";

// user
import Home from "./views/User/Home/Home";
import AboutUs from "./views/User/About/About";

// auth
import Login from "./views/Auth/Login";

//Admin
import Dashboard from "src/views/Admin/Dashboard/Dashboard";
import Income from "src/views/Admin/Income/Income";

// 404 error
import UserNotFoundView from "./views/Error/UserNotFoundView";
import AdminNotFoundView from "./views/Error/AdminNotFoundView";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <UserNotFoundView /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
    ],
  },
];

export const authRoutes = [
  {
    path: "/",
    children: [{ path: "/login", element: <Login /> }],
  },
];

export const adminRoutes = [
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { path: "*", element: <AdminNotFoundView /> },
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/income", element: <Income /> },
    ],
  },
];
