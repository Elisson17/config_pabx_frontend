"use client";
import React, {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
} from "react";
import { InputGlobalProps } from "@/models/input";
import { FieldErrors, useController, Control } from "react-hook-form";
import { BiErrorCircle, BiX } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./ui/select";

interface Options {
  id: number;
  name?: string;
  label?: string;
  announcement?: string;
  template_type?: string;
  who_execute?: string;
  role?: string;
  type_channels?: string;
  trigger_type?: string;
  deliver_options?: string;
  status?: string;
  start_type?: string;
  widget?: string;
  color?: string;
  message_type?: string;
  next_obj?: string;
  destiny_type?: string;
}

export interface SelectOption extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: keyof InputGlobalProps;
  control: Control<any>;
  options: Options[] | undefined;
  required?: boolean;
  errors?: FieldErrors<InputGlobalProps>;
  typeValue?:
    | "template_type"
    | "string"
    | "who_execute"
    | "role"
    | "type_channels"
    | "status"
    | "deliver_options"
    | "trigger_type"
    | "start_type"
    | "widget"
    | "color"
    | "message_type"
    | "next_obj"
    | "destiny_type"
    | "name"
    | "plugin"
    | "announcement";
  value?: string | number;
  setSelectedOption?: (value: string) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectOption>(
  (
    {
      id,
      name,
      options,
      value,
      label,
      control,
      placeholder,
      required,
      defaultValue,
      className,
      errors,
      typeValue,
      setSelectedOption,
      ...rest
    }: SelectOption,
    forwardedRef: ForwardedRef<HTMLSelectElement>
  ) => {
    const {
      field: { ref, onChange, ...inputProps },
      fieldState: { error },
    } = useController({
      name,
      control,
      rules: { required: required },
      defaultValue: defaultValue || "",
    });

    const getTranslation = (typeValue: string, option: Options) => {
      return option.name || "";
    };

    const getSelectedOptionName = (value: string | number) => {
      const selectedOption = options?.find(
        (option) =>
          (!typeValue || (typeValue && typeValue in option)) &&
          (option[(typeValue as keyof Options) || "id"] as any).toString() ===
            (value ? value.toString() : "")
      );

      return selectedOption
        ? typeValue
          ? selectedOption.name
          : selectedOption.name || selectedOption.id
        : "";
    };

    const clearSelection = () => {
      if (setSelectedOption && inputProps.value) {
        setSelectedOption("");
        onChange("");
      }
      onChange("");
    };

    useEffect(() => {
      if (setSelectedOption) {
        setSelectedOption(inputProps?.value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputProps?.value]);

    return (
      <div>
        <label
          htmlFor={id}
          className={`block select-none truncate text-sm font-semibold leading-5 text-color-light dark:text-color-dark ${
            error ? "-top-[40%] text-[#FF0404]" : "-top-[60%] left-1"
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
        </label>
        <div
          className={twMerge(
            `relative ${error ? "rounded-md bg-[#FF0404]" : ""}`,
            className
          )}
        >
          <SelectComponent
            {...inputProps}
            value={inputProps.value || defaultValue}
            onValueChange={onChange}
            name={name}
            required={required}
          >
            <SelectTrigger
              id={id}
              ref={ref}
              value={inputProps.value || defaultValue}
              className={`border bg-secondary-light dark:bg-secondary-dark ${
                inputProps.value
                  ? "text-color-light dark:text-color-dark"
                  : "text-gray-400"
              } ${
                error
                  ? "border-[#FF0404] focus:border-[#FF0404] dark:border-[#FF0404] dark:focus:border-[#FF0404]"
                  : "border-[#d9d9d9] dark:border-color-dark"
              }`}
            >
              {getSelectedOptionName(inputProps.value) || placeholder}
            </SelectTrigger>
            <SelectContent className="h-auto max-h-56">
              {options?.map((option, index) => (
                <SelectItem
                  key={index}
                  value={
                    (typeValue && typeValue in option
                      ? option[typeValue as keyof Options]
                      : option.id ?? "") as string
                  }
                >
                  {getTranslation(typeValue!, option)}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectComponent>
          {inputProps.value && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 top-1 flex items-center pr-2 text-[#FF0404]"
              onClick={clearSelection}
            >
              <BiX />
            </button>
          )}
          {error && (
            <span className="flex items-center gap-1 pb-1 pl-2 text-white">
              <BiErrorCircle size={20} />
              <p className="pt-1 text-xs sm:text-sm">{error.message}</p>
            </span>
          )}
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
