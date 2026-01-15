import { useControllerField, type BaseControllerProps } from "@/hooks/useControllerField";
import type { ComponentProps } from "react";
import type { FieldValues } from "react-hook-form";

type InputType = ComponentProps<"input">["type"];


export interface ControllerInputProps<T extends FieldValues, TT> extends BaseControllerProps<T, TT> {
    type?: InputType;
    placeholder?: string;
}

export function ControllerInput<T extends FieldValues, TT>({
    name,
    label,
    control,
    type = "text",
    placeholder = "",
    disabled = false,
    required = false,
    className,
}: ControllerInputProps<T, TT>) {
    const { field, error, hasError, colorState } = useControllerField(name, control);

    return (
        <div className={`flex-1 flex flex-col gap-2 ${className}`}>
            <div className="flex justify-between">
                <label htmlFor={name} className="text-blue-950">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {hasError && (
                    <p className="text-red-500 font-bold" id={`${name}-error`} role="alert">
                        {error?.message}
                    </p>
                )}

            </div>
            <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                color={colorState}
                disabled={disabled}
                value={field.value || ""}
                className={`rounded-md outline-1 text-blue-950 font-medium p-2 ${hasError ? "outline-red-500 focus:outline-red-500" : "outline-gray-300 focus:outline-blue-950"}`}
            />


        </div>
    );
}