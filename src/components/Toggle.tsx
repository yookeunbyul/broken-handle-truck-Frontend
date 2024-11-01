import { useEffect } from "react";
import { useToggle } from "../hooks/useToggle";

interface ToggleProps {
  text?: {
    on?: string;
    off?: string;
  };
  setValue: (value: boolean) => void;
}

export default function Toggle({ text, setValue }: ToggleProps) {
  const { isOn, toggleHandler } = useToggle();

  useEffect(() => {
    setValue(isOn);
  }, [isOn, setValue]);
  return (
    <div
      className={`px-2 py-3 rounded-full w-32 h-12 shadow-lg cursor-pointer group duration-300 relative text-sm font-semibold tracking-tighter ${
        isOn ? "bg-black" : "bg-category"
      }`}
      onClick={toggleHandler}
    >
      <div
        className={`px-3 py-2 rounded-full w-2/3 text-center duration-300 absolute left-2 top-1/2 transform -translate-y-1/2 ${
          isOn
            ? "translate-x-6 bg-primary text-white group-hover:bg-primary/80 group-hover:translate-x-5"
            : "bg-white text-category group-hover:bg-white/80 group-hover:translate-x-1"
        }`}
      >
        {isOn ? text?.on || "ON" : text?.off || "OFF"}
      </div>
    </div>
  );
}
