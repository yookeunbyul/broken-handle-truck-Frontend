import C1 from "./category-1.svg?react";
import c1 from "./category-1.svg";
import m1 from "./marker-1.svg";
import C2 from "./category-2.svg?react";
import c2 from "./category-2.svg";
import m2 from "./marker-2.svg";
import C3 from "./category-3.svg?react";
import c3 from "./category-3.svg";
import m3 from "./marker-3.svg";
import C4 from "./category-4.svg?react";
import c4 from "./category-4.svg";
import m4 from "./marker-4.svg";
import C5 from "./category-5.svg?react";
import c5 from "./category-5.svg";
import m5 from "./marker-5.svg";
import C6 from "./category-6.svg?react";
import c6 from "./category-6.svg";
import m6 from "./marker-6.svg";
import C7 from "./category-7.svg?react";
import c7 from "./category-7.svg";
import m7 from "./marker-7.svg";
import C8 from "./category-8.svg?react";
import c8 from "./category-8.svg";
import m8 from "./marker-8.svg";
import C9 from "./category-9.svg?react";
import c9 from "./category-9.svg";
import m9 from "./marker-9.svg";
import C10 from "./category-10.svg?react";
import c10 from "./category-10.svg";
import m10 from "./marker-10.svg";
import C11 from "./category-11.svg?react";
import c11 from "./category-11.svg";
import m11 from "./marker-11.svg";
import C12 from "./category-12.svg?react";
import c12 from "./category-12.svg";
import m12 from "./marker-12.svg";
import C13 from "./category-13.svg?react";
import c13 from "./category-13.svg";
import m13 from "./marker-13.svg";
import DefaultMenu from "../defaultMenu.svg?react";
import defaultMenu from "../defaultMenu.svg";
import defaultMenuMarker from "./marker-default.svg";
import { ICategory } from "../../../types/category";

export const categoryImages: {
  [key: string]: {
    component: ICategory["ImgComponent"];
    url: string;
    marker: string;
  };
} = {
  붕어빵: { component: C1, url: c1, marker: m1 },
  어묵: { component: C2, url: c2, marker: m2 },
  군고구마: { component: C3, url: c3, marker: m3 },
  호떡: { component: C4, url: c4, marker: m4 },
  문어빵: { component: C5, url: c5, marker: m5 },
  찐빵: { component: C6, url: c6, marker: m6 },
  떡볶이: { component: C7, url: c7, marker: m7 },
  와플: { component: C8, url: c8, marker: m8 },
  토스트: { component: C9, url: c9, marker: m9 },
  통닭: { component: C10, url: c10, marker: m10 },
  풀빵: { component: C11, url: c11, marker: m11 },
  계란빵: { component: C12, url: c12, marker: m12 },
  땅콩빵: { component: C13, url: c13, marker: m13 },
  기타: { component: DefaultMenu, url: defaultMenu, marker: defaultMenuMarker },
};
