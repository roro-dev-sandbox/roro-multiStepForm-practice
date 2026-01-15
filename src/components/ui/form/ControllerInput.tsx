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
            <label htmlFor={name} className={hasError ? "text-red-500!" : ""}>
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                color={colorState}
                disabled={disabled}
                value={field.value || ""}
            />

            {hasError && (
                <p className="-mt-1" id={`${name}-error`} color="failure" role="alert">
                    {error?.message}
                </p>
            )}
        </div>
    );
}