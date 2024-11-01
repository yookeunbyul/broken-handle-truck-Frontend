import Input from "../Input";
import Select from "../Select";
import Button from "../button";

interface InputSectionProps {
  name: string;
  setName: (name: string) => void;
  address: string;
  setCategory: (category: string) => void;
  setPayment: (payment: string[]) => void;
}

export default function InputSection({
  name,
  setName,
  address,
  setCategory,
  setPayment,
}: InputSectionProps) {
  return (
    <div className="w-[calc(100%-45px)] flex flex-col gap-y-5 mx-auto my-10">
      <Input
        id="location"
        label="가게 위치"
        placeholder="가게 위치를 지도에서 클릭해주세요"
        value={address}
        setValue={() => {}} // readOnly이므로 빈 함수 전달
        readOnly
      />
      <Input
        id="name"
        label="가게 이름"
        placeholder="가게 이름"
        setValue={setName}
        value={name}
      />
      <Select setValue={setCategory} />
      <Button setValue={setPayment} />
    </div>
  );
}
