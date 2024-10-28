import { useState } from "react";

export const useToggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };
  console.log(isOn); // 현재 영업 상태 확인용

  return { isOn, toggleHandler };
};
