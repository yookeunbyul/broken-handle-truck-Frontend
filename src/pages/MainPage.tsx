import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import Logo from "../assets/images/pinkLogo.svg?react";

const MainPage = () => {
  const navigate = useFadeNavigate();

  return (
    <div className="bg-black h-full flex flex-col justify-center items-center">
      <div className="flex-[3] flex flex-col justify-center items-center gap-4">
        <Logo width={110} height={110} />
        <p className="font-point text-white text-3xl">
          핸들이 고장난{" "}
          <strong className="text-primary font-point">푸드트럭</strong>
        </p>
      </div>
      <div className="flex-[2] flex flex-col justify-center items-center gap-4">
        <div
          className="bg-primary text-lg mx-auto px-10 py-5 text-white rounded-lg font-bold sm:px-24 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          우리 동네 푸드트럭, 지금 바로 찾아보기
        </div>
      </div>
    </div>
  );
};

export default MainPage;
