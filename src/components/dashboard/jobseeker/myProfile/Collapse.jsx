import React from "react";
import { Collapse } from "antd";
import Profile from "./profileInfo/profile";
import Experience from "./profileInfo/experience";
import TrainingCertification from "./profileInfo/trainingCertification";
import ReferalSocials from "./profileInfo/referalSocials";
import FreelanceInfo from "./profileInfo/freelanceInfo";
import LangugaeProInfo from "./profileInfo/languageProInfo";
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
  {
    key: "5",
    label: "Reference and social networks",
    children: <ReferalSocials />,
  },
  {
    key: "6",
    label: "Freelancing Information",
    children: <FreelanceInfo />,
  },
  {
    key: "7",
    label: "Language and Project Information",
    children: <LangugaeProInfo />,
  },
];

const ProfileCollapse = () => <Collapse items={items} bordered={false} />;

export default ProfileCollapse;
