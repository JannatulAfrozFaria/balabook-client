import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Items from "../DashboardPages/Items/Items";

  export const router = createBrowserRouter([
    {
      path: "/",
      // path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'items',
          element: <Items></Items>
        }
      ]
    }
  ]);