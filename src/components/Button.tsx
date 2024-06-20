import type React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: "outlined" | "contained";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  variant = "contained",
  children,
}) => {
  const disabledColorContained = disabled
    ? "bg-gray-300 text-gray-500"
    : "bg-primary text-white";
  const disabledColorOutlined = disabled
    ? "bg-gray-300 text-gray-500"
    : "bg-transparent text-primary border border-primary";

  const hoverColorContained = disabled ? "" : "hover:bg-secondary";
  const hoverColorOutlined = disabled
    ? ""
    : "hover:border-gray-400 hover:text-gray-400";

  const hoverEffect =
    variant === "contained" ? hoverColorContained : hoverColorOutlined;

  return (
    <button
      className={`${
        variant === "contained" ? disabledColorContained : disabledColorOutlined
      } rounded-button w-68px p-button text-button font-button transition-colors duration-300 ease-in-out ${hoverEffect} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
