import { useEffect } from "react";
import useTitleStore from "../../store/titleStore";
import Toggle from "../../components/Toggle";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/button";
import useFadeNavigate from "../../hooks/useFadeNavigate";
import { Map } from "react-kakao-maps-sdk";

export default function RegisterPage() {
  const navigate = useFadeNavigate();
  const setTitle = useTitleStore((state) => state.setTitle);

  useEffect(() => {
    setTitle("가게 등록");
  }, []);

  return (
    <div>
      <div className="relative bg-review h-64 rounded-b-3xl">
        <Map
          className="w-full h-full"
          center={{ lat: 37.5533, lng: 126.97381 }}
          level={5}
        />
        <div className="absolute bottom-3 right-4 z-10">
          <Toggle text={{ on: "영업중", off: "영업 종료" }} />
        </div>
      </div>
      <div className="w-[calc(100%-45px)] flex flex-col gap-y-5 mx-auto my-10">
        <Input id="location" label="가게 위치" placeholder="가게 위치" />
        <Input id="name" label="가게 이름" placeholder="가게 이름" />
        <Select />
        <Button />
      </div>
      <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto my-10">
        <button
          className="bg-primary text-lg py-5 w-full text-white rounded-lg font-bold text-center"
          onClick={() => navigate(`/my-truck`)}
        >
          내 가게 등록하기
        </button>
      </div>
    </div>
  );
}
