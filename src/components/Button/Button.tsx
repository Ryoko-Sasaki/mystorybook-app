import React from "react";
import "./Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary" | "skeleton" | "skeleton-primary";
};

export const Button = ({
  children,
  onClick,
  disabled = false,
  size = "medium",
  variant = "primary",
}: ButtonProps) => {
  const buttonClassName = `button button--${variant} button--${size}`;

  // Skeletonは「ボタン」ではなくローディング用のプレースホルダー
  if (variant === "skeleton" || variant === "skeleton-primary") {
  return <div className={buttonClassName} aria-hidden="true" />;
}

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Button"}
    </button>
  );
};