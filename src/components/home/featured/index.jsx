import DynamicTitle from "../../DynamicTitle";
import { dummyDataFeatured } from "../Data";
import AntdCards from "../../../common/AntdCards";
import AntdButton from "../../../common/AntdButtons";
const FeaturedJobs = () => {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-4 items-center">
        <DynamicTitle classNames={"font-bold text-4xl "}>
          Latest Featured Jobs
        </DynamicTitle>
        <div className="text-lg">
          Search and found your dream job is easier then ever.Just search jobs
          and found the job you need.
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 py-4 px-[50px]">
        {dummyDataFeatured?.map((items, index) => (
          <AntdCards
            className={
              "lg:col-span-4 md:col-span-12 col-span-12 p-4 bg-[#f5f5f5] shadow-md"
            }
            key={index}
          >
            <div className="text-center">
              <div className="text-lg font-medium">{items.position}</div>
              <div>{items.company}</div>
            </div>
            <div className="text-[0.8rem]">
              <div>Location : {items.location}</div>
              <div>Salary : {items.salary}</div>
              <div>Type : {items.type}</div>
            </div>
          </AntdCards>
        ))}
      </div>
      <div className="flex justify-center">
        <AntdButton
          classNames={"bg-[#242021] !border-none text-white px-7 h-10"}
        >
          View More
        </AntdButton>
      </div>
    </div>
  );
};

export default FeaturedJobs;
