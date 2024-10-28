import CheckIcon from "../assets/images/check.svg?react";
import Input from "../components/Input.tsx";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleCheckEmail = async (email: string) => {
    if (errors.email) {
      setIsEmailChecked(false);
      return;
    }
    const result = email !== "example@gmail.com"; // 함수 실행!!!
    if (!result) {
      setError(
        "email",
        {
          type: "registeredEmail",
          message: "이미 등록된 이메일입니다.",
        },
        { shouldFocus: true }
      );
      setIsEmailChecked(false);
    } else {
      setIsEmailChecked(true);
    }
  };

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className="bg-black h-full flex flex-col justify-center items-center gap-10 relative">
      <p className="text-3xl font-point text-white py-8">회원가입</p>
      <form
        className="w-full flex flex-col gap-8 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                onChange={(e) => {
                  onChange(e);
                  setIsEmailChecked(false);
                }}
                id="email"
                label="이메일"
                placeholder="example@gmail.com"
              >
                <button
                  className="bg-primary text-xs text-white px-3 sm:px-6 py-2 rounded-lg"
                  type="button"
                  onClick={() => handleCheckEmail(value)}
                >
                  중복확인
                </button>
              </Input>
              {invalid && (
                <p className="absolute top-full left-[50px] sm:left-[100px] text-primary">
                  {formState.errors.email?.message}
                </p>
              )}
              {isEmailChecked && (
                <p className="absolute top-full left-[50px] sm:left-[100px] text-success">
                  사용할 수 있는 이메일입니다.
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
            fieldState: { invalid, isDirty },
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
              >
                {isDirty && !invalid && (
                  <CheckIcon
                    width={24}
                    height={24}
                    className="stroke-primary"
                  />
                )}
              </Input>
              {invalid && (
                <p className="absolute top-full left-[50px] sm:left-[100px] text-primary">
                  {formState.errors.password?.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: {
              matchPassword: (value) =>
                getValues().password === value ||
                "비밀번호가 일치하지 않습니다.",
            },
          }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid, isDirty },
            formState,
          }) => (
            <div className="relative">
              <Input
                name={name}
                value={value}
                onChange={onChange}
                id="confirm-password"
                label="비밀번호 확인"
                type="password"
                placeholder="**********"
              >
                {isDirty && !invalid && (
                  <CheckIcon
                    width={24}
                    height={24}
                    className="stroke-primary"
                  />
                )}
              </Input>
              {invalid && (
                <p className="absolute top-full left-[50px] sm:left-[100px] text-primary">
                  {formState.errors.confirmPassword?.message}
                </p>
              )}
            </div>
          )}
        />
        <button
          className="bg-primary w-full py-5 text-white font-bold absolute bottom-0 disabled:bg-primary/50 disabled:text-white/50 disabled:cursor-default"
          disabled={!isEmailChecked || !isValid}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
