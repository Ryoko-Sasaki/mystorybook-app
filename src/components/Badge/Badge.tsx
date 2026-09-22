import React from "react";
import trophyIcon from "../../assets/figma/trophy-badge.svg";
import "./Badge.css";

type BadgeSize = "L" | "S";
type BadgeState = "alert" | "success" | "error" | "neutral";
type BadgeType = "number" | "dot" | "AI" | "Highlight" | "Label" | "Ranking";

type BadgeProps = {
  size?: BadgeSize;
  state?: BadgeState;
  type?: BadgeType;
  badgeNumber?: string;
  badgeTextLabel?: string;
  icon?: boolean;
  text?: boolean;
};

export const Badge = ({
  size = "L",
  state = "alert",
  type = "number",
  badgeNumber = "1",
  badgeTextLabel = "ラベル",
  icon = true,
  text = true,
}: BadgeProps) => {
  const className = `badge badge--${type} badge--${state} badge--${size}`;
  const showsTrophy = state === "neutral" && size === "L" && (type === "Highlight" || type === "Label") && icon;
  const showsNumber = type === "number" && size === "L" && (state === "alert" || state === "success");

  return (
    <span className={className}>
      {showsTrophy && <img className="badge__icon" src={trophyIcon} alt="" />}
      {showsNumber && <span className="badge__text">{badgeNumber}</span>}
      {type === "AI" && state === "neutral" && size === "L" && <span className="badge__text">AI</span>}
      {type === "Label" && state === "neutral" && size === "L" && text && <span className="badge__text">{badgeTextLabel}</span>}
      {type === "Ranking" && state === "neutral" && size === "L" && text && <span className="badge__text">{badgeNumber}</span>}
    </span>
  );
};
