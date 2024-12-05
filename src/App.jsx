import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Outlet/Layout";
import CameraFeed from "./Pages/CameraFeed";
import NotFound from "./Pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
