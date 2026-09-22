import React from "react";
import accountXlarge from "../../assets/figma/icon/account-xlarge.svg";
import accountLarge from "../../assets/figma/icon/account-large.svg";
import accountMedium from "../../assets/figma/icon/account-medium.svg";
import accountSmall from "../../assets/figma/icon/account-small.svg";
import accountXsmall from "../../assets/figma/icon/account-xsmall.svg";
import "./Icon.css";

type IconSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

type IconProps = {
  className?: string;
  iconSwap?: React.ReactNode;
  size?: IconSize;
};

const accountIcons: Record<IconSize, string> = {
  xsmall: accountXsmall,
  small: accountSmall,
  medium: accountMedium,
  large: accountLarge,
  xlarge: accountXlarge,
};

export const Icon = ({ className = "", iconSwap, size = "xlarge" }: IconProps) => (
  <span className={`icon icon--${size} ${className}`.trim()} aria-hidden={iconSwap ? undefined : true}>
    {iconSwap || <img src={accountIcons[size]} alt="" />}
  </span>
);
