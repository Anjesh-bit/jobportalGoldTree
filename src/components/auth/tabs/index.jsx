import AntdTabs from "../../../common/AntdTabs";
import EmployeeLogin from "../signIn/employer";
import JobSeekerLogin from "../signIn/jobSeeker";

const tabItems = [
  {
    key: "login",
    tabItems: [
      {
        label: "Job Seeker",
        children: <JobSeekerLogin />,
        key: "job_seeker",
      },
      {
        label: "Employer",
        children: <EmployeeLogin />,
        key: "employee",
      },
    ],
  },
  {
    key: "registration",
    tabItems: [
      {
        label: "Job Seeker",
        children: "",
        key: "job_seeker",
      },
      {
        label: "Employer",
        children: "",
        key: "employee",
      },
    ],
  },
];

const DynamicTabs = ({ dataKey }) => {
  const founItems = tabItems?.find((items) => items.key === dataKey);
  const tabItemsFound = founItems?.tabItems;
  return (
    <div>
      <AntdTabs items={tabItemsFound} centered />
    </div>
  );
};

export default DynamicTabs;
