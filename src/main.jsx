import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import Error from './Page/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[{

    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
