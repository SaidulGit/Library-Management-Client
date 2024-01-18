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
import BooksAll from './Books/BooksAll';
import BorrowBooks from './Books/BorrowBooks';
import AddBooks from './Books/AddBooks';
import Brand from './Books/Brand';
import Login from './Compoents/Login';
import CategoryBooks from './Books/CategoryBooks';


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
  },
  {
    path: "/",
    loader :() => fetch("http://localhost:5000/brand"),
    element: <Brand></Brand>
  },
  {
    path: "/allbooks",
    element:<BooksAll></BooksAll>
  },
  {
    path:"/borrowbooks",
    element: <BorrowBooks></BorrowBooks>
  },
  {
    path:"/addbooks",
    element: <AddBooks></AddBooks>
  },
  {
    path :"/signin",
    element : <Login></Login>
  },
  {
    path:"/category/:category",
    loader: ({params}) => fetch(`http://localhost:5000/books/${params.category}`),
    element: <CategoryBooks></CategoryBooks>
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
