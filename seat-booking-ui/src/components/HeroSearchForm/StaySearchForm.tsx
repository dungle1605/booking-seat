import React, { useEffect, useMemo, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import { FocusedInputShape } from "react-dates";
import StayDatesRangeInput from "./StayDatesRangeInput";
import moment from "moment";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TripDataType } from "../../data/types";
import { getTrips } from "../../redux/actions/tripActions";
import { setLoading } from "../../redux/actions/miscActions";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean;
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

  const [isFetching, setFetching] = useState(false);

  const store = useSelector((state: { trips: { items: TripDataType[] } }) => ({
    trips: state.trips.items,
    state: state,
  }));

  const dispatch = useDispatch();

  const fetchTrips = () => {
    setFetching(true);
    dispatch(getTrips());
  };

  useEffect(() => {
    if (store.trips.length === 0 || !store.trips) {
      fetchTrips();
    }

    window.scrollTo(0, 0);
    dispatch(setLoading(false));
  }, []);

  const beginPoints = useMemo(() => {
    return store.trips.map((t) => t.fromProvince)
  }, [store.trips])

  const destinationPoints = useMemo(() => {
    return store.trips.map((t) => t.toProvince)
  }, [store.trips]) 

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