"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { ForwardedRef, forwardRef } from "react";
import { FieldErrors, useController, Control } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { InputGlobalProps } from "@/models/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { IMaskInput } from "react-imask";
import { twMerge } from "tailwind-merge";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Tooltip from "./Tooltip";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  control: Control<any>;
  errors?: FieldErrors<InputGlobalProps>;
  name: keyof InputGlobalProps;
  value?: string | number | any;
  mask?: any;
  required?: boolean;
  isLoginPage?: boolean;
  information?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      value,
      label,
      type,
      placeholder,
      control,
      errors,
      mask,
      required,
      isLoginPage,
      defaultValue,
      className,
      information,
      ...rest
    }: InputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      field: { ref, ...inputProps },
      fieldState: { error },
    } = useController({
      name,
      control,
      rules: { required: required },
      defaultValue: defaultValue || "",
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        <label
          htmlFor={id}
          className={`flex select-none truncate text-sm font-semibold leading-5 ${
            error ? "-top-[40%] text-[#FF0404]" : "-top-[60%] left-1"
          } ${
            isLoginPage
              ? "text-color-light dark:text-color-light"
              : "text-color-light dark:text-color-dark"
          }`}
        >
          {required ? (
            <>
              {label}
              <span className="text-[#FF0404]">*</span>
            </>
          ) : (
            <>{label}</>
          )}
          {information && (
            <>
              <Tooltip title={information} side="top">
                <InformationCircleIcon className="h-5 w-6" />
              </Tooltip>
            </>
          )}
        </label>
        <div
          className={twMerge(
            `relative ${error ? "rounded-md bg-[#FF0404]" : ""}`,
            className
          )}
        >
          <IMaskInput
            mask={mask}
            {...inputProps}
            {...rest}
            inputRef={ref}
            className={`focus:inset peer max-h-9 w-full appearance-none rounded-md border px-1.5 py-1.5 text-sm focus:border focus:outline-none ${
              isLoginPage &&
              "bg-secondary-light text-color-light dark:bg-secondary-light dark:text-color-light"
            } ${
              error
                ? `invalid:border-b-1 border-[#FF0404] focus:border-[#FF0404] dark:border-[#FF0404] dark:bg-secondary-dark`
                : "border-[#d9d9d9] text-color-light focus:border-orange-light dark:border-color-dark dark:bg-secondary-dark dark:text-color-dark dark:focus:border-orange-dark"
            }`}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            id={id}
            placeholder={placeholder}
          />
          {type === "password" && (
            <>
              {showPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute -top-1.5 right-3.5 z-20 h-6 w-6 translate-y-2/4 cursor-pointer text-color-light ${
                    isLoginPage
                      ? "dark:text-color-light"
                      : "dark:text-color-dark"
                  }`}
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute -top-1.5 right-3.5 z-20 h-6 w-6 translate-y-2/4 cursor-pointer text-color-light ${
                    isLoginPage
                      ? "dark:text-color-light"
                      : "dark:text-color-dark"
                  }`}
                />
              )}
            </>
          )}
          {error && (
            <span className="flex items-center gap-1 pb-1 pl-2 text-white">
              <ExclamationCircleIcon className="h-6 w-6" />
              <p className="pt-1 text-xs sm:text-sm">{error.message}</p>
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
