export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  required,
  name,
  className,
  label,
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-white mb-1 text-sm">{label}</label>
      <div className="flex w-full items-center border border-4 border-purple-800 bg-gray-200 h-14 px-4 rounded">
        <input
          className={`h-4 bg-transparent text-purple-950 text-md w-full outline-none ${className}`}
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          required={required ? true : false}
        />
      </div>
    </div>
  );
};
