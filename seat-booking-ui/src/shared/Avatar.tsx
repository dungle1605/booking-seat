import React from "react";
import { avatarColors } from "../constants/constants";
import PropTypes from "prop-types";
import avatar1 from "../images/avatars/Image-1.png";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
  hasChecked?: boolean;
  hasCheckedClass?: string;
}

Avatar.propTypes = {
  containerClassName: PropTypes.string,
  sizeClass: PropTypes.string,
  radius: PropTypes.string,
  imgUrl: PropTypes.string,
  userName: PropTypes.string,
  hasChecked: PropTypes.bool,
  hasCheckedClass: PropTypes.string,
};

Avatar.defaultProps = {
  containerClassName: "ring-1 ring-white dark:ring-neutral-900",
  sizeClass: "h-6 w-6 text-sm",
  radius: "rounded-full",
  imgUrl: avatar1,
  userName: "",
  hasChecked: null,
  hasCheckedClass: "w-4 h-4 -top-0.5 -right-0.5",
};

function Avatar(props) {
  const {
    imgUrl,
    userName,
    radius,
    hasChecked,
    hasCheckedClass,
    sizeClass,
    containerClassName,
  } = props;

  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };
  return (
    <div
      className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: imgUrl ? undefined : _setBgColor(userName) }}
    >
      {imgUrl && (
        <img
          className={`absolute inset-0 w-full h-full object-cover ${radius}`}
          src={imgUrl}
          alt={userName}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>

      {hasChecked && (
        <span
          className={` bg-teal-500 rounded-full text-white text-xs flex items-center justify-center absolute  ${hasCheckedClass}`}
        >
          <i className="las la-check"></i>
        </span>
      )}
    </div>
  );
}

export default Avatar;
