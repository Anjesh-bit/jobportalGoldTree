import React from "react";
import { dashBoardData } from "../../home/Data";
import AntdCards from "../../../common/AntdCards";

const EmployeeDashBoard = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-2">
      {dashBoardData.map((item) => (
        <AntdCards
          key={item.key}
          className={
            "lg:col-span-4 md:col-span-12 col-span-12 p-4 bg-[#F5F5F5]"
          }
        >
          {item.key === "cvs" && Array.isArray(item.subHeader) && (
            <div>
              {item.subHeader.map((subItem) => (
                <div key={subItem.key}>
                  <div>{subItem.cvsList}</div>
                </div>
              ))}
            </div>
          )}
          {Array.isArray(item.subHeader) && item.key === "jobStatus" && (
            <div>
              {item.subHeader.map((subItem) => (
                <div key={subItem.key}>
                  <div>{subItem.status}</div>
                </div>
              ))}
            </div>
          )}
          <div>{item.header}</div>
          {!Array.isArray(item.subHeader) && <div>{item.subHeader}</div>}
        </AntdCards>
      ))}
    </div>
  );
};

export default EmployeeDashBoard;
