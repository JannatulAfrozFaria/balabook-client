import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Items from "../DashboardPages/Items/Items";
import AddItem from "../DashboardPages/Items/addItem";
import EditItem from "../DashboardPages/Items/EditItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      // path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'items',
          element: <Items></Items>
        },
        {
          path: 'addItem',
          element: <AddItem></AddItem>
        },
        {
          path: 'editItem',
          element: <EditItem></EditItem>
        },
      ]
    }
  ]);