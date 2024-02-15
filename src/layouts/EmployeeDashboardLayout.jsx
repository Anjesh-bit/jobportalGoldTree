import AntdFooter from "../common/AntdFooter";
import AntdHeader from "../common/AntdHeader";
import DashBoardSider from "../components/dashboard/Sider";
const EmployeeDashboardLayout = () => {
  return (
    <div>
      <AntdHeader />
      <DashBoardSider />
      <AntdFooter />
    </div>
  );
};

export default EmployeeDashboardLayout;
