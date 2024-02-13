import AntdButton from "../../../common/AntdButtons";
import AntdCards from "../../../common/AntdCards";
import { dummyDataCompanyList } from "../Data";
import DynamicTitle from "../DynamicTitle";

const CompanyList = () => {
  return (
    <div className="bg-yellow-400 bg-opacity-60 py-4 px-[50px]">
      <div className="flex pb-4">
        <div className="flex flex-col gap-4 w-[50%]">
          <DynamicTitle classNames={"font-bold text-4xl"}>
            Choose Your Dream Companies
          </DynamicTitle>
          <div className="w-[60%] text-lg">
            start your journey towards the job search by exploring the top
            companies around nepal and also opportunities to meet the top notch
            mentors.
          </div>
        </div>
        <div className="ml-auto">
          <AntdButton
            classNames={"bg-[#242021] !border-none text-white px-7 h-10"}
          >
            View All Companies
          </AntdButton>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        {dummyDataCompanyList?.map((items, index) => (
          <AntdCards
            className={
              "lg:col-span-4 md:col-span-12 col-span-12 p-4 bg-[#F5F5F5]"
            }
            key={index}
          >
            <div className="flex flex-col gap-2">
              <div className="text-lg font-medium">{items.company}</div>
              <div>{items.description}</div>
              <div className="flex gap-2">
                <AntdButton
                  classNames={
                    "bg-[#D5D5D5] !border-none text-[#00000] px-7 h-8"
                  }
                >
                  Full Time
                </AntdButton>
                <AntdButton
                  classNames={
                    "bg-[#D5D5D5] !border-none text-[#00000] px-7 h-8"
                  }
                >
                  Remote
                </AntdButton>
              </div>
            </div>
          </AntdCards>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
