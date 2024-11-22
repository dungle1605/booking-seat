import React, { useEffect, useMemo, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import { FocusedInputShape } from "react-dates";
import StayDatesRangeInput from "./StayDatesRangeInput";
import moment from "moment";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TripDataType } from "../../data/types";
import { getTrips, searchTrip } from "../../redux/actions/tripActions";
import { setLoading } from "../../redux/actions/miscActions";
import ReactLoading from "react-loading";

export interface DateRage {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean;
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
  const [beginPointInputValue, setBeginPointInputValue] = useState("");
  const [destPointInputValue, setDestPointInputValue] = useState("");
  const [ticketValue, setTicketValue] = useState(defaultTicketValue);
  const [listDest, setListDest] = useState<string[]>([]);

  const [dateFocused, setDateFocused] = useState<FocusedInputShape | null>(
    null
  );

  const [isFetching, setFetching] = useState(false);

  const store = useSelector((state: { trips: { items: TripDataType[] } }) => ({
    trips: state.trips.items,
    state: state,
  }));

  useEffect(() => {
    setTimeout(() => {
      console.log('Delay 3 seconds for fetching');
      setFetching(false);
    }, 3000)
  }, [isFetching == true])

  const dispatch = useDispatch();

  const fetchTrips = () => {
    setFetching(true);
    dispatch(getTrips());
  };

  useEffect(() => {
    if (store.trips.length === 0 || !store.trips) {
      fetchTrips();
    }
    dispatch(setLoading(false));
  }, []);

  const beginPoints = useMemo(() => {
    return store.trips
      .map((t) => t.fromProvince)
      .reduce<string[]>((arr: string[], cur: string) => {
        if (!arr.includes(cur)) arr.push(cur);
        return arr;
      }, []);
  }, [store.trips]);

  const handleDestList = (e: string) => {
    var destList = store.trips
      .filter((t) => t.fromProvince === e)
      .map((t) => t.toProvince)
      .reduce<string[]>((arr: string[], cur: string) => {
        if (!arr.includes(cur)) arr.push(cur);
        return arr;
      }, []);

    setListDest(destList);
    return destList;
  };

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue(defaultDateRange);
      setTicketValue(defaultTicketValue);
    }
  }, []);

  const validateInputData = (amountOfTicket: number) => {
    setTicketValue(amountOfTicket);

    if (
      beginPointInputValue !== "" &&
      destPointInputValue !== "" &&
      dateRangeValue.startDate != null &&
      dateRangeValue.endDate != null
    )
    {
      setFetching(true)
      dispatch(
        searchTrip({
          beginPointInputValue,
          destPointInputValue,
          dateRangeValue,
          amountOfTicket,
        })
      );
    }
    
  };
  //

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        {isFetching && (<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"><ReactLoading type='spin' color='#ffffff' delay={200} height={50} width={50} /></div>)}
        <LocationInput
          defaultPoints={beginPoints}
          placeHolder="Điểm đi"
          desc="Lựa chọn điểm đi"
          onChange={(e) => setBeginPointInputValue(e)}
          onInputDone={(e) => handleDestList(e)}
          className="flex-[1.5]"
        />
        <LocationInput
          defaultPoints={listDest}
          placeHolder="Điểm đến"
          desc="Lựa chọn điểm đến"
          onChange={(e) => setDestPointInputValue(e)}
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
          onChange={(data) => validateInputData(data)}
          className="flex-[1.2]"
        />
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
