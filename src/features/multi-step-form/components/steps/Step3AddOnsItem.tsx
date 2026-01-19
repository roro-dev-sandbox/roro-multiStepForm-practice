import { ControllerInputCustom } from "@/components/ui/form/ControllerInputCustom";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import type { AddOn } from "../../types/form.types";
import { useFormContext } from "react-hook-form";

export interface Step3AddOnsItemProps extends AddOn {
}

export function Step3AddOnsItem({
    id,
    name,
    description,
    priceCents,
}: Step3AddOnsItemProps) {

    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <ControllerInputCustom<FormSchemaInput, FormSchemaOutput>
            control={control}
            name="addOnIds"
            value={id}
            classNameLabel="flex cursor-pointer"
        >
            <div>
                <h1 className="text-blue-950 font-medium">{name}</h1>
                <p className="text-grey-500">{description}</p>
                <p>+${priceCents.monthly}/mo</p>
            </div>

        </ControllerInputCustom>
    );
}   