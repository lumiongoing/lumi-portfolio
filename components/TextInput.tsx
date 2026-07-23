import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function TextInput({ className, id, label, name, ...props }: TextInputProps) {
  const inputId = id ?? name;

  return (
    <label className="field" htmlFor={inputId}>
      <span className="field__label">{label}</span>
      <input
        className={["input", className].filter(Boolean).join(" ")}
        id={inputId}
        name={name}
        {...props}
      />
    </label>
  );
}
