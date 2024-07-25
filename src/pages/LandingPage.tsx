import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LandingImg from "../components/LandingImg";
import { useMediaQueries } from "../hooks/UseMedia";

function LandingPage() {
  const { lg } = useMediaQueries();
  const navigate = useNavigate();
  if (lg)
    return (
      <div className="mx-[20px] flex h-screen items-center justify-between sm:mx-[40px] xl:mx-[70px] 2xl:mx-[96px]">
        <div className="flex w-[50%] flex-col justify-center gap-3">
          <h1 className="font-bold md:text-[35px] md:leading-[45px] lg:text-[35px] lg:leading-[45px] xl:text-[48px] xl:leading-[60px]">
            Proektlərini həyata keçirmək artıq{" "}
            <span className="text-primary-blue">daha asan!</span>
          </h1>
          <p className="md:text-[18px] lg:leading-6 xl:text-[20px]">
            Elə indi Bakı Ali Neft Məktəbinin bu möhtəşəm proekti ilə tanış
            olaraq bir çox prototipləşdirmə alətini, mikrokontrolleri kiralaya
            bilərsən!
          </p>
          <div className="mt-3 flex gap-4">
            <Button type="primary" onClick={() => navigate("/login")}>
              Giriş
            </Button>
            <Button type="secondary" onClick={() => navigate("/register")}>
              Qeydiyyat
            </Button>
          </div>
        </div>
        <div className="w-[50%]">
          <LandingImg />
        </div>
      </div>
    );
  else
    return (
      <div className="mx-[20px] flex h-screen w-[100%] flex-col items-center justify-center gap-3 sm:mx-[40px] sm:mt-0 sm:justify-center md:gap-6 xl:mx-[70px] 2xl:mx-[96px]">
        <h1 className="text-left text-[25px] font-bold leading-10 sm:text-[30px] md:text-[40px] md:leading-[45px] lg:text-[35px] lg:leading-[45px] xl:text-[48px] xl:leading-[60px]">
          Proektlərini həyata keçirmək artıq{" "}
          <span className="text-primary-blue">daha asan!</span>
        </h1>
        <p className="text-left text-[15px] leading-6 md:text-[18px] lg:leading-6 xl:text-[20px]">
          Elə indi Bakı Ali Neft Məktəbinin bu möhtəşəm proekti ilə tanış olaraq
          bir çox prototipləşdirmə alətini, mikrokontrolleri kiralaya bilərsən!
        </p>
        <div className="flex items-center gap-6 sm:gap-12">
          <Button type="primary" onClick={() => navigate("/login")}>
            Giriş
          </Button>
          <Button type="secondary" onClick={() => navigate("/register")}>
            Qeydiyyat
          </Button>
        </div>
      </div>
    );
}

export default LandingPage;
