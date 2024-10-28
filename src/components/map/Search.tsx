import React, { useState } from "react";
import SearchIcon from "../../assets/images/searchIcon.svg?react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") console.log("검색값은 ", searchTerm);
  };

  return (
    <div className="w-2/3 flex absolute items-center border border-gray rounded-lg gap-2 top-6 left-1/2 -translate-x-1/2 z-10 bg-white px-1 py-2">
      <SearchIcon className="w-6 h-6 cursor-pointer" />
      <input
        className="w-full text-base border-none outline-none"
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchTerm}
        onChange={inputHandler}
        onKeyDown={searchHandler}
      />
    </div>
  );
}
