const Input = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left w-full">
      <label
        className="text-left text-sm font-semibold text-[#35383E]"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        className={`w-full text-left px-4 py-3 border-solid rounded-lg placeholder:text-sm placeholder:text-[#9A9C9F] outline-[#00ADB5] ${error ? "border-red-500 bg-red-50" : "border-[#ECECEC] bg-white"}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${rest.id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${rest.id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};
export default Input;
