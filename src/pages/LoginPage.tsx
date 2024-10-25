import Input from "../components/Input.tsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="bg-black h-full flex flex-col justify-center items-center gap-10">
      <p className="text-3xl font-point text-white py-8">로그인</p>
      <form className="w-full flex flex-col gap-24 py-8">
        <div className="flex flex-col gap-8">
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="example@gmale.com"
          />
          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <button className="mb-4 bg-primary mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] py-5 text-white rounded-lg font-bold">
            로그인
          </button>
          <Link to="/signup">
            <p className="text-white">
              계정이 없으신가요?{" "}
              <strong className="text-primary font-bold">가입하기</strong>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
