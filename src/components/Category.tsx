import { Sheet } from "react-modal-sheet";
import Menu from "./Menu.tsx";
import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import { categories } from "../constants/categories.ts";

interface CategoryProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function Category({ isOpen, setOpen }: CategoryProps) {
  const navigate = useFadeNavigate();

  const handleCategoryClick = (target: string) => {
    setOpen(false);
    // 카테고리 필터 적용 후 Map으로 이동
    console.log(target);
    navigate(`/map`);
  };

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={[-50, 0.5, 100, 0]}
      initialSnap={1}
    >
      <Sheet.Container>
        <Sheet.Header className="relative top-[1px]" />
        <Sheet.Content className="overflow-auto">
          <div className="mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]">
            <p className="text-white font-bold text-lg sm:text-xl py-8">
              우리 동네 길거리음식, 찾아보세요!
            </p>
            <Sheet.Scroller>
              <div className="grid grid-cols-[repeat(auto-fit,75px)] gap-x-4 sm:gap-x-10 gap-y-8 justify-between">
                {categories.map(({ title, ImgComponent }, idx) => (
                  <div
                    key={`category_${idx}`}
                    className="cursor-pointer"
                    onClick={() => handleCategoryClick(title)}
                  >
                    <Menu title={title} ImgComponent={ImgComponent} />
                  </div>
                ))}
              </div>
            </Sheet.Scroller>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
