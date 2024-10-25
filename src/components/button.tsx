import { useState } from "react";

export default function Button() {
  const defaultButton = `flex gap-x-4 hover:shadow-lg border rounded-xl text-2xl justify-center ease-in duration-300 mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]`;

  // 선택된 버튼들을 저장하는 배열
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  // 버튼 클릭 시 실행되는 함수
  const handleButtonClick = (button: string) => {
    if (activeButtons.includes(button)) {
      // 이미 선택된 버튼이면 배열에서 제거
      setActiveButtons(activeButtons.filter((b) => b !== button));
    } else {
      // 선택되지 않은 버튼이면 배열에 추가
      setActiveButtons([...activeButtons, button]);
    }
    console.log(
      `현재 활성화된 버튼들: ${[...activeButtons, button].join(", ")}`
    );
  };

  return (
    <div className="flex gap-x-4 text-2xl text-primary mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]">
      <button
        type="button"
        onClick={() => handleButtonClick("현금")}
        className={`${defaultButton} ${
          activeButtons.includes("현금") ? "text-white bg-primary" : ""
        }`}
      >
        현금
      </button>
      <button
        type="button"
        onClick={() => handleButtonClick("카드")}
        className={`${defaultButton} ${
          activeButtons.includes("카드") ? "text-white bg-primary" : ""
        }`}
      >
        카드
      </button>
      <button
        type="button"
        onClick={() => handleButtonClick("계좌이체")}
        className={`${defaultButton} ${
          activeButtons.includes("계좌이체") ? "text-white bg-primary" : ""
        }`}
      >
        계좌이체
      </button>
    </div>
  );
}
