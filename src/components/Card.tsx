import BookMarkButton from "./BookMarkButton";
import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import { categoryImages } from "../assets/images/category";
import { categories } from "../constants/categories.ts";

interface CardProps {
  isOpen: boolean;
  info: {
    id: string;
    category: string;
    name: string;
    visited: number;
  };
  bg: string;
}
export default function Card({
  isOpen = false,
  info,
  bg = "black",
}: CardProps) {
  const navigate = useFadeNavigate();
  const ImgComponent =
    // 이후 categoryImages[info.category].component 로 수정 필요
    categoryImages[categories.includes(info.category) ? info.category : "기타"]
      .component;

  const handleClick = () => {};

  return (
    <div
      className={`bg-${bg} mx-auto w-[calc(100%-50px)] sm:w-full rounded-2xl p-6 flex flex-col gap-y-5 ${
        bg === "white" ? "drop-shadow-lg" : null
      }`}
    >
      <div className="tracking-tight flex gap-x-3">
        <div className="flex-none flex items-center justify-center">
          {ImgComponent && <ImgComponent width={90} height={90} />}
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <div className="text-xs text-category">{info.category}</div>
          <div
            className={`${bg === "white" ? "text-black" : "text-white"} font-bold text-base`}
          >
            {info.name}
          </div>
          <div className="gap-x-1 text-xs text-category bg-count px-2 py-1 rounded-2xl whitespace-nowrap inline-flex max-w-fit">
            <span>최근 방문</span>
            <span className="text-white">{info.visited}명</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-2 pt-2">
          <div className="flex justify-end">
            <BookMarkButton
              isBookmarked={true}
              onClick={handleClick}
              size={30}
            />
          </div>
          <div className="flex justify-end text-xs gap-x-1 text-white items-center">
            <div
              className={`w-1 h-1 rounded-full ${isOpen ? "bg-success" : "bg-red-500"}`}
            ></div>
            <div
              className={`whitespace-nowrap ${bg === "white" ? "text-black" : "text-white"}`}
            >
              {isOpen ? "운영중" : "운영종료"}
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button
          className="text-right bg-primary py-2 px-3 tracking-tight rounded-md text-white font-bold text-sm"
          onClick={() => navigate(`/detail/${info.id}`)}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}
