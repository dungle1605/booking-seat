import React, { FC, useEffect, useState } from "react";
import ClearDataButton from "components/HeroSearchForm/ClearDataButton";
import Checkbox from "shared/Checkbox/Checkbox";
import useDocumentTitle from "hooks/useDocumentTitle";
import useScrollTop from "hooks/useScrollTop";
import { TripDataType } from "data/types";

export interface SectionListTripsProps {
  searchedTrips: TripDataType[];
  className?: string;
}

const seatList = ["Hàng đầu", "Hàng giữa", "Hàng cuối"];
const tabs = ["Chọn ghế", "Lịch trình", "Trung chuyển", "Chính sách"];
const timeLineFilter = [
  "Sáng sớm 00:00 - 06:00 (0)",
  "Buổi sáng 06:00 - 12:00 (0)",
  "Buổi chiều 12:00 - 18:00 (0)",
  "Buổi tối 18:00 - 24:00 (28)",
];

const schedules = [
  {
    title: "Bến xe Miền Tây",
    desc: "VP BX Miền Tây: 395 Kinh Dương Vương , P.An Lạc , Q.Bình Tân , TP.HCM",
  },
  {
    title: "Bến xe An Sương",
    desc: "Bến Xe An Sương, Quốc Lộ 22, Ấp Đông Lân, Bà Điểm, Hóc Môn, TP Hồ Chí Minh",
  },
  {
    title: "Bến xe Miền Tây",
    desc: "VP BX Miền Tây: 395 Kinh Dương Vương , P.An Lạc , Q.Bình Tân , TP.HCM",
  },
];

const SectionListTrips: FC<SectionListTripsProps> = ({
  searchedTrips = [],
  className = "",
}) => {
  useDocumentTitle("Trang chủ | Đặt vé xe");
  useScrollTop();

  const [selected, setSelected] = useState("");
  const [tabActiveState, setTabActiveState] = useState("");
  const [beginPoint, setBeginPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");

  useEffect(() => {
    setBeginPoint(searchedTrips[0].fromProvince);
    setDestinationPoint(searchedTrips[0].toProvince);
  }, []);

  const handleClickTab = (item: any) => {
    return item;
  };
  return (
    <div
      className={`nc-SectionListTrips relative flex flex-col lg:flex-row ${className}`}
      data-nc-id="SectionListTrips"
    >
      {/* Filter Section */}
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5 sm:rounded-2xl sm:border space-y-8 px-0 sm:p-6 xl:p-8 h-3/6">
        <div className="grid gap-y-1">
          <div className="relative">
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
      {/* Path Section */}
      <div className="lg:block flex-grow mb-10">
        <p className="xl:text-lg font-semibold pb-8 text-2xl">
          {beginPoint}&nbsp;-&nbsp;{destinationPoint}
        </p>
        {/* Path Details */}
        <div className="gap-y-4">
          {searchedTrips.map((trip, ind) => (
            <div
              key={ind}
              className="grid gap-y-1 sm:rounded-2xl sm:border space-y-4 px-0 sm:p-6 xl:p-8"
            >
              <div className="flex justify-between">
                {/* Begin Point */}
                <div className="flex justify-around items-center">
                  <p className="text-xl">{trip.startTime}&nbsp;</p>
                  <div className="text-neutral-300 dark:text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dot"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    </svg>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex justify-between items-center w-4/5">
                  <div className="w-2/5">
                    <div className="border-b md:border-dotted border-neutral-200 dark:border-neutral"></div>
                    <div></div>
                  </div>
                  <div className="w-1/5 text-center">3 giờ</div>
                  <div className="w-2/5">
                    <div className="border-b md:border-dotted border-neutral-200 dark:border-neutral"></div>
                    <div></div>
                  </div>
                </div>

                {/* Destination point */}
                <div className="flex justify-around items-center">
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
                  <p className="text-xl">&nbsp;{trip.endTime}</p>
                </div>
                <div className="flex justify-end w-2/4">
                  <div className="text-neutral-300 dark:text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </div>
                  <p>&nbsp;{trip.avaiableSeats} chỗ trống</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p>{trip.fromProvince}</p>
                <p className="w-2/4 text-right">{trip.toProvince}</p>
                <div>
                  <span className="text-xl font-semibold text-secondary-6000">
                    {trip.price}đ
                  </span>
                </div>
              </div>
              <hr />

              {/* Detail Trips - Header*/}
              <nav
                className="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
                data-nc-id="Nav"
              >
                <ul className="flex  sm:space-x-2">
                  {tabs.map((item, index) => (
                    <li
                      className="nc-NavItem relative"
                      data-nc-id="NavItem"
                      key={index}
                    >
                      <button
                        className={`block !leading-none whitespace-nowrap text-sm sm:text-base sm:px-4 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none 
                      ${
                        tabActiveState === item
                          ? "underline dark:text-neutral-100 text-neutral-900 bg-neutral-100 dark:bg-neutral-800"
                          : ""
                      }`}
                        onClick={() => setTabActiveState(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                  <button
                    className={`sm:px-4 sm:py-1.5 rounded-full focus:outline-none bg-neutral-800 dark:bg-neutral-300 text-white dark:text-neutral-900`}
                  >
                    Chọn chuyến
                  </button>
                </ul>
              </nav>

              {/* Details Trip - Body */}

              {/* Schedules */}
              <div className="overflow-y-auto" style={{ height: "30rem" }}>
                {trip.route.pickupPoints.map((pickupPoint, index) => (
                  <div key={index} className="flex">
                    <div className="text-neutral-300 dark:text-neutral-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={index === 0 ? "green" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dot"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm space-y-0.5">{pickupPoint.title}</p>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        {pickupPoint.address}
                      </p>
                      <div className="space-y-2">&nbsp;</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionListTrips;
