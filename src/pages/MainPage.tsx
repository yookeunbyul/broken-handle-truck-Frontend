import { Link } from "react-router-dom";

const MainPage = () => {
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
        <Link to="/map">
          <div className="bg-primary mx-auto px-10 py-5 text-white rounded-lg font-bold sm:px-36">
            우리 동네 푸드트럭, 지금 바로 찾아보기
          </div>
        </Link>
        <Link to="/login">
          <p className="text-white">
            사장님이신가요?{" "}
            <strong className="text-primary font-bold">
              푸드트럭 등록하기
            </strong>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
