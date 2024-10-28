import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NotificationDropdown from "./NotificationDropdown";
import DropdownTravelers from "./DropdownTravelers";
// import HeroSearchForm2Mobile from "./HeroSearchForm2Mobile";

Navigations.propTypes = {
  className: PropTypes.string,
};

function Navigations(props) {
  const { className } = props;
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="w-24 self-center" />
          <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="hidden lg:flex ">
            <DropdownTravelers />
          </div>
        </div>

        {/* <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2Mobile />
        </div> */}

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden lg:flex space-x-1">
            <NotificationDropdown className={""} />
            {/* <AvatarDropdown /> */}
          </div>
          <div className="flex space-x-2 lg:hidden">
            <NotificationDropdown />
            {/* <AvatarDropdown />
            <MenuBar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigations;
