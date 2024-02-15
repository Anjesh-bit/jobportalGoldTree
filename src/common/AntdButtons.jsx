import { Button } from "antd";

const AntdButton = ({ classNames, children, type, onClick }) => {
  const handleOnClickButton = (e) => {
    onClick(e);
  };
  return (
    <Button type={type} className={classNames} onClick={handleOnClickButton}>
      {children}
    </Button>
  );
};

export default AntdButton;
