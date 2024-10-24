import star from "../assets/images/star.svg";
import leftArrow from "../assets/images/leftArrow.svg";
import { useNavigate } from "react-router-dom";

type TopBarProps = {
  title?: string;
};

export default function TopBar({ title }: TopBarProps) {
  const navigate = useNavigate();

  const onClickLeft = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/");
      });
    } else {
      navigate("/");
    }
  };

  const onClickRight = () => {};

  return (
    <div className="flex w-full h-12 bg-[#EF5E7A] justify-between items-center px-4 py-4 relative">
      <div className="flex items-center gap-4">
        <div onClick={onClickLeft}>
          <img
            width={20}
            height={20}
            src={leftArrow}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
        {title}
      </div>
      <div className="flex justify-end items-center gap-spacing-05">
        <div onClick={onClickRight} className="relative">
          <img width={20} height={20} src={star} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
