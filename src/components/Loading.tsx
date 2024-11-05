import LogoIcon from "../assets/images/pinkLogo.svg?react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center animate-spin">
      <LogoIcon width={80} />
    </div>
  );
}
