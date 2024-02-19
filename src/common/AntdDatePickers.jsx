import { DatePicker } from "antd";

const DatePickers = ({ onHandleChange, Label, required }) => {
  const onChange = (date, dateString) => {
    onHandleChange instanceof Function && onHandleChange(date, dateString);
  };
  return (
    <div>
      <DatePicker onChange={onChange} picker="year" className="w-full h-30" />
    </div>
  );
};

export default DatePickers;
