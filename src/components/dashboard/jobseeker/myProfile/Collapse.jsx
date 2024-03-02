import React from "react";
import { Collapse } from "antd";
import Profile from "./profileInfo/profile";
import Experience from "./profileInfo/experience";
import TrainingCertification from "./profileInfo/trainingCertification";
import Education from "./profileInfo/education";

const items = [
  {
    key: "1",
    label: "Profile",
    children: <Profile />,
  },
  {
    key: "2",
    label: "Experience",
    children: <Experience />,
  },
  {
    key: "3",
    label: "Education",
    children: <Education />,
  },
  {
    key: "4",
    label: "Training And Certification",
    children: <TrainingCertification />,
  },
];

const ProfileCollapse = () => <Collapse items={items} bordered={false} />;

export default ProfileCollapse;
