import React from "react";

interface InputProps {
  id: string;
  label: string;
  children?: React.ReactNode;
}

export default function Input({
  id,
  label,
  children,
  ...props
}: InputProps &
  Omit<
    React.ComponentPropsWithoutRef<"input">,
    keyof InputProps | "className"
  >) {
  return (
    <div className="mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-sm text-white/50 mix-blend-difference"
      >
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
