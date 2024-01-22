import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Page/Error";
import Context from "./AuthProvider/Context";
import SignUp from "./Page/SignUp";
import Main from "./Compoents/Main";
import Home from "./Page/Home";
import BooksAll from "./Books/BooksAll";
import BorrowBooks from "./Books/BorrowBooks";
import AddBooks from "./Books/AddBooks";
import Brand from "./Books/Brand";
import Login from "./Compoents/Login";
import CategoryBooks from "./Books/CategoryBooks";
import Details from "./Books/Details";
import Privateroute from "./Private/Privateroute";
import Updatebook from "./Books/Updatebook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        loader: () => fetch("https://library-server-d2d9qry2a-saidul-islams-projects.vercel.app/brand"),
        element: <Brand></Brand>,
      },
      {
        path: "/allbooks",
        element: <BooksAll></BooksAll>,
      },
      {
        path: "/borrowbooks",
        loader: () => fetch("https://library-server-d2d9qry2a-saidul-islams-projects.vercel.app/borrowdata"),
        element: <BorrowBooks></BorrowBooks>,
      },
      {
        path: "/update/:id",
        loader: () =>
          fetch(`https://library-server-d2d9qry2a-saidul-islams-projects.vercel.app/allbooks`),
        element: <Privateroute><Updatebook></Updatebook></Privateroute>
      },
      {
        path: "/addbooks",
        element: (
          <Privateroute>
            {" "}
            <AddBooks></AddBooks>
          </Privateroute>
        ),
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/category/:category",
        loader: ({ params }) =>
          fetch(`https://library-server-d2d9qry2a-saidul-islams-projects.vercel.app/books/${params.category}`),
        element: <CategoryBooks></CategoryBooks>,
      },
      {
        path: "/details/:name",
        loader: ({ params }) =>
          fetch(`https://library-server-d2d9qry2a-saidul-islams-projects.vercel.app/book/${params.name}`),
        element: (
          <Privateroute>
            <Details></Details>
          </Privateroute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
