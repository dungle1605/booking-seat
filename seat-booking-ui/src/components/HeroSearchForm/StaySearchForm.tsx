import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import { FocusedInputShape } from "react-dates";
import StayDatesRangeInput from "./StayDatesRangeInput";
import moment from "moment";
import { FC } from "react";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean;
  beginPoints: string[];
  destinationPoints: string[];
}

function addDays(date: number, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultDateRange = {
  startDate: moment(),
  endDate: moment().add(4, "days"),
};
const defaultTicketValue = 1;

const StaySearchForm: FC<StaySearchFormProps> = ({
  haveDefaultValue = false,
  beginPoints = [],
  destinationPoints = [],
}) => {
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null,
  });
  const [locationInputValue, setLocationInputValue] = useState("");
  const [ticketValue, setTicketValue] = useState(defaultTicketValue);

  const [dateFocused, setDateFocused] = useState<FocusedInputShape | null>(
    null
  );

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue(defaultDateRange);
      setTicketValue(defaultTicketValue);
    }
  }, []);
  //

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <LocationInput
          defaultPoints={beginPoints}
          placeHolder="Điểm đi"
          desc="Lựa chọn điểm đi"
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused("startDate")}
          className="flex-[1.5]"
        />
        <LocationInput
          defaultPoints={destinationPoints}
          placeHolder="Điểm đến"
          desc="Lựa chọn điểm đến"
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused("startDate")}
          className="flex-[1.5]"
        />
        <StayDatesRangeInput
          defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onChange={(data) => setDateRangeValue(data)}
          className="flex-[2]"
        />
        <GuestsInput
          defaultValue={ticketValue}
          onChange={(data) => setTicketValue(data)}
          className="flex-[1.2]"
        />
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
