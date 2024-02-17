import { Selects } from "../../../../common/AntdSelects";
import CkEditors from "../../../../common/CkEditor";
import Inputs from "../../../../common/form/AntdInputs";
import DynamicTitle from "../../../DynamicTitle";

const PrimaryContactInfo = () => {
  return (
    <div>
      <DynamicTitle classNames={"text-lg font-medium mb-3"}>
        Profile Information
      </DynamicTitle>
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Company Name" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Alternative Company Name" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Selects className="w-full" Label="Company Type" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Selects className="w-full" Label="Business Type" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Selects className="w-full" Label="Size of Company" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <Selects className="w-full" Label="Company Location" />
        </div>
        <div className="lg:col-span-12">
          <CkEditors Label={"Company Description:"} />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Head Person Full Name" />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Inputs className="w-full" Label="Position" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryContactInfo;
