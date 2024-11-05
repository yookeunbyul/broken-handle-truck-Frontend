import { useState } from "react";
import useStoresStore from "../store/storesStore.ts";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setSearchTerm: setKeyword } = useStoresStore();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value); // input change 값 확인용
    setSearchTerm(e.target.value);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 엔터 키 입력 시 input 데이터 값 확인용
      console.log("엔터 키 결과: ", searchTerm);
      setKeyword(searchTerm);
    }
  };

  return { searchTerm, inputHandler, searchHandler };
};
