import React from "react";
import { Layout, Menu } from "antd";
import AntdButton from "./AntdButtons";
import PopOver from "../components/auth/PopOver";
import DynamicTabs from "../components/auth";

const { Header } = Layout;

const AntdHeader = () => {
  return (
    <Layout>
      <Header className="bg-yellow-400 bg-opacity-70 flex justify-between items-center text-lg">
        <div>Logo</div>
        <div>
          <Menu
            mode="horizontal"
            className="bg-yellow-400 bg-opacity-10 text-md font-semibold"
          >
            <Menu.Item key="1">Find Jobs</Menu.Item>
            <Menu.Item key="2">Companies</Menu.Item>
            <Menu.Item key="3">Carrier Mentoring</Menu.Item>
          </Menu>
        </div>

        <div className="flex gap-2 items-center">
          <PopOver content={<DynamicTabs dataKey={"login"} />}>
            <div>
              <AntdButton
                classNames={"bg-[#242021] !border-none text-white px-7 h-10"}
              >
                Sign Up
              </AntdButton>
            </div>
          </PopOver>
          <PopOver content={<DynamicTabs dataKey={"registration"} />}>
            <div>
              <AntdButton
                classNames={"!border-[#242021] text-[#242021] px-7 h-10"}
              >
                Register
              </AntdButton>
            </div>
          </PopOver>
        </div>
      </Header>
    </Layout>
  );
};

export default AntdHeader;
