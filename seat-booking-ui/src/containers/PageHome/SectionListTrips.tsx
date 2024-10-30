import React, { FC, ReactNode, useState } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import ClearDataButton from "components/HeroSearchForm/ClearDataButton";
import Checkbox from "shared/Checkbox/Checkbox";

export interface SectionListTripsProps {
  from: string;
  className?: string;
}

const seatList = ["Hàng đầu", "Hàng giữa", "Hàng cuối"];
const timeLineFilter = [
  "Sáng sớm 00:00 - 06:00 (0)",
  "Buổi sáng 06:00 - 12:00 (0)",
  "Buổi chiều 12:00 - 18:00 (0)",
  "Buổi tối 18:00 - 24:00 (28)",
];

const SectionListTrips: FC<SectionListTripsProps> = ({
  from = "",
  className = "",
}) => {
  const [selected, setSelected] = useState("");
  return (
    <div
      className={`nc-SectionListTrips relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionListTrips"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5 sm:rounded-2xl sm:border space-y-8 px-0 sm:p-6 xl:p-8">
        <div style={{ display: "grid", rowGap: "1rem" }}>
          <div
            className="relative"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="xl:text-lg font-semibold lg:w-2/5">Bộ lọc tìm kiếm</p>
            <ClearDataButton onClick={() => {}} />
          </div>
          <div>
            <p className="xl:text-lg font-semibold lg:w-2/5">Giờ đi</p>
            <div style={{ display: "grid", rowGap: "1rem" }}>
              {timeLineFilter.map((item, index) => (
                <Checkbox
                  key={index}
                  name=""
                  label={item}
                  subLabel=""
                  defaultChecked={false}
                  onChange={() => {}}
                />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <p className="xl:text-lg font-semibold lg:w-2/5">Hàng ghế</p>
            <div>
              {seatList.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(item)}
                  className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${
                    selected === item
                      ? "bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900"
                      : "text-neutral-6000 dark:text-neutral-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block flex-grow">
        <p>aaaaa</p>
      </div>
    </div>
  );
};

export default SectionListTrips;
