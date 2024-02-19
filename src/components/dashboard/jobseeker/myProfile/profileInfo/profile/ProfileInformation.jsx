import AntdBreadCum from "../../../../../../common/AntdBreadCum";
import AntdButton from "../../../../../../common/AntdButtons";
import { AntRadio } from "../../../../../../common/AntdRadioGroup";
import { Selects } from "../../../../../../common/AntdSelects";
import TextAreas from "../../../../../../common/AntdTextArea";
import CkEditors from "../../../../../../common/CkEditor";
import Inputs from "../../../../../../common/form/AntdInputs";
import DatePickers from "../../../../../../common/AntdDatePickers";

const salaryOptions = [
  {
    option: "Fixed",
    value: "fixed",
  },
  {
    option: "Negotiable",
    value: "negotiable",
  },
  {
    option: "Raneg",
    value: "range",
  },
];

const marriedOptions = [
  {
    option: "Married",
    value: "fresher",
  },
  {
    option: "Unmarried",
    value: "noexp",
  },
];

const licenseOptions = [
  {
    option: "Yes",
    value: "y",
  },
  {
    option: "No",
    value: "n",
  },
];

const genderOptions = [
  {
    option: "Male",
    value: "m",
  },
  {
    option: "Female",
    value: "f",
  },
  {
    option: "Other",
    value: "o",
  },
];

const applyOnlineOptions = [
  {
    option: "Yes",
    value: "y",
  },
  {
    option: "No",
    value: "n",
  },
];

const ProfileInformation = () => {
  return (
    <div>
      <AntdBreadCum array={["Employee", "Post Jobs"]} />

      <div className="grid grid-cols-12 gap-x-2">
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Full Name" />
        </div>
        <div className="lg:col-span-4 self-center mb-1">
          <DatePickers className="w-full" Label="Date Of Birth" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Nationality" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Permanent Address" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Current Address" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Phone No." />
        </div>

        <div className="lg:col-span-6">
          <AntRadio options={genderOptions} Label="Gender" />
        </div>
        <div className="lg:col-span-6">
          <AntRadio options={marriedOptions} Label="Marital Status" />
        </div>
        <div className="col-span-2">
          <AntdButton
            classNames={"bg-[#242021] !border-none text-white px-7 h-10 w-full"}
          >
            Submit
          </AntdButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
