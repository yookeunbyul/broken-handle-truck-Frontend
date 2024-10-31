import C1 from "./category-1.svg?react";
import c1 from "./category-1.svg";
import C2 from "./category-2.svg?react";
import c2 from "./category-2.svg";
import C3 from "./category-3.svg?react";
import c3 from "./category-3.svg";
import C4 from "./category-4.svg?react";
import c4 from "./category-4.svg";
import C5 from "./category-5.svg?react";
import c5 from "./category-5.svg";
import C6 from "./category-6.svg?react";
import c6 from "./category-6.svg";
import C7 from "./category-7.svg?react";
import c7 from "./category-7.svg";
import C8 from "./category-8.svg?react";
import c8 from "./category-8.svg";
import C9 from "./category-9.svg?react";
import c9 from "./category-9.svg";
import C10 from "./category-10.svg?react";
import c10 from "./category-10.svg";
import C11 from "./category-11.svg?react";
import c11 from "./category-11.svg";
import C12 from "./category-12.svg?react";
import c12 from "./category-12.svg";
import C13 from "./category-13.svg?react";
import c13 from "./category-13.svg";
import DefaultMenu from "../defaultMenu.svg?react";
import defaultMenu from "../defaultMenu.svg";
import { ICategory } from "../../../types/category";

export const categoryImages: {
  [key: string]: { component: ICategory["ImgComponent"]; url: string };
} = {
  붕어빵: { component: C1, url: c1 },
  어묵: { component: C2, url: c2 },
  군고구마: { component: C3, url: c3 },
  호떡: { component: C4, url: c4 },
  문어빵: { component: C5, url: c5 },
  찐빵: { component: C6, url: c6 },
  떡볶이: { component: C7, url: c7 },
  와플: { component: C8, url: c8 },
  토스트: { component: C9, url: c9 },
  통닭: { component: C10, url: c10 },
  풀빵: { component: C11, url: c11 },
  계란빵: { component: C12, url: c12 },
  땅콩빵: { component: C13, url: c13 },
  기타: { component: DefaultMenu, url: defaultMenu },
};
