import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import EmployeeDashboardLayout from "../layouts/EmployeeDashboardLayout";
import JobPortalHome from "../components/home";
import DashBoard from "../components/dashboard/DashBoard";
import JobSeekerRegistration from "../components/auth/register/jobSeeker";
import EmployeeRegistration from "../components/auth/register/employers";
import MyProfile from "../components/dashboard/jobseeker/myProfile";
import JobApplied from "../components/dashboard/employee/jobsApplied";
import ManageJobs from "../components/dashboard/employee/manageJobs";
import PostJobs from "../components/dashboard/employee/posts";
import Profile from "../components/dashboard/employee/profile";
import ShorlistCandidate from "../components/dashboard/employee/shortListCandidates";
import UploadPhoto from "../components/dashboard/employee/uploadphoto";
import ChangePassword from "../components/dashboard/ChangePassword";
import DeactivateAccount from "../components/dashboard/DeactivateAccount";
import JobSeekerDashboardLayout from "../layouts/JobSeekerDashboardLayout";

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
      element: <DashBoard dataKey="employee" />,
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

const jobSeekerRoutes = {
  path: "jobseeker/dashboard",
  element: <JobSeekerDashboardLayout />,
  children: [
    {
      path: "",
      element: <DashBoard dataKey={"jobSeeker"} />,
    },
    {
      path: "jobs-applied",
      element: "",
    },
    {
      path: "manage-jobs",
      element: "",
    },
    {
      path: "new-job",
      element: "",
    },
    {
      path: "profile",
      element: <MyProfile />,
    },
    {
      path: "short-list-candidates",
      element: "",
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
  { ...jobSeekerRoutes },
]);

export default router;
