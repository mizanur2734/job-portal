
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
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
          path: '/jobs/:id',
          element: <JobDetails/>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: "jobApply/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "myApplications",
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
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