import { useLocation } from "react-router-dom";
import UserIcon from "../assets/images/user.svg?react";
import StarIcon from "../assets/images/star.svg?react";
import MapIcon from "../assets/images/map.svg?react";
import DefaultCategoryIcon from "../assets/images/category.svg?react";
import BellIcon from "../assets/images/bell.svg?react";
import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import useStoresStore from "../store/storesStore.ts";
import { useMemo } from "react";
import { categoryImages } from "../assets/images/category";

interface BottomNavBarProps {
  isOpenCategory: boolean;
  setOpenCategory: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

const BottomNavBar = ({
  isOpenCategory,
  setOpenCategory,
}: BottomNavBarProps) => {
  const navigate = useFadeNavigate();
  const { pathname } = useLocation();
  const { category } = useStoresStore();
  const CategoryIcon = useMemo(
    () => (category ? categoryImages[category].component : DefaultCategoryIcon),
    [category],
  );
  // 라우팅 경로를 처리하는 함수입니다
  const handleClick = (path: string) => {
    setOpenCategory(false);
    navigate(path);
  };

  const isFocused = (path: string) => !isOpenCategory && pathname === path;

  return (
    <div className="flex bg-black text-xs sticky bottom-0 z-[999999999] bottom-navbar">
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isOpenCategory
            ? `text-primary ${!category ? "stroke-primary" : ""}`
            : `text-white ${!category ? "stroke-white" : ""}`,
        ].join(" ")}
        onClick={() => setOpenCategory((prev) => !prev)}
      >
        <CategoryIcon width={24} height={24} />
        <p>카테고리</p>
      </div>
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isFocused("/notification")
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => handleClick("/notification")}
      >
        <BellIcon width={24} height={24} />
        <p>알림</p>
      </div>
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isFocused("/map")
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => handleClick("/map")}
      >
        <MapIcon width={24} height={24} />
        <p>지도</p>
      </div>
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isFocused("/bookmark")
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => handleClick("/bookmark")}
      >
        <StarIcon width={24} height={24} />
        <p>북마크</p>
      </div>
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isFocused("/my-page")
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => handleClick("/my-page")}
      >
        <UserIcon width={24} height={24} />
        <p>마이페이지</p>
      </div>
    </div>
  );
};

export default BottomNavBar;
