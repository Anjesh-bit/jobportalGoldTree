import AntdSearch from "../../../common/AntdSearch";
import DynamicTitle from "../DynamicTitle";

const DetailedComponent = () => {
  return (
    <div className="bg-yellow-400 bg-opacity-70 py-4 min-h-[50vh] flex items-center">
      <div className="flex flex-col gap-4 sm:w-[60%] max-w-screen-lg mx-auto">
        <DynamicTitle classNames={"font-bold text-4xl"}>
          Find Your Dream Job That Suits With Exciting Opportunities
        </DynamicTitle>
        <div>
          <p className="text-lg">
            Embark on a journey towards your dream career, your ultimate job
            finding companion. We have created the platform that connects
            talented individuals with exciting opportunities.
          </p>
        </div>
        <div className="w-full sm:w-[50%]">
          <AntdSearch
            placeholder={"Job Titles, Salaries or Companies"}
            enterButton={"Search"}
            size={"large"}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedComponent;
