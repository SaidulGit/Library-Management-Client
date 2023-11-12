import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Page/Error';
import Context from './AuthProvider/Context';
import SignUp from './Page/SignUp';
import Main from './Compoents/Main';
import Home from './Page/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path: "/signUp",
      element: <SignUp></SignUp>
  },
  {
    path: '/',
    element: <Home></Home>
  }
]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Context>
      <RouterProvider router={router} />
      </Context>
  </React.StrictMode>,
)
