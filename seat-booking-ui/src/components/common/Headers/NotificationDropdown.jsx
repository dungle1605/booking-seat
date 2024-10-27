import React, { Fragment } from 'react';
import logoImg from '../../../images/logo.png';
import { Popover, Transition } from "@headlessui/react";
import PropTypes from 'prop-types';

NotificationDropdown.propTypes = {
    className: PropTypes.string
};

NotificationDropdown.defaultProps = {
    className: ""
}

const notifications = [
    {
        name: "Hệ thống",
        description: "Thay đổi lịch trình Tp.HCM - Đà Lạt",
        time: "3 minutes ago",
        href: "##"
    },
    {
        name: "Hệ thống",
        description: "Thay đổi lịch trình Tp.HCM - Phan Thiết",
        time: "1 minute ago",
        href: "##"
    },
    {
        name: "Hệ thống",
        description: "Thay đổi lịch trình Tp.HCM - Vũng Tàu",
        time: "3 minutes ago",
        href: "##"
    },
];

function NotificationDropdown(props) {
    const { className } = props;
    return (
        <Popover className={`relative flex ${className}`}>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={` ${open ? "" : "text-opacity-90"
                            } group self-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative`}
                    >
                        <span className="w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"></span>
                        <BellIcon className="h-6 w-6" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 w-screen max-w-xs sm:max-w-sm px-4 top-full -right-28 sm:right-0 sm:px-0">
                            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                                    <h3 className="text-xl font-semibold">Notifications</h3>
                                    {notifications.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative"
                                        >
                                            <Avatar
                                                imgUrl={item.avatar}
                                                sizeClass="w-8 h-8 sm:w-12 sm:h-12"
                                            />
                                            <div className="ml-3 sm:ml-4 space-y-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                                    {item.description}
                                                </p>
                                                <p className="text-xs text-gray-400 dark:text-gray-400">
                                                    {item.time}
                                                </p>
                                            </div>
                                            <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}

export default NotificationDropdown;