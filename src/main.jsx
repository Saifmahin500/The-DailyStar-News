import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root';
import Home from './page/Home/Home';
import About from './page/About/About';
import Career from './page/Career/Career';
import Login from './page/Login/Login';
import Registration from './page/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/career",
        element: <Career></Career>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/reg",
        element:<Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
