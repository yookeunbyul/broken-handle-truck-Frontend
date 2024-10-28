import useFadeNavigate from "../hooks/useFadeNavigate.ts";

const MainPage = () => {
  const navigate = useFadeNavigate();

  return (
    <div className="bg-black h-full flex flex-col justify-center items-center">
      <div className="flex-[3] flex flex-col justify-center items-center gap-4">
        <img src="/logo.svg" alt="logo" />
        <p className="font-point text-white text-3xl">
          핸들이 고장난{" "}
          <strong className="text-primary font-point">푸드트럭</strong>
        </p>
      </div>
      <div className="flex-[2] flex flex-col justify-center items-center gap-4">
        <div
          className="bg-primary mx-auto px-10 py-5 text-white rounded-lg font-bold sm:px-36 cursor-pointer"
          onClick={() => navigate("/map")}
        >
          우리 동네 푸드트럭, 지금 바로 찾아보기
        </div>
        <p
          className="text-white cursor-pointer"
          onClick={() => navigate("/login")}
        >
          사장님이신가요?{" "}
          <strong className="text-primary font-bold">푸드트럭 등록하기</strong>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
