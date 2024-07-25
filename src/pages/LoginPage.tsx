import { Link } from "react-router-dom";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";
import LoginVector from "../components/LoginVector";
import Back from "../components/Back";
import { useMediaQueries } from "../hooks/UseMedia";

function LoginPage() {
  const { lg } = useMediaQueries();
  if (lg)
    return (
      <div className="flex">
        <div className="flex h-screen w-1/2 items-center justify-center bg-gradient-to-b from-[#1B97D0] to-[#0E587A]">
          <LoginVector />
        </div>
        <div className="relative flex h-screen w-1/2 flex-col items-center justify-center gap-3 bg-white px-[50px]">
          <Back />
          <h1 className="text-3xl font-semibold">Giriş</h1>
          <LoginForm />
        </div>
      </div>
    );
  else
    return (
      <div className="mx-[30px] flex h-screen flex-col items-center justify-center gap-[50px] py-[30px] sm:mx-[50px] md:mx-[100px]">
        <Back />
        <LoginVector className={"mt-[30px] w-[320px] sm:w-[500px]"} />
        <div className="relative flex w-full flex-col items-center gap-3 bg-white">
          <h1 className="text-3xl font-semibold">Giriş</h1>
          <LoginForm />
        </div>
      </div>
    );
}

export default LoginPage;
