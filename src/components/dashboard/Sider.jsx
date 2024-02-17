import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const getItem = (label, key, icon, path) => {
  return {
    key,
    icon,
    label,
    path,
  };
};

const items = [
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
];

const DashBoardSider = () => {
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onSelect={(selectedItem) => handleMenuSelect(selectedItem)}
          className="bg-[#242021]"
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "2rem 6rem",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardSider;
