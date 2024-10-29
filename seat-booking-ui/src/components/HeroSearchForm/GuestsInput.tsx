import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import { FC } from "react";
import ButtonSubmit from "./ButtonSubmit";
import { PathName } from "routers/types";

export interface GuestsInputProps {
  defaultValue: number;
  onChange?: (data: number) => void;
  fieldClassName?: string;
  className?: string;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
}

const GuestsInput: FC<GuestsInputProps> = ({
  defaultValue,
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
  className = "[ nc-flex-1 ]",
  buttonSubmitHref = "/listing-stay-map",
  hasButtonSubmit = true,
}) => {
  const [ticketValue, setTicketValue] = useState(defaultValue);
  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <Popover.Button
              className={`flex-1 flex text-left items-center ${fieldClassName} space-x-3 `}
              onClick={() => document.querySelector("html")?.click()}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nc-icon-field"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <span className="block mt-1 text-sm text-center text-neutral-400 leading-none font-light">
                  Số Vé
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  <NcInputNumber
                    className="w-full"
                    defaultValue={ticketValue}
                    onChange={(value) => setTicketValue(value)}
                    max={5}
                    min={1}
                    label=""
                    desc=""
                  />
                </span>
              </div>
            </Popover.Button>

            {/* BUTTON SUBMIT OF FORM */}
            {hasButtonSubmit && (
              <div className="pr-2 xl:pr-4">
                <ButtonSubmit href={buttonSubmitHref} />
              </div>
            )}
          </div>
        </>
      )}
    </Popover>
  );
};

export default GuestsInput;
