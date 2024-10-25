import CheckIcon from "../assets/images/check.svg?react";
import Input from "../components/Input.tsx";

export default function SignUpPage() {
  return (
    <div className="bg-black h-full flex flex-col justify-center items-center gap-10 relative">
      <p className="text-3xl font-point text-white py-8">회원가입</p>
      <form className="w-full flex flex-col gap-8 py-8">
        <Input id="email" label="이메일" placeholder="example@gmail.com">
          <button
            className="bg-primary text-xs text-white px-3 sm:px-6 py-2 rounded-lg"
            type="button"
          >
            중복확인
          </button>
        </Input>
        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="**********"
        >
          <CheckIcon width={24} height={24} className="stroke-primary" />
        </Input>
        <Input
          id="confirm-password"
          label="비밀번호 확인"
          type="password"
          placeholder="**********"
        >
          <CheckIcon width={24} height={24} className="stroke-primary" />
        </Input>
        <button className="bg-primary w-full py-5 text-white font-bold absolute bottom-0">
          회원가입
        </button>
      </form>
    </div>
  );
}
