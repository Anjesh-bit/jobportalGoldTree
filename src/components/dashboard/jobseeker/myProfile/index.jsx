import AntdTabs from "../../../../common/AntdTabs";
import ProfileCollapse from "./Collapse";

const tabItems = [
  {
    label: "My Profile",
    children: <ProfileCollapse />,
    key: "profile",
  },
  {
    label: "Preferences",
    children: "",
    key: "perferences",
  },
  {
    label: "Training",
    children: "",
    key: "training",
  },
];

const MyProfile = () => {
  const handleOnChangeTabs = (keys) => {};

  return (
    <div>
      <AntdTabs items={tabItems} onChange={handleOnChangeTabs} />
    </div>
  );
};

export default MyProfile;
