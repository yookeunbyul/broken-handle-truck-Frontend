import { useSearch } from "../../hooks/useSearch";
import SearchIcon from "../../assets/images/searchIcon.svg?react";

export default function Search() {
  const { searchTerm, inputHandler, clickHandler, searchHandler } = useSearch();

  return (
    <div className="w-2/3 flex absolute items-center border border-gray rounded-lg gap-2 top-6 left-1/2 -translate-x-1/2 z-10 bg-white px-1 py-2">
      <SearchIcon className="w-6 h-6 cursor-pointer" onClick={clickHandler} />
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
