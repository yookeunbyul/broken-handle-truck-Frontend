import React from "react";

interface InputProps {
  id: string;
  label: string;
  children?: React.ReactNode;
  value?: string;
  setValue?: (value: string) => void;
}

export default function Input({
  id,
  label,
  children,
  value,
  setValue,
  onChange,
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
        className="mb-2 text-xs text-white/50 mix-blend-difference tracking-tight"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className="w-full outline-none border-none rounded-lg bg-form px-3 py-4 placeholder:text-sm"
          {...props}
          value={value}
          onChange={onChange || ((e) => setValue && setValue(e.target.value))}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   setValue(e.target.value)
          // }
        />
        {children && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
