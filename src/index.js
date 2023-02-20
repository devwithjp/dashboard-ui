import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';

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
    element: <Login />,
  },
  // {
  //   path: "signup",
  //   element: <SignUp />
  // },
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