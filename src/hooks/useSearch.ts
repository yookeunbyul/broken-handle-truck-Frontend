import { useState } from "react";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const clickHandler = () => {
    console.log("검색 아이콘 클릭", searchTerm);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") console.log("엔터 키 결과: ", searchTerm);
  };

  return { searchTerm, inputHandler, clickHandler, searchHandler };
};
