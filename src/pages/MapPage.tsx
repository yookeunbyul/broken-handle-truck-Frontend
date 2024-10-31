import { useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getStoreList } from "../apis/store.ts";
import { useMyLocation } from "../hooks/useMyLocation";
import Toggle from "../components/Toggle";
import Search from "../components/map/Search";
import MyLocation from "../components/map/MyLocation";
import Card from "../components/Card";
import MapMarker from "../components/map/MapMarker.tsx";
import ReloadIcon from "../assets/reload.svg?react";
import { IStore } from "../types/store";
import { categories } from "../constants/categories.ts";

type Coordinates = [number, number];

export interface Marker extends IStore {
  commentCount: number;
  isContinue?: boolean;
}

export default function MapPage() {
  // 맵 옮겼는지 여부
  const [isMapMove, setIsMapMove] = useState(false);

  // 마커 클릭 여부
  const [clickMarker, setClickMarker] = useState<Marker | null>(null);

  // 초기 위치 설정
  const [mapCenter, setMapCenter] = useState<Coordinates>([126.99581, 37.5563]);

  const [storeList, setStoreList] = useState<
    (IStore & { commentCount: number })[]
  >([]);

  const mapRef = useRef<kakao.maps.Map | null>(null);

  // useMyLocation 훅으로 현재 위치 받아오는 함수
  const { myLocation } = useMyLocation(({ latitude, longitude }) => {
    setMapCenter([longitude, latitude]);
  });

  const handleLocationChange = (coords: {
    latitude: number;
    longitude: number;
  }) => {
    setMapCenter([coords.longitude, coords.latitude]);
  };

  const updateStoreList = (lat: number, lon: number) => {
    getStoreList({ lat, lon }).then((data) => {
      setStoreList(data.stores);
    });
    setIsMapMove(false);
  };

  const handleReloadStoreList = () => {
    if (mapRef.current) {
      const latlng = mapRef.current?.getCenter();
      if (latlng) {
        const lon = latlng.getLng();
        const lat = latlng.getLat();
        updateStoreList(lat, lon);
      }
    }
  };

  // 처음 로드될 때 내 위치로 이동
  useEffect(() => {
    myLocation();
  }, []);

  // mapCenter가 업데이트될 때마다 지도 중심 이동
  useEffect(() => {
    if (mapRef.current) {
      const [lon, lat] = mapCenter;
      mapRef.current.setCenter(new window.kakao.maps.LatLng(lat, lon));
      updateStoreList(lat, lon);
    }
  }, [mapCenter]);

  return (
    <>
      <Map
        center={{ lat: mapCenter[1], lng: mapCenter[0] }}
        ref={mapRef}
        className="w-full h-full relative"
        level={4}
        onDragEnd={() => setIsMapMove(true)}
        onClick={() => setClickMarker(null)}
      >
        {storeList.map((data) => (
          <MapMarker
            key={`${data.name}-${data._id}`}
            // 나중에 임시데이터 지우면 data.category로 변경
            category={
              categories.includes(data.category) ? data.category : "기타"
            }
            coordinates={data.coordinates}
            title={data.name}
            onClick={() => {
              setClickMarker(data as Marker);
            }}
          />
        ))}

        <Search />
        {/* 맵을 이동한 경우 활성화 */}
        {isMapMove && (
          <button
            className="absolute top-24 left-1/2 -translate-x-1/2 z-10 bg-white text-primary border-1 border-primary rounded-full px-4 py-2 text-xs shadow flex items-center gap-1"
            onClick={handleReloadStoreList}
          >
            <ReloadIcon width={16} height={16} />
            <span>현 지도에서 검색</span>
          </button>
        )}
        {/* 영업 여부 토글은 로그인 여부에 따라서 달라짐 */}
        <div className="absolute flex items-center justify-between bottom-24 z-10 w-9/12 left-1/2 -translate-x-1/2">
          <MyLocation setMapCenter={handleLocationChange} />
          <Toggle text={{ on: "영업중", off: "영업 종료" }} />
        </div>
        {clickMarker ? (
          <div className="absolute inset-x-1/2 -translate-x-1/2 bottom-24 z-10 w-full">
            <Card
              isOpen={clickMarker.isOpen}
              info={{
                id: clickMarker._id,
                category: clickMarker.category,
                name: clickMarker.name,
                visited: clickMarker.commentCount,
              }}
              bg="black"
            />
          </div>
        ) : null}
      </Map>
    </>
  );
}
