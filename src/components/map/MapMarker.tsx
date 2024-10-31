import { ComponentProps } from "react";
import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";
import { categoryImages } from "../../assets/images/category";

interface MapMarkerProps
  extends Pick<ComponentProps<KakaoMapMarker>, "title" | "onClick"> {
  category: string;
  coordinates: [number, number];
}

export default function MapMarker({
  coordinates,
  category,
  title,
  onClick,
}: MapMarkerProps) {
  return (
    <KakaoMapMarker
      position={{ lat: coordinates[1], lng: coordinates[0] }}
      title={title}
      onClick={onClick}
      image={{
        src: categoryImages[category].marker,
        size: { width: 30, height: 30 },
        options: {
          shape: "circle",
        },
      }}
    />
  );
}
