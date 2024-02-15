import Inputs from "../../common/form/AntdInputs";
import AntdButton from "../../common/AntdButtons";
import { useNavigate } from "react-router-dom";

const DynamicRegistration = ({
  isEmployee,
  visibleTabs,
  isEmployeeTabItems,
}) => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    if (isEmployeeTabItems) {
      navigate("/auth/register/employee");
    } else {
      navigate("/auth/register/jobseeker");
    }
  };
  return (
    <div
      className={`flex flex-col ${
        visibleTabs ? "w-[100%]" : "w-[35%]"
      }  m-auto shadow-md p-4 my-4 bg-[#F5F5F5]`}
    >
      {!visibleTabs && (
        <>
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
              {isEmployee
                ? "Create Employer Account"
                : "Create Job Sekeer Account"}
            </AntdButton>
          </div>
        </>
      )}

      {visibleTabs && (
        <div className="w-full">
          <div>Create a free account to post Vacancy</div>
          <div>
            <AntdButton
              classNames={
                "w-full bg-[#242021] !border-none text-white px-7 h-10 mt-4"
              }
              onClick={handleOnClick}
            >
              {isEmployeeTabItems
                ? "Create an Employee Account"
                : "Create an Job Seeker Account"}
            </AntdButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicRegistration;
