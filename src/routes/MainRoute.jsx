import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import EmployeeDashboardLayout from "../layouts/EmployeeDashboardLayout";
import JobPortalHome from "../components/home";
import EmployeeDashBoard from "../components/dashboard/employee";
import JobSeekerRegistration from "../components/auth/register/jobSeeker";
import EmployeeRegistration from "../components/auth/register/employers";

import JobApplied from "../components/dashboard/employee/jobsApplied";
import ManageJobs from "../components/dashboard/employee/manageJobs";
import PostJobs from "../components/dashboard/employee/posts";
import Profile from "../components/dashboard/employee/profile";
import ShorlistCandidate from "../components/dashboard/employee/shortListCandidates";
import UploadPhoto from "../components/dashboard/employee/uploadphoto";
import ChangePassword from "../components/dashboard/ChangePassword";
import DeactivateAccount from "../components/dashboard/DeactivateAccount";

const homeRoutes = {
  path: "/",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <JobPortalHome />,
    },
  ],
};

const authRoutes = {
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
};

const employeeRoutes = {
  path: "employee/dashboard",
  element: <EmployeeDashboardLayout />,
  children: [
    {
      path: "",
      element: <EmployeeDashBoard />,
    },
    {
      path: "jobs-applied",
      element: <JobApplied />,
    },
    {
      path: "manage-jobs",
      element: <ManageJobs />,
    },
    {
      path: "new-job",
      element: <PostJobs />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "short-list-candidates",
      element: <ShorlistCandidate />,
    },
    {
      path: "upload-photo",
      element: <UploadPhoto />,
    },
    {
      path: "change-password",
      element: <ChangePassword />,
    },
    {
      path: "deactivate-account",
      element: <DeactivateAccount />,
    },
  ],
};

const router = createBrowserRouter([
  { ...homeRoutes },
  { ...authRoutes },
  { ...employeeRoutes },
]);

export default router;
