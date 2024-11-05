import React, { FC } from "react";
import StaySearchForm from "./StaySearchForm";

export interface HeroSearchFormProps {
  className?: string;
  beginPoints: string[];
  destinationPoints: string[];
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  beginPoints = [],
  destinationPoints = [],
}) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-7xl py-5 lg:py-0 ${className}`}
      data-nc-id="HeroSearchForm"
    >
      <StaySearchForm
        haveDefaultValue={false}
        beginPoints={beginPoints}
        destinationPoints={destinationPoints}
      />
    </div>
  );
};

export default HeroSearchForm;
