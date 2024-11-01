import Icon from "../assets/images/defaultMenu.svg?react";

interface MenuProps {
  title: string;
  isSelected?: boolean;
  ImgComponent?: React.FC<{ width?: number; height?: number }>;
}

export default function Menu({
  title,
  isSelected,
  ImgComponent = Icon,
}: MenuProps) {
  return (
    <div className="inline-block">
      <div
        className={`flex justify-center rounded-full p-3 ${isSelected ? "bg-primary" : "bg-secondary"}`}
      >
        <ImgComponent width={50} height={50} />
      </div>

      <div className="flex justify-center text-base tracking-tighter mt-2 text-white">
        {title}
      </div>
    </div>
  );
}
