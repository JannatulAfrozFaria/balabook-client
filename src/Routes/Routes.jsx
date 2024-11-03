import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Items from "../DashboardPages/Items/Items";
import EditItem from "../DashboardPages/Items/EditItem";
import AddItem from "../DashboardPages/Items/AddItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      // path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '', 
          element: <Navigate to="items" />, 
      },
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