import { Button } from "antd";

const AntdButton = ({ classNames, children, type, handleOnClick }) => {
  const handleOnClickButton = (e) => {
    handleOnClick(e);
  };
  return (
    <Button type={type} className={classNames} onClick={handleOnClickButton}>
      {children}
    </Button>
  );
};

export default AntdButton;
