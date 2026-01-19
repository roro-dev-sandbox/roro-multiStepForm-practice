import { useControllerField, type BaseControllerProps } from "@/hooks/useControllerField";
import type { FieldValues } from "react-hook-form";
import type { InputType } from "./ControllerInput";


export interface ControllerInputCustomProps<
    T extends FieldValues,
    TT,
> extends Omit<BaseControllerProps<T, TT>, "label" | "required" | "disabled"> {
    type?: InputType;
    children?: React.ReactNode;
    value: string;
    classNameLabel?: string;
    classNameInput?: string;
}

export function ControllerInputCustom<T extends FieldValues, TT>({
    name,
    control,
    classNameLabel,
    classNameInput,
    children,
    value,
    type = "radio",
}: ControllerInputCustomProps<T, TT>) {
    const { field } = useControllerField(name, control);

    return (
        <label htmlFor={value} className={classNameLabel}>
            {children}
            <input
                {...field}
                id={value}
                type={type}
                value={value}
                className={classNameInput}
            />
        </label>
    );
}
