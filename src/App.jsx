import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Reports from "./Pages/Reports";
import Layout from "./Outlet/Layout";
import CameraFeed from "./Pages/CameraFeed";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login"
import Signup from "./Pages/Auth/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "machine",
      element: <Layout />,
      children: [
        {
          path: '',
          element: <CameraFeed />,
        },

        // {
        //   path: 'personal',
        //   element: <Personal />,
        // },
      ]
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />    </>
  )
}

export default App
