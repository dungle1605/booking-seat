import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';

Navigations.propTypes = {
    className: PropTypes.string
};

Navigations.defaultProps = {
    className: ""
}

function Navigations(props) {
    const { className } = props
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

                <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
                    <div className="hidden lg:flex space-x-1">
                        <NotifyDropdown />
                        <AvatarDropdown />
                    </div>
                    <div className="flex space-x-2 lg:hidden">
                        <NotifyDropdown />
                        <AvatarDropdown />
                        <MenuBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigations;