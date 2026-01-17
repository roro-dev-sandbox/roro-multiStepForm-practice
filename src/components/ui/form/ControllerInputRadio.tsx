import { useControllerField, type BaseControllerProps } from "@/hooks/useControllerField";
import type { FieldValues } from "react-hook-form";

export interface ControllerInputRadioProps<
    T extends FieldValues,
    TT,
> extends Omit<BaseControllerProps<T, TT>, "label" | "required" | "disabled"> {
    children?: React.ReactNode;
    value: string;
}

export function ControllerInputRadio<T extends FieldValues, TT>({
    name,
    control,
    className,
    children,
    value,
}: ControllerInputRadioProps<T, TT>) {
    const { field } = useControllerField(name, control);

    return (
        <label htmlFor={value} className={className} onClick={() => field.onChange(value)}>
            {children}
            <input
                {...field}
                id={value}
                type="radio"
                value={value}
                className="hidden w-0"
            />
        </label>
    );
}
