import React, { FC, ReactNode, useState } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import ClearDataButton from "components/HeroSearchForm/ClearDataButton";
import Checkbox from "shared/Checkbox/Checkbox";

export interface SectionListTripsProps {
  beginPoint: string;
  destinationPoint: string;
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
  beginPoint = "",
  destinationPoint = "",
  className = "",
}) => {
  const [selected, setSelected] = useState("");
  return (
    <div
      className={`nc-SectionListTrips relative flex flex-col lg:flex-row ${className}`}
      data-nc-id="SectionListTrips"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5 sm:rounded-2xl sm:border space-y-8 px-0 sm:p-6 xl:p-8">
        <div style={{ display: "grid", rowGap: "1rem" }}>
          <div
            className="relative"
          >
            <p className="xl:text-lg font-semibold lg:w-2/5">Bộ lọc tìm kiếm</p>
            <ClearDataButton onClick={() => { }} />
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
                  onChange={() => { }}
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
                  className={`px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none ${selected === item
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

      <div className="lg:block flex-grow mb-10">
        <p className="xl:text-lg font-semibold pb-10 text-2xl">{beginPoint}&nbsp;-&nbsp;{destinationPoint}</p>
        <div style={{ display: 'grid', rowGap: '1rem' }}>
          <div className="flex justify-between">
            <div>
              <p className="text-xl">11:30&nbsp;</p>
              <div className="text-neutral-300 dark:text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nc-icon-field"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="border-b md:border-dotted border-neutral-200 dark:border-neutral">1</div>
                <div>1</div>
              </div>
              <div>3 giờ</div>
              <div>
                <div className="border-b md:border-dotted border-neutral-200 dark:border-neutral">3</div>
                <div>3</div>
              </div>
            </div>
            <div>
            <div className="text-neutral-300 dark:text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nc-icon-field"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-xl">&nbsp;14:30</p>
            </div>
            <div>
              <label>dotIcon</label>
              <p>&nbsp; 28 chỗ trống</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Begin point</p>
            <p>Destination point</p>
            <p>135.000đ</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionListTrips;
