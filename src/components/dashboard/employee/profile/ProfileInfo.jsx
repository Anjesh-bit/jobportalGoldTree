import AntdButton from "../../../../common/AntdButtons";
import Inputs from "../../../../common/form/AntdInputs";
import DynamicTitle from "../../../DynamicTitle";

const ProfileInfo = () => {
  return (
    <div>
      <DynamicTitle classNames={"text-lg font-medium mb-3"}>
        Primary Contact Info
      </DynamicTitle>
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Full Name" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Address 1" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Address 2" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Phone" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Alternate Phone" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Fax" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="P.O. Box No." />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="E-mail" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Sec.E-mail" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Website" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
