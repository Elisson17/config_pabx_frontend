import React, { useState } from "react";
import { Control, FieldErrors, useController } from "react-hook-form";
import { InputGlobalProps } from "@/models/input";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BiErrorCircle, BiX } from "react-icons/bi";
import { Checkbox } from "./Checkbox";

interface Options {
  id: number;
  name: string;
}

type Props = {
  options: readonly Options[] | undefined;
  id: string;
  name: keyof InputGlobalProps;
  control: Control<any>;
  errors?: FieldErrors<InputGlobalProps>;
  multiple?: boolean;
  defaultValue?: string | number | readonly string[] | readonly number[];
  required?: boolean;
  placeholder?: string;
  label?: string;
  typeValue?: "id" | "string";
};

export function MultiSelect({
  options,
  id,
  name,
  errors,
  multiple,
  control,
  defaultValue,
  required,
  placeholder,
  label,
  typeValue,
  ...rest
}: Props) {
  const [open, setOpen] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(!defaultValue);

  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: required },
    defaultValue: defaultValue || [],
  });

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (selectedOption: Options) => {
    setShowPlaceholder(false);
    if (multiple) {
      if (typeValue === "id") {
        if (Array.isArray(value) && value.includes(selectedOption.id)) {
          onChange(value.filter((optionId) => optionId !== selectedOption.id));
        } else {
          onChange([...(Array.isArray(value) ? value : []), selectedOption.id]);
        }
      } else {
        if (Array.isArray(value) && value.includes(selectedOption.name)) {
          onChange(
            value.filter((optionId) => optionId !== selectedOption.name),
          );
        } else {
          onChange([
            ...(Array.isArray(value) ? value : []),
            selectedOption.name,
          ]);
        }
      }
    } else {
      if (typeValue === "id") {
        onChange(selectedOption.id);
      } else {
        onChange(selectedOption.name);
      }
    }
    setOpen(true);
  };

  const handleRemove = (optionToRemove: Options) => {
    if (Array.isArray(value)) {
      let newValue;
      if (typeValue === "id") {
        newValue = value.filter((optionId) => optionId !== optionToRemove.id);
      } else {
        newValue = value.filter((optionId) => optionId !== optionToRemove.name);
      }
      onChange(newValue);
      if (newValue.length === 0) {
        setShowPlaceholder(true);
      }
    }
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`block select-none truncate text-sm font-semibold leading-5 text-color-light  ${
          error ? "-top-[70%] text-[#FF0404]" : "-top-[60%] left-1"
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
      <div className={`${error ? "rounded-md bg-[#FF0404]" : ""}`}>
        <div
          ref={ref}
          className={`focus:inset peer flex h-auto min-h-[34px] w-full cursor-default appearance-none flex-col justify-center rounded-md border bg-secondary-light py-0.5 text-left text-sm shadow-sm focus:border focus:outline-none focus:ring-1 focus:ring-inset  ${
            error
              ? `invalid:border-b-1 border-[#FF0404] focus:border-[#FF0404] focus:ring-[#FF0404] `
              : "border-[#d9d9d9] text-color-light focus:border-orange-light focus:ring-orange-600"
          }`}
          onClick={handleClick}
          id={id}
        >
          {showPlaceholder && (
            <div className="flex items-end justify-between text-end">
              <p className="h-6 truncate pl-1.5 pt-1 text-start text-sm text-color-dark">
                {placeholder}
              </p>
              <span
                className={`pointer-events-none flex items-center pr-3 pt-1`}
              >
                <ChevronDownIcon
                  className={`z-0 mb-1 h-4 w-4 ${
                    open
                      ? "rotate-180 text-orange-light transition duration-200 "
                      : "rotate-0 text-color-light transition duration-200 "
                  } ${error ? "text-red-600" : ""}`}
                  aria-hidden="true"
                />
              </span>
            </div>
          )}
          {Array.isArray(value) && (
            <div className="flex w-full flex-wrap justify-start gap-1 px-1.5">
              {value.map((optionId) => {
                let option: Options | undefined;
                if (typeValue === "id") {
                  option = options?.find((opt) => opt.id === optionId);
                } else {
                  option = options?.find((opt) => opt.name === optionId);
                }
                return (
                  option && (
                    <span
                      key={option.id}
                      className="inline-flex items-center rounded-lg bg-primary-light px-2.5 py-1 text-xs font-medium text-color-light "
                    >
                      {option.name}
                      <button
                        type="button"
                        className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-color-light focus:outline-none "
                        onClick={() => handleRemove(option!)}
                      >
                        <BiX className="h-5 w-5 hover:text-[#FF0404]" />
                      </button>
                    </span>
                  )
                );
              })}
            </div>
          )}
        </div>
        {open && (
          <div className="absolute z-10 mt-2 h-28 w-full bg-red-400 overflow-auto rounded-md border-[#d9d9d9] bg-primary-light shadow-md scrollbar ">
            {options?.map((option) => (
              <div
                className="flex h-auto w-auto items-center justify-start py-1 pl-3 text-center"
                key={option.id}
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    {...inputProps}
                    {...rest}
                    id={id.toString()}
                    name={name}
                    control={control}
                    value={typeValue === "id" ? option.id : option.name}
                    checked={
                      typeValue === "id"
                        ? Array.isArray(value) && value.includes(option.id)
                        : Array.isArray(value) && value.includes(option.name)
                    }
                    onChange={() => handleSelect(option)}
                  />
                  <label className="text-sm" htmlFor={option.id.toString()}>
                    {option.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
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
