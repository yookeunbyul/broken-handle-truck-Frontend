import Input from "../components/Input.tsx";
import { Controller, useForm } from "react-hook-form";
import useFadeNavigate from "../hooks/useFadeNavigate.ts";
import KakaoIcon from "../assets/images/kakao.svg?react";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useFadeNavigate();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="bg-black h-full flex flex-col justify-center items-center sm:gap-10">
      <p className="text-3xl font-point text-white py-8">로그인</p>
      <form
        className="w-full flex flex-col gap-16 sm:gap-24 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "이메일은 필수 입력 항목입니다.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "잘못된 이메일 형식입니다.",
              },
            }}
            render={({
              field: { onChange, value, name },
              fieldState: { invalid },
              formState,
            }) => (
              <div className="relative">
                <Input
                  name={name}
                  value={value}
                  onChange={onChange}
                  id="email"
                  label="이메일"
                  type="text"
                  placeholder="example@gmail.com"
                />
                {invalid && (
                  <p className="absolute top-full left-[50px] sm:left-[100px] text-primary">
                    {formState.errors.email?.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "비밀번호는 필수 입력 항목입니다.",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: "영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요.",
              },
            }}
            render={({
              field: { onChange, value, name },
              fieldState: { invalid },
              formState,
            }) => (
              <div className="relative">
                <Input
                  name={name}
                  value={value}
                  onChange={onChange}
                  id="password"
                  label="비밀번호"
                  type="password"
                  placeholder="**********"
                />

                {invalid && (
                  <p className="absolute top-full left-[50px] sm:left-[100px] text-primary">
                    {formState.errors.password?.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <button className="bg-primary mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] py-5 text-white rounded-lg font-bold">
            로그인
          </button>
          <p className="text-white text-xs py-2 line-text">또는</p>
          <button
            type="button"
            className="mb-4 bg-kakao text-kakao-black mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] py-5 rounded-lg font-bold relative"
          >
            <KakaoIcon
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width={24}
              height={24}
            />
            카카오 로그인
          </button>
          <p
            className="text-white cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            계정이 없으신가요?{" "}
            <strong className="text-primary font-bold">가입하기</strong>
          </p>
        </div>
      </form>
    </div>
  );
}
