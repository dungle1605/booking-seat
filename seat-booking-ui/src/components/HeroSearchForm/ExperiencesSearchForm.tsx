import React, { useEffect, useState } from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
import moment from "moment";
import { FC } from "react";

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = "Tokyo, Jappan";
const defaultDate = moment();
const defaultTicketValue = 1;

export interface ExperiencesSearchFormProps {
  haveDefaultValue?: boolean;
}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({
  haveDefaultValue,
}) => {
  const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
  const [locationInputValue, setLocationInputValue] = useState("");
  const [ticketValue, setTicketValue] = useState(defaultTicketValue);

  const [dateFocused, setDateFocused] = useState<boolean>(false);
  //

  useEffect(() => {
    if (haveDefaultValue) {
      setdateValue(defaultDate);
      setLocationInputValue(defaultLocationValue);
      setTicketValue(defaultTicketValue);
    }
  }, []);

  //

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700  md:divide-y-0">
        <LocationInput
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused(true)}
          className="flex-[1.5]"
        />

        <ExperiencesDateSingleInput
          defaultValue={dateValue}
          onChange={(date) => setdateValue(date)}
          defaultFocus={dateFocused}
          onFocusChange={(focus: boolean) => {
            setDateFocused(focus);
          }}
          className="flex-1"
        />

        <GuestsInput
          defaultValue={ticketValue}
          onChange={(data) => setTicketValue(data)}
          className="flex-[1.5]"
          buttonSubmitHref="/listing-experiences"
        />
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
