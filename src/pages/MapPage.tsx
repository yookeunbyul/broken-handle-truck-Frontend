import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Toggle from '../components/Toggle';
import Search from '../components/map/Search';
import MyLocation from '../components/map/MyLocation';
import Card from '../components/Card';
import { useMyLocation } from '../hooks/useMyLocation';

import truckData from '../mocks/truckDatas.json';

interface Coordinates {
    lat: number;
    lng: number;
}

export interface MockMarker {

  id: number;
  name: string;
  category: string;
  coordinates: Coordinates;
  visited: number;
  isContinue: boolean;

}

export default function MapPage() {
    // 마커 클릭 여부
    const [clickMarker, setClickMarker] = useState<MockMarker | null>(null);

    // 초기 위치 설정
    const [mapCenter, setMapCenter] = useState<Coordinates>({
        lat: 37.5563,
        lng: 126.99581,
    });
    const mapRef = useRef<kakao.maps.Map | null>(null);

    // useMyLocation 훅으로 현재 위치 받아오는 함수
    const { myLocation } = useMyLocation(({ latitude, longitude }) => {
        setMapCenter({ lat: latitude, lng: longitude });
    });

    const handleLocationChange = (coords: { latitude: number; longitude: number }) => {
        setMapCenter({ lat: coords.latitude, lng: coords.longitude });
    };

    // 처음 로드될 때 내 위치로 이동
    useEffect(() => {
        myLocation();
    }, []);

    // mapCenter가 업데이트될 때마다 지도 중심 이동
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setCenter(new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng));
        }
    }, [mapCenter]);

    return (
        <>
            <Map
                center={mapCenter}
                ref={mapRef}
                className="w-full h-full relative"
                level={4}
                onClick={() => setClickMarker(null)}
            >
                {truckData.map((data) => (
                    <MapMarker
                        key={`${data.name}-${data.coordinates}`}
                        position={data.coordinates}
                        title={data.name}
                        onClick={() => {
                            setClickMarker(data);
                        }}
                    />
                ))}

                <Search />
                {/* 영업 여부 토글은 로그인 여부에 따라서 달라짐 */}
                <div className="absolute flex items-center justify-between bottom-24 z-10 w-9/12 left-1/2 -translate-x-1/2">
                    <MyLocation setMapCenter={handleLocationChange} />
                    <Toggle text={{ on: '영업중', off: '영업 종료' }} />
                </div>
                {clickMarker ? (
                    <div className="absolute inset-x-1/2 -translate-x-1/2 bottom-24 z-10 w-9/12">
                        <Card isOpen={false} info={clickMarker} bg="black" />
                    </div>
                ) : null}
            </Map>
        </>
    );

}
