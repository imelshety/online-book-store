import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import AuthLayout from "./Layout/AuthLayout"
import MasterLayout from "./Layout/MasterLayout"
import Home from "./pages/Ui/Home"


function App() {
const routers = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout/>,
    children: [
      { index: true, element: <Login /> },
      { path: "signin", element: <Login /> },
      { path: "signup", element: <Register /> }
    ],
  },
  {
    path: "home",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path :"home", element: <Home />
      }
    ],
  },
])

  return (
    <RouterProvider router={routers}>
    
    </RouterProvider>
  )
}

export default App
