import { useEffect, useState } from "react";
import useTitleStore from "../../store/titleStore";
import Toggle from "../../components/Toggle";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useMyLocation } from "../../hooks/useMyLocation";
import InputSection from "../../components/register/InputSection";
import RegisterButton from "../../components/register/RegisterButton";

type Coordinates = [number, number];

export default function RegisterPage() {
  const { kakao } = window;
  const setTitle = useTitleStore((state) => state.setTitle);
  const [mapCenter, setMapCenter] = useState<Coordinates>([126.99581, 37.5563]); // 위치 설정
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  }); // 클릭한 위치에 마커 설정

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(""); // 주소
  const [name, setName] = useState<string>(""); // 가게 이름
  const [category, setCategory] = useState<string>(""); // 음식 카테고리
  const [payment, setPayment] = useState<string[]>([""]); // 결제 방식

  const { myLocation } = useMyLocation(({ latitude, longitude }) => {
    setMapCenter([longitude, latitude]);
  });

  const getAddress = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
    const coord = new kakao.maps.LatLng(lat, lng); // 주소로 변환할 좌표 입력
    const callback = function (result, status: kakao.maps.services.Status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    // console.log(address); // 주소 출력
  };

  useEffect(() => {
    setTitle("가게 등록");
    myLocation();
  }, []);

  return (
    <div>
      <div className="relative bg-review h-64 rounded-b-3xl">
        <Map
          className="w-full h-full rounded-b-3xl"
          center={{ lat: mapCenter[1], lng: mapCenter[0] }}
          level={4}
          onClick={(_, mouseEvent) => {
            const latlng = mouseEvent.latLng;
            setPosition({
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            });
            getAddress(latlng.getLat(), latlng.getLng());
          }}
        >
          {position && <MapMarker position={position} />}
        </Map>
        <div className="flex justify-end absolute bottom-3 z-10 w-[calc(100%-140px)] sm:w-[calc(100%-240px)] left-1/2 -translate-x-1/2">
          <Toggle
            text={{ on: "영업중", off: "영업 종료" }}
            setValue={setIsOpen}
          />
        </div>
      </div>
      <InputSection
        address={address}
        name={name}
        setName={setName}
        setCategory={setCategory}
        setPayment={setPayment}
      />
      <RegisterButton
        name={name}
        category={category}
        position={position}
        payment={payment}
        isOpen={isOpen}
      />
    </div>
  );
}
