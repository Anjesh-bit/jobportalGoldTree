import AntdBreadCum from "../../../../../../common/AntdBreadCum";
import AntdButton from "../../../../../../common/AntdButtons";
import { AntRadio } from "../../../../../../common/AntdRadioGroup";
import { Selects } from "../../../../../../common/AntdSelects";
import TextAreas from "../../../../../../common/AntdTextArea";
import CkEditors from "../../../../../../common/CkEditor";
import Inputs from "../../../../../../common/form/AntdInputs";
import DatePickers from "../../../../../../common/AntdDatePickers";

const currentlyWorkOpts = [
  {
    option: "Yes",
    value: "y",
  },
  {
    option: "No",
    value: "n",
  },
];

const TrainingCertification = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-2">
        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Course Name" />
        </div>

        <div className="lg:col-span-4">
          <Inputs className="w-full" Label="Institute" />
        </div>
        <div className="lg:col-span-4">
          <DatePickers className="w-full" Label="From" />
        </div>
        <div className="lg:col-span-4">
          <DatePickers className="w-full" Label="To" />
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

export default TrainingCertification;
