import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import JobPortalHome from "../components/home";
import AuthLayout from "../layouts/AuthLayout";

import JobSeekerRegistration from "../components/auth/register/jobSeeker";
import EmployeeRegistration from "../components/auth/register/employers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <JobPortalHome />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register/jobseeker",
        element: <JobSeekerRegistration />,
      },
      {
        path: "register/employee",
        element: <EmployeeRegistration />,
      },
    ],
  },
]);

export default router;
