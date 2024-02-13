import Inputs from "../../common/form/AntdInputs";
import AntdButton from "../../common/AntdButtons";

const DynamicRegistration = ({ isEmployee }) => {
  return (
    <div className="flex flex-col w-[35%] m-auto shadow-md p-4 my-4 bg-[#F5F5F5]">
      <div className="flex gap-2">
        {isEmployee ? (
          <>
            <div className="w-full">
              <Inputs Label="Company Name :" />
            </div>
            <div className="w-full">
              <Inputs Label="Enter Contact Number :" />
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <Inputs Label="First Name :" />
            </div>
            <div className="w-full">
              <Inputs Label="Middle Name :" />
            </div>
            <div className="w-full">
              <Inputs Label="Last Name :" />
            </div>
          </>
        )}
      </div>
      <div>
        <Inputs Label="Mobile No :" />
      </div>
      <div>
        <Inputs Label="Password" />
      </div>
      <div>
        <Inputs Label="Confirm Password" />
      </div>
      <div>
        I have read and understood and agree to the Terms and Conditions
        governing the use of GoldTree
      </div>
      <div>
        <AntdButton
          classNames={
            "w-full bg-[#242021] !border-none text-white px-7 h-10 mt-4"
          }
        >
          {isEmployee ? "Create Employer Account" : "Create Job Sekeer Account"}
        </AntdButton>
      </div>
    </div>
  );
};

export default DynamicRegistration;
