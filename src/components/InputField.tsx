type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  marginBottom?: number;
};
function InputField({ label, placeholder, type, marginBottom }: Props) {
  return (
    <>
      {label && (
        <label className={`mb-${marginBottom || 3} block text-[#767676]`}>
          {label}
        </label>
      )}

      <input
        type={type}
        className="h-[50px] w-full rounded-sm bg-[#E4E4E4] p-4 placeholder:text-[#767676] md:h-[60px] lg:h-[50px]"
        placeholder={placeholder || label}
      ></input>
    </>
  );
}

export default InputField;
