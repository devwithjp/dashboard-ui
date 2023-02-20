import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';
import Onboarding from './pages/Onboarding/Onboarding';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Onboarding/>,
  },
  {
    path: "signup",
    element: <Onboarding />
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);