import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Reports from "./Pages/Reports";
import Layout from "./Outlet/Layout";
import CameraFeed from "./Pages/CameraFeed";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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
