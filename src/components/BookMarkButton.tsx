import StarIcon from "../assets/images/star.svg?react";

interface BookMarkButtonProps {
  isBookmarked: boolean;
  onClick: () => void;
  size?: number;
}

export default function BookMarkButton({
  isBookmarked,
  onClick,
  size = 20,
}: BookMarkButtonProps) {
  return (
    <div onClick={onClick} className="relative">
      <StarIcon
        width={size}
        height={size}
        className={`cursor-pointer ${isBookmarked ? "stroke-yellow-300 fill-yellow-300" : "stroke-[#f0f0f0] fill-[#f0f0f0]"}`}
      />
    </div>
  );
}
