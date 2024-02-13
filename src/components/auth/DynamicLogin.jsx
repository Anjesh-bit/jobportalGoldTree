import Inputs from "../../common/form/AntdInputs";
import AntdButton from "../../common/AntdButtons";

const DynamicLogin = ({ isEmployee }) => {
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
      >
        Register
      </AntdButton>
    </div>
  );
};

export default DynamicLogin;
