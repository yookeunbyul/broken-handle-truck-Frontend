import React from "react";

interface Category {
  title: string;
  ImgComponent?: React.FC<{ width?: number; height?: number }>;
}

export type { Category };
