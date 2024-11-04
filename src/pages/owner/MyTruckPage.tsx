import { useCallback, useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getMyStore } from "../../apis/store";
import useTitleStore from "../../store/titleStore";
import useFadeNavigate from "../../hooks/useFadeNavigate";
import Button from "../../components/button";
import NoReview from "../../components/NoReview";
import EditStore from "../../components/EditStore";
import Comment from "../../components/Comment.tsx";
import MapMarker from "../../components/map/MapMarker.tsx";
import Logo from "../../assets/images/pinkLogo.svg?react";
import MessageSquare from "../../assets/images/messageSquare.svg?react";
import type { IStore } from "../../types/store";
import type { IComment } from "../../types/comment";

export default function MyTruckPage() {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const setTitle = useTitleStore((state) => state.setTitle);
  const navigate = useFadeNavigate();

  const [myStore, setMyStore] = useState<IStore | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  // resize될 때 marker를 가운데에 두기 위한 함수
  const handleUpdateMapCenter = useCallback(() => {
    if (mapRef.current && myStore) {
      mapRef.current.setCenter(
        new window.kakao.maps.LatLng(
          myStore.coordinates[1],
          myStore.coordinates[0],
        ),
      );
    }
  }, [myStore]);

  useEffect(() => {
    window.addEventListener("resize", handleUpdateMapCenter);
    return () => {
      window.removeEventListener("resize", handleUpdateMapCenter);
    };
  }, [handleUpdateMapCenter]);

  useEffect(() => {
    getMyStore().then((data) => {
      setMyStore(data.store);
      if (data.store) {
        setTitle(data.store.name);
        setComments(data.comments);
      } else {
        setTitle("내 가게");
      }
    });
  }, []);

  return (
    <>
      {myStore ? (
        <div className="relative h-full flex flex-col">
          <div className="bg-review h-64 rounded-b-3xl">
            <Map
              className="w-full h-full rounded-b-3xl"
              center={{
                lat: myStore.coordinates[1],
                lng: myStore.coordinates[0],
              }}
              level={5}
            >
              <MapMarker
                title={myStore.name}
                category={myStore.category}
                coordinates={myStore.coordinates}
                onClick={() => {}}
              />
            </Map>
          </div>
          <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto mt-10 mb-5">
            <label className="text-xs text-white/50 mix-blend-difference tracking-tight">
              카테고리
            </label>
            <div className="mt-2 w-full outline-none border-none rounded-lg bg-form p-3">
              {myStore.category}
            </div>
          </div>
          <Button />

          <div className="flex w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto items-center gap-x-1 pt-11 mb-3">
            <MessageSquare width={16} height={16} />
            <span className="tracking-tighter pb-1">
              고객님이 남겨준 리뷰(<strong className="text-primary">0</strong>)
            </span>
          </div>
          <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto pb-11">
            {comments.length !== 0 ? (
              <>
                {comments.map((comment) => (
                  <Comment
                    key={`my-truck-comment_${comment._id}`}
                    {...comment}
                  />
                ))}
              </>
            ) : (
              <NoReview />
            )}
          </div>
          <div className="sticky bottom-0 w-full bg-white z-10">
            {" "}
            {/* sticky로 변경 */}
            <EditStore clearMyStore={() => setMyStore(null)} />
          </div>
        </div>
      ) : (
        <div className="h-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center mb-5">
              <Logo width={130} height={130} />
            </div>
            <div>
              <div className="font-point text-2xl sm:text-3xl tracking-tighter whitespace-nowrap">
                푸드트럭이 없습니다.
              </div>
              <div className="font-point text-2xl sm:text-3xl tracking-tighter whitespace-nowrap">
                사장님, 가게를{" "}
                <span className="text-primary font-point">등록</span>해주세요!
              </div>
            </div>
            <div className="pt-8 w-full">
              <button
                className="bg-primary text-xl text-white font-bold w-full py-5 rounded-lg"
                onClick={() => navigate(`/register`)}
              >
                내 가게 등록하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
