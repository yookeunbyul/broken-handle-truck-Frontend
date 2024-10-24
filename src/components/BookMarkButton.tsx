import StarIcon from "../assets/images/star.svg?react";

interface BookMarkButtonProps {
  isBookmarked: boolean;
  onClick: () => void;
}

export default function BookMarkButton({
  isBookmarked,
  onClick,
}: BookMarkButtonProps) {
  return (
    <div onClick={onClick} className="relative">
      <StarIcon
        width={20}
        height={20}
        className={`cursor-pointer ${isBookmarked ? "stroke-yellow-300 fill-yellow-300" : "stroke-[#f0f0f0] fill-[#f0f0f0]"}`}
      />
    </div>
  );
}
