import { useMyLocation } from "../../hooks/useMyLocation";
import LocationIcon from "../../assets/images/locationIcon.svg?react";

interface Coordinates {
  latitude: number;
  longitude: number;
}
interface MyLocationProps {
  setMapCenter: (coords: Coordinates) => void; // setMapCenter의 타입 정의
}

export default function MyLocation({ setMapCenter }: MyLocationProps) {
  const { myLocation } = useMyLocation(setMapCenter); // 커스텀 훅 사용

  return (
    <LocationIcon
      className="w-16 h-16 absolute bottom-24 left-3 z-10 hover:cursor-pointer"
      onClick={myLocation}
    />
  );
}
