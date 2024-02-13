import { Input } from "antd";
const { Search } = Input;
const AntdSearch = ({ placeholder, enterButton, size, loading }) => {
  return (
    <>
      <Search
        placeholder={placeholder}
        enterButton={enterButton}
        size={size}
        loading={loading}
      />
    </>
  );
};
export default AntdSearch;
