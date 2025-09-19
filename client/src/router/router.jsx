
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "register",
            element: <Register/>
        },
        {
            path: "signIn",
            element: <SignIn/>
        }
    ]
  },
]);

export default router;