import { toast } from "react-toastify";
import { postStore } from "../../apis/store";
import useFadeNavigate from "../../hooks/useFadeNavigate";
import useMyStore from "../../hooks/useMyStore.ts";

interface RegisterButtonProps {
  // 식당(트럭_) 이름
  name: string;
  // 카테고리
  category: string;
  // 위도 경도
  position: {
    lat: number;
    lng: number;
  };
  // 결제 방식
  payment: string[];
  // 오픈 여부
  isOpen: boolean;
}

export default function RegisterButton({
  name,
  category,
  position,
  payment,
  isOpen,
}: RegisterButtonProps) {
  const navigate = useFadeNavigate();
  const { refetch } = useMyStore();

  const submitHandler = async () => {
    // 값이 비어 있는지 검사
    if (
      !name ||
      !category ||
      !position ||
      !position.lat ||
      !position.lng ||
      !payment ||
      payment.length === 0
    ) {
      toast.error("모든 입력 요소를 채워주세요");
      return; // 값이 비어 있으면 함수 실행을 종료
    }

    // api 통신 후 성공하면 마이페이지로 이동
    const res = await postStore({
      name,
      lon: position.lng,
      lat: position.lat,
      category,
      paymentMethod: payment,
      isOpen,
    });

    if (res.msg === "ok") {
      refetch().then(() => {
        navigate(`/my-truck`);
        toast.success("저장되었습니다.");
      });
    }
  };
  return (
    <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto pt-3 my-10">
      <button
        className="bg-primary text-lg py-5 w-full text-white rounded-lg font-bold text-center"
        onClick={submitHandler}
        type="button"
      >
        내 가게 등록하기
      </button>
    </div>
  );
}
