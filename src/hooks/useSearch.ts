import { useState } from "react";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // input change 값 확인용
    setSearchTerm(e.target.value);
  };

  const clickHandler = () => {
    // 검색 아이콘 클릭시 input 데이터 값 확인용
    console.log("검색 아이콘 클릭", searchTerm);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 엔터 키 입력 시 input 데이터 값 확인용
      console.log("엔터 키 결과: ", searchTerm);
    }
  };

  return { searchTerm, inputHandler, clickHandler, searchHandler };
};
