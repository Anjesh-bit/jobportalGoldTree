import AntdBreadCum from "../../../../common/AntdBreadCum";
import AntdButton from "../../../../common/AntdButtons";
import PrimaryContactInfo from "./PrimaryContactInfo";
import ProfileInfo from "./ProfileInfo";
import SocialNetworks from "./SocialNetwork";

const Profile = () => {
  return (
    <div>
      <div>
        <AntdBreadCum array={["Employee", "Profile"]} />
      </div>
      <div>
        <PrimaryContactInfo />
      </div>
      <div>
        <SocialNetworks />
      </div>
      <div>
        <ProfileInfo />
      </div>
      <div className="w-[16.67%]">
        <AntdButton
          classNames={"bg-[#242021] !border-none text-white px-7 h-10 w-full"}
        >
          Update
        </AntdButton>
      </div>
    </div>
  );
};

export default Profile;
