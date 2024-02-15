import Inputs from "../../common/form/AntdInputs";
import AntdButton from "../../common/AntdButtons";
import { useNavigate } from "react-router-dom";
const DynamicLogin = ({ isEmployee }) => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    if (isEmployee) {
      navigate("/auth/register/employee");
    } else {
      navigate("/auth/register/jobseeker");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Inputs Label="Enter Email :" />
      </div>
      <div className="w-full">
        <Inputs Label="Enter Password :" />
      </div>

      <AntdButton
        classNames={
          "w-full bg-[#242021] !border-none text-white px-7 h-10 mt-4"
        }
      >
        Login
      </AntdButton>
      <div className="font-medium text-center">Don't have an account?</div>
      <AntdButton
        classNames={
          "w-full bg-[#242021] !border-none text-white px-7 h-10 mt-4"
        }
        onClick={(e) => handleOnClick(e)}
      >
        Register
      </AntdButton>
    </div>
  );
};

export default DynamicLogin;
