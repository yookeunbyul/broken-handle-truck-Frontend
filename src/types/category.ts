import React from "react";

interface ICategory {
  title: string;
  ImgComponent?: React.FC<{ width?: number; height?: number }>;
}

export type { ICategory };
