import AntdBreadCum from "../../../../common/AntdBreadCum";
import { Selects } from "../../../../common/AntdSelects";
import Inputs from "../../../../common/form/AntdInputs";
import { AntRadio } from "../../../../common/AntdRadioGroup";
import TextAreas from "../../../../common/AntdTextArea";
import CkEditors from "../../../../common/CkEditor";
import AntdButton from "../../../../common/AntdButtons";

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

const expOptions = [
  {
    option: "Fresher",
    value: "fresher",
  },
  {
    option: "No Experience",
    value: "noexp",
  },
  {
    option: "Experience",
    value: "exp",
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

const applyDirectOptions = [
  {
    option: "Yes",
    value: "y",
  },
  {
    option: "No",
    value: "n",
  },
];

const applyInstruction = [
  {
    option: "Yes",
    value: "m",
  },
  {
    option: "No",
    value: "f",
  },
];

const PostJobs = () => {
  return (
    <div>
      <AntdBreadCum array={["Employee", "Post Jobs"]} />
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Catagory Type" />
        </div>
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Job Catagory" />
        </div>
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Industry Type" />
        </div>
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Job Industry" />
        </div>
        <div className="lg:col-span-4" Label="Service Type">
          <Selects className="w-full" Label="Job Industry" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Apply Before(in days)" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Job Title" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="No.of Vacancy" />
        </div>

        <div className="lg:col-span-4" Label="Service Type">
          <Selects className="w-full" Label="Job Type" />
        </div>
        <div className="lg:col-span-4" Label="Service Type">
          <Selects className="w-full" Label="Job Level" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Job Location" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Skills" />
        </div>
        <div className="lg:col-span-12">
          <TextAreas rows="6" maxLength={6} Label={"Job Purpose"} />
        </div>
        <div className="lg:col-span-12">
          <AntRadio
            options={salaryOptions}
            valuePropName="range"
            Label="Salary"
          />
        </div>
        <div className="lg:col-span-12">
          <AntRadio options={expOptions} Label="Experience Required" />
        </div>
        <div className="lg:col-span-12">
          <AntRadio options={licenseOptions} Label="Driving License" />
        </div>
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Educational Preferences" />
        </div>
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Degree Name" />
        </div>
        <div className="lg:col-span-12">
          <AntRadio options={genderOptions} Label="Gender" />
        </div>
        <div className="lg:col-span-12">
          <CkEditors Label={"Educational Qualification Description:"} />
        </div>
        <div className="lg:col-span-12">
          <CkEditors Label={"Job Description:"} />
        </div>
        <div className="lg:col-span-12">
          <CkEditors Label={"Job Specification:"} />
        </div>
        <div className="lg:col-span-12">
          <CkEditors Label={"Job Benefits:"} />
        </div>
        <div className="lg:col-span-6">
          <AntRadio options={applyOnlineOptions} Label="Apply Online" />
        </div>
        <div className="lg:col-span-6">
          <AntRadio options={applyDirectOptions} Label="Apply Direct" />
        </div>
        <div className="lg:col-span-12">
          <AntRadio options={applyInstruction} Label="Apply Instruction" />
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

export default PostJobs;
