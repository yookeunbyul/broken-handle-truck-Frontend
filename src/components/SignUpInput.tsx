import React from "react";

interface SignUpInputProps {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export default function SignUpInput({
  id,
  label,
  children,
  ...props
}: SignUpInputProps &
  Omit<
    React.ComponentPropsWithoutRef<"input">,
    keyof SignUpInputProps | "className"
  >) {
  return (
    <div className="mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] flex flex-col gap-2">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className="w-full outline-none border-none rounded-lg bg-form p-3"
          {...props}
        />
        {children && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
