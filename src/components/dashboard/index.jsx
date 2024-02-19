import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;

const getItem = (label, key, icon, path) => {
  return {
    key,
    icon,
    label,
    path,
  };
};

const DashBoardSider = ({ isEmployeeDashboard, isJobSeekerDashboard }) => {
  const items = [
    {
      status: isEmployeeDashboard,
      routes: [
        getItem("Dashboard", "dashboard", <PieChartOutlined />, ""),
        getItem(
          "My Profile",
          "profile",
          <DesktopOutlined />,
          "/employee/dashboard/profile"
        ),
        getItem(
          "Post A New Job",
          "newJob",
          <FileOutlined />,
          "/employee/dashboard/new-job"
        ),
        getItem(
          "Manage Jobs",
          "manageJobs",
          <FileOutlined />,
          "/employee/dashboard/manage-jobs"
        ),
        getItem(
          "Jobs Applied Candidate",
          "jobsApplied",
          <FileOutlined />,
          "/employee/dashboard/jobs-applied"
        ),
        getItem(
          "Upload A Photo",
          "uploadPhoto",
          <FileOutlined />,
          "/employee/dashboard/upload-photo"
        ),
        getItem(
          "Short Listed Candidates",
          "shortList",
          <FileOutlined />,
          "/employee/dashboard/short-list-candidates"
        ),
        getItem(
          "Changed Password",
          "changePass",
          <FileOutlined />,
          "/employee/dashboard/change-password"
        ),
        getItem(
          "Deactivate Account",
          "deactivateAcc",
          <FileOutlined />,
          "/employee/dashboard/deactivate-account"
        ),
      ],
    },
    {
      status: isJobSeekerDashboard,
      routes: [
        getItem("Dashboard", "dashboard", <PieChartOutlined />, ""),
        getItem(
          "My Profile",
          "profile",
          <DesktopOutlined />,
          "/jobseeker/dashboard/profile"
        ),
        getItem(
          "Upload Photo",
          "photo",
          <FileOutlined />,
          "/jobseeker/dashboard/upload-photo"
        ),
        getItem(
          "My Resume",
          "resume",
          <FileOutlined />,
          "/jobseeker/dashboard/resume"
        ),
        getItem(
          "Applied Jobs",
          "jobsApplied",
          <FileOutlined />,
          "/jobseeker/dashboard/jobs-applied"
        ),
        getItem(
          "Short Listed Jobs",
          "shortList",
          <FileOutlined />,
          "/jobseeker/dashboard/short-listed-jobs"
        ),
        getItem(
          "Job Alerts",
          "jobAlerts",
          <FileOutlined />,
          "/jobseeker/dashboard/job-alerts"
        ),
        getItem(
          "Saved Jobs",
          "savedJobs",
          <FileOutlined />,
          "/jobseeker/dashboard/saved-jobs"
        ),
        getItem(
          "CVs and Cover Letter",
          "coverCv",
          <FileOutlined />,
          "/jobseeker/dashboard/cvs-cover-letter"
        ),
        getItem(
          "Changed Password",
          "changePass",
          <FileOutlined />,
          "/jobseeker/dashboard/change-password"
        ),
        getItem(
          "Deactivate Account",
          "deactivateAcc",
          <FileOutlined />,
          "/jobseeker/dashboard/deactivate-account"
        ),
      ],
    },
  ];

  const foundItems = items.find((items) => items.status);

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuSelect = (selected) => {
    setSelectedKeys(selected?.key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="!bg-[#242021]"
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="vertical"
          onSelect={(selectedItem) => handleMenuSelect(selectedItem)}
          className="bg-[#242021] flex flex-col gap-4 text-md"
        >
          {foundItems.routes.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content className="px-[50px] py-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardSider;
