import { useNavigate, useLocation } from "react-router-dom";
import user from "../assets/images/user.svg";
import map from "../assets/images/map.svg";
import category from "../assets/images/category.svg";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 라우팅 경로를 처리하는 함수입니다
  const handleClick = (path: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  const isFocused = (path: string) => location.pathname === path;

  return (
    <div className="flex px-4 gap-2 border-t border-t-gray-200 bg-white bg-slate-800">
      <div
        className="flex flex-col w-full px-2 py-4 gap-1 items-center justify-center text-white cursor-pointer"
        onClick={() => handleClick("/test")}
      >
        <img
          src={map}
          width={24}
          height={24}
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        />
        <div
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        >
          지도
        </div>
      </div>
      <div
        className="flex flex-col w-full px-2 py-4 gap-1 items-center justify-center text-white"
        onClick={() => handleClick("/test")}
      >
        <img
          src={category}
          width={24}
          height={24}
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        />
        <div
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        >
          카테고리
        </div>
      </div>
      <div
        className="flex flex-col w-full px-2 py-4 gap-1 items-center justify-center text-white"
        onClick={() => handleClick("/test")}
      >
        <img
          src={user}
          width={24}
          height={24}
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        />
        <div
          className={`${
            isFocused("/test") ? "scale-110 font-black" : "font-normal"
          }`}
        >
          내 가게
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
