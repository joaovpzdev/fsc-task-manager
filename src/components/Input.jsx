const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left w-full">
      <label
        className="text-left text-sm font-semibold text-[#35383E]"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        className="w-full text-left px-4 py-3 border-solid border border-[#ECECEC] rounded-lg placeholder:text-sm placeholder:text-[#9A9C9F] outline-[#00ADB5]"
        {...rest}
      />
    </div>
  );
};
export default Input;
