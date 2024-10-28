import { Map } from "react-kakao-maps-sdk";
import Toggle from "../components/Toggle";
import Search from "../components/map/Search";
import MyLocation from "../components/map/MyLocation";
import { useEffect, useRef, useState } from "react";
import { useMyLocation } from "../hooks/useMyLocation";

interface Coordinates {
  lat: number;
  lng: number;
}

export default function MapPage() {
  const [mapCenter, setMapCenter] = useState<Coordinates>({
    lat: 37.5563,
    lng: 126.99581,
  });
  const mapRef = useRef<kakao.maps.Map | null>(null);

  // useMyLocation 훅으로 현재 위치 받아오는 함수
  const { myLocation } = useMyLocation(({ latitude, longitude }) => {
    setMapCenter({ lat: latitude, lng: longitude });
  });

  const handleLocationChange = (coords: {
    latitude: number;
    longitude: number;
  }) => {
    setMapCenter({ lat: coords.latitude, lng: coords.longitude });
  };

  // 처음 로드될 때 내 위치로 이동
  useEffect(() => {
    myLocation();
  }, []);

  // mapCenter가 업데이트될 때마다 지도 중심 이동
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(
        new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng)
      );
    }
  }, [mapCenter]);

  return (
    <>
      <Map
        center={mapCenter}
        ref={mapRef}
        className="w-full h-full relative"
        level={4}
      >
        <Search />
        <div className="absolute bottom-24 right-3 z-10">
          <Toggle text={{ on: "영업중", off: "영업 종료" }} />
        </div>
        <MyLocation setMapCenter={handleLocationChange} />
      </Map>
    </>
  );
}
