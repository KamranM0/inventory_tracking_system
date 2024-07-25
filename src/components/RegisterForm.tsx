import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";

function RegisterForm() {
  return (
    <form className="flex w-full flex-col gap-2">
      <ul className="flex flex-col gap-2">
        <li>
          <label className="mb-2 block text-[#767676]">Salam</label>
          <div className="flex gap-4">
            <InputField marginBottom={2} placeholder="Ad"></InputField>
            <InputField marginBottom={2} placeholder="Soyad"></InputField>
          </div>
        </li>
        <li>
          <InputField marginBottom={2} label="E-Poçt" />
        </li>
        <li>
          <InputField
            label="Mobil nömrə"
            type="number"
            marginBottom={2}
            placeholder="+994 | Mobil nömrə"
          />
        </li>
        <li>
          <InputField marginBottom={2} label={"Şifrə"} />
        </li>
        <li>
          <InputField marginBottom={2} label="Şifrə təkrarı"></InputField>
        </li>
      </ul>

      <div className="mt-2 flex flex-col items-center justify-center gap-2">
        <Button
          className="h-12 w-full text-xl font-normal sm:h-12 sm:w-full sm:text-xl md:h-12 md:w-full md:text-xl lg:h-12 lg:text-xl"
          type="primary"
        >
          Qeydiyyatı tamamla
        </Button>
        <p>
          Hesabın var?{" "}
          <Link to="/login" className="text-secondary-red">
            Giriş
          </Link>
        </p>
      </div>
    </form>
  );
}
export default RegisterForm;
