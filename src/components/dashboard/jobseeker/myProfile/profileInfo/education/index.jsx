import AntdBreadCum from "../../../../../../common/AntdBreadCum";
import AntdButton from "../../../../../../common/AntdButtons";
import { AntRadio } from "../../../../../../common/AntdRadioGroup";
import { Selects } from "../../../../../../common/AntdSelects";
import TextAreas from "../../../../../../common/AntdTextArea";
import CkEditors from "../../../../../../common/CkEditor";
import Inputs from "../../../../../../common/form/AntdInputs";
import DatePickers from "../../../../../../common/AntdDatePickers";

const runningOpts = [
  {
    option: "",
    value: "y",
  },
];

const Education = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-2 items-center">
        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Education Level" />
        </div>

        <div className="lg:col-span-4">
          <Selects className="w-full" Label="Degree Name" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Education Board" />
        </div>

        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Institution" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Specialization" />
        </div>
        <div className="lg:col-span-4">
          <AntRadio options={runningOpts} Label="Currently Running" />
        </div>
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Percentage/Gpa" />
        </div>
        <div className="lg:col-span-4">
          <DatePickers Label="Passed Year" />
        </div>
        <div className="col-span-2 self-center">
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

export default Education;
