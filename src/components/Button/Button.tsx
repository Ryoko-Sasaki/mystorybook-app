import React from "react";
import "./Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  state?: "default" | "hover";
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary" | "tertiary" | "danger-primary" | "skeleton" | "skeleton-primary";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button = ({
  children,
  onClick,
  disabled = false,
  state = "default",
  size = "medium",
  variant = "primary",
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const buttonClassName = `button button--${variant} button--${size}${state === "hover" ? " button--hover" : ""}`;

  // Skeletonは「ボタン」ではなくローディング用のプレースホルダー
  if (variant === "skeleton" || variant === "skeleton-primary") {
  return <div className={buttonClassName} aria-hidden="true" />;
}

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <span className="button__icon">{iconLeft}</span>}
      {children || "Button"}
      {iconRight && <span className="button__icon">{iconRight}</span>}
    </button>
  );
};
