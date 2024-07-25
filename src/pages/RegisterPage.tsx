import Back from "../components/Back";
import RegisterForm from "../components/RegisterForm";
import RegisterVector from "../components/RegisterVector";
import { useMediaQueries } from "../hooks/UseMedia";

function RegisterPage() {
  const { sm, lg } = useMediaQueries();
  if (lg)
    return (
      <div className="relative flex">
        <Back />
        <div className="relative mt-4 flex w-1/2 flex-col items-center justify-center gap-2 bg-white px-[50px]">
          <h1 className="text-3xl font-semibold">Qeydiyyat</h1>
          <p className="thin self-start text-secondary-red">
            Qeydiyyat zamanı @bhos.edu.az domenli maildən istifadə edin.
          </p>
          <RegisterForm />
        </div>

        <div className="flex h-screen w-1/2 items-center justify-center bg-gradient-to-b from-[#1B97D0] to-[#0E587A]">
          <RegisterVector />
        </div>
      </div>
    );
  else
    return (
      <div className="mx-[30px] flex flex-col items-center justify-center gap-[40px] py-[30px] sm:mx-[50px] md:mx-[100px]">
        <Back />
        {sm && (
          <RegisterVector className={"mt-[30px] w-[320px] sm:w-[450px]"} />
        )}
        <div className="relative flex h-screen w-full flex-col items-center justify-center gap-3 bg-white sm:h-auto">
          <h1 className="text-3xl font-semibold">Qeydiyyat</h1>
          <RegisterForm />
        </div>
      </div>
    );
}

export default RegisterPage;
