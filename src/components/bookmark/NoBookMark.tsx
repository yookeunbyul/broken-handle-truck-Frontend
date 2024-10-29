export default function NoBookMark() {
  return (
    <div className="flex flex-col justify-center items-center translate-y-1/2">
      <img src="./logo.svg" />
      <div className="text-center text-2xl font-point">
        북마크가 없습니다.
        <br />
        <span className="font-point text-primary">나만의 푸드트럭</span>을
        추가하세요!
      </div>
    </div>
  );
}
