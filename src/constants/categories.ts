import type { ICategory } from "../types/category.d.ts";

import C1 from "../assets/images/category/category-1.svg?react";
import C2 from "../assets/images/category/category-2.svg?react";
import C3 from "../assets/images/category/category-3.svg?react";
import C4 from "../assets/images/category/category-4.svg?react";
import C5 from "../assets/images/category/category-5.svg?react";
import C6 from "../assets/images/category/category-6.svg?react";
import C7 from "../assets/images/category/category-7.svg?react";
import C8 from "../assets/images/category/category-8.svg?react";
import C9 from "../assets/images/category/category-9.svg?react";
import C10 from "../assets/images/category/category-10.svg?react";
import C11 from "../assets/images/category/category-11.svg?react";
import C12 from "../assets/images/category/category-12.svg?react";
import C13 from "../assets/images/category/category-13.svg?react";

const categories: ICategory[] = [
  { title: "붕어빵", ImgComponent: C1 },
  { title: "어묵", ImgComponent: C2 },
  { title: "군고구마", ImgComponent: C3 },
  { title: "호떡", ImgComponent: C4 },
  { title: "문어빵", ImgComponent: C5 },
  { title: "찐빵", ImgComponent: C6 },
  { title: "떡볶이", ImgComponent: C7 },
  { title: "와플", ImgComponent: C8 },
  { title: "토스트", ImgComponent: C9 },
  { title: "통닭", ImgComponent: C10 },
  { title: "풀빵", ImgComponent: C11 },
  { title: "계란빵", ImgComponent: C12 },
  { title: "땅콩빵", ImgComponent: C13 },
  { title: "기타" },
];

export { categories };
