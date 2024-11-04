import { toast } from "react-toastify";
import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import { deleteStore } from "../apis/store.ts";

interface EditStoreProps {
  clearMyStore: () => void;
}

export default function EditStore({ clearMyStore }: EditStoreProps) {
  const navigate = useFadeNavigate();

  const handleDeleteStore = () => {
    deleteStore().then((data) => {
      if (data.msg === "ok") {
        clearMyStore();
        toast.success("정상적으로 삭제되었습니다.");
      }
    });
  };

  return (
    <div className="border-t-1 bg-white border-comment">
      <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto pt-5 pb-5 flex gap-x-5">
        <button
          className="bg-secondary flex-1 p-5 rounded-lg tracking-tighter font-semibold"
          onClick={() => navigate(`/register`)}
        >
          내 가게 수정하기
        </button>
        <button
          className="border-1 border-placeholder text-placeholder flex-1 p-5 rounded-lg tracking-tighter font-semibold"
          onClick={handleDeleteStore}
        >
          가게 삭제하기
        </button>
      </div>
    </div>
  );
}
