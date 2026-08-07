const Button = ({
  children,
  variant = "primary",
  onClick,
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00adb5] text-white font-semibold";
    }
    if (variant === "secondary") {
      return "bg-transparent text-[#818181]";
    }
    if (variant === "tertiary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
    if (variant === "quaternary") {
      return "bg-red-600 text-white"
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return " py-1 text-xs";
    }
    if (size === "large") {
      return " py-2 text-sm";
    }
  };

  return (
    <button
      className={`flex items-center justify-center hover:opacity-50 gap-2 font-semibold rounded-md px-3 py-1 text-xs transition ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
