"use client";
import React, { InputHTMLAttributes } from "react";
import { ForwardedRef, forwardRef } from "react";
import { FieldErrors, useController, Control } from "react-hook-form";
import { InputGlobalProps } from "@/models/input";
import { FaCheck } from "react-icons/fa";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control: Control<any>;
  errors?: FieldErrors<InputGlobalProps>;
  name: keyof InputGlobalProps;
  value?: string | number | any;
  type?: "checkbox" | "radio";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      id,
      name,
      value,
      label,
      type = "checkbox",
      placeholder,
      control,
      errors,
      defaultValue,
      ...rest
    }: CheckBoxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    const {
      field: { ref, ...inputProps },
      fieldState: { error },
    } = useController({
      name,
      control,

      defaultValue: defaultValue || "",
    });

    return (
      <div className="inline-flex select-none items-center">
        <label
          htmlFor={id}
          form={id}
          className="relative flex cursor-pointer items-center justify-start gap-2 text-sm font-normal text-color-light dark:text-color-dark"
        >
          <input
            {...inputProps}
            id={id}
            type={type}
            {...rest}
            className="peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-[#D9D9D9] transition-all checked:border-orange-light checked:bg-orange-light hover:before:opacity-10 dark:border-color-dark dark:checked:border-orange-dark dark:checked:bg-orange-dark"
            ref={ref}
            name={name}
            value={value}
            defaultValue={defaultValue}
          />
          <div className="pointer-events-none absolute left-2 top-2/4 -translate-x-2/4 -translate-y-2/4 text-secondary-light opacity-0 transition-opacity peer-checked:opacity-100">
            <FaCheck size={10} />
          </div>
          {label}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
