type Props = { label: string };
function InputField({ label }: Props) {
  return (
    <li>
      <label className="mb-3 block text-[#767676]">{label}</label>
      <input
        className="h-[50px] w-full rounded-sm bg-[#E4E4E4] p-4 placeholder:text-[#767676] md:h-[60px] lg:h-[50px]"
        placeholder={label}
      ></input>
    </li>
  );
}

export default InputField;
