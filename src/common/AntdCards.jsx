const AntdCards = ({ children, className, key }) => {
  return (
    <div className={className} key={key}>
      {children}
    </div>
  );
};

export default AntdCards;
