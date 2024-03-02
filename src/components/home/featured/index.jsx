import DynamicTitle from "../../DynamicTitle";
import { dummyDataFeatured } from "../Data";
import AntdCards from "../../../common/AntdCards";
import AntdButton from "../../../common/AntdButtons";
const FeaturedJobs = () => {
  return (
    <div className="bg-[#3d2462] text-[#F5F5F5] flex items-center">
      <div className=" grid grid-cols-12 items-center">
        <div className="flex flex-col gap-4 items-center lg:col-span-3 p-4 bg-gradient-to-r from-black">
          <DynamicTitle classNames={"font-bold text-5xl font-extrabold"}>
            Latest Featured Jobs
          </DynamicTitle>
          <div className="text-md">
            Search and found your dream job is easier then ever.Just search jobs
            and found the job you need.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 py-4 pr-[50px] lg:col-span-9">
          {dummyDataFeatured?.map((items, index) => (
            <AntdCards
              className={
                "lg:col-span-4 md:col-span-12 col-span-12 p-4 bg-[#F5F5F5] shadow-md rounded-md relative"
              }
              key={index}
            >
              <div className="text-center">
                <div className="text-2xl font-medium text-[#3d2462]">
                  {items.position}
                </div>
                <div className="text-xl font-normal text-black">
                  {items.company}
                </div>
              </div>
              <div className="text-md text-black">
                <div>
                  <span className="text-[#f09b1e] font-medium">
                    Location :{" "}
                  </span>
                  {items.location}
                </div>
                <div>
                  <span className="text-[#f09b1e] font-medium">Salary : </span>
                  {items.salary}
                </div>
                <div>
                  <span className="text-[#f09b1e] font-medium">Type : </span>
                  {items.type}
                </div>
              </div>
            </AntdCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
