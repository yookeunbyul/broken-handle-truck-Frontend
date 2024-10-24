interface ToggleProps {
  isOn: boolean;
  onClick: () => void;
  text?: {
    on?: string;
    off?: string;
  };
}

export default function Toggle({ isOn, onClick, text }: ToggleProps) {
  return (
    <div
      className={`p-2 rounded-full w-32 h-12 shadow-lg cursor-pointer group duration-300 relative ${isOn ? "bg-black" : "bg-category"}`}
      onClick={onClick}
    >
      <div
        className={`px-2 py-1 rounded-full w-2/3 text-center duration-300 absolute left-2 ${isOn ? "translate-x-[1.625rem] bg-primary text-white group-hover:bg-primary/80 group-hover:translate-x-[1.125rem]" : "bg-white text-category group-hover:bg-white/80 group-hover:translate-x-2"}`}
      >
        {isOn ? text?.on || "ON" : text?.off || "OFF"}
      </div>
    </div>
  );
}
