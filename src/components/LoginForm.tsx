import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";

function LoginForm() {
  return (
    <form className="flex w-full flex-col gap-3">
      <ul className="flex flex-col gap-3">
        <InputField label={"E-poçt"} />
        <InputField label={"Şifrə"} />
      </ul>

      <div className="flex flex-col items-center justify-center gap-3">
        <Link className="self-end text-primary-blue">Şifrəmi unutdum</Link>
        <Button
          className="h-12 w-full text-xl font-normal sm:h-12 sm:w-full sm:text-xl md:h-12 md:w-full md:text-xl lg:h-12 lg:text-xl"
          type="primary"
        >
          Daxil ol
        </Button>
        <p>
          Hesabın yoxdur? <Link className="text-primary-blue">Qeydiyyat</Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
