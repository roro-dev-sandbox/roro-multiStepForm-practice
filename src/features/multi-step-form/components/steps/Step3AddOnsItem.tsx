import { ControllerInputCustom } from "@/components/ui/form/ControllerInputCustom";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import type { AddOn, Billing } from "../../types/form.types";
import { useFormContext } from "react-hook-form";
import { verifyAddOnSelected } from "../../helpers/formCalculationStep";
import { DATE_VALUE } from "../../constants/valuesSteps";
import iconCheckMark from "@/assets/images/icon-checkmark.svg";

export interface Step3AddOnsItemProps extends AddOn {
    addOnIds: string[];
    billing: Billing
}

export function Step3AddOnsItem({
    id,
    name,
    description,
    priceCents,
    addOnIds,
    billing
}: Step3AddOnsItemProps) {

    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const isChecked = verifyAddOnSelected(addOnIds, id);

    return (
        <ControllerInputCustom<FormSchemaInput, FormSchemaOutput>
            control={control}
            name={`addOnIds`}
            value={id}
            classNameLabel={`flex items-center px-4 py-3 gap-4 text-sm sm:text-base cursor-pointer border border-gray-300 rounded-lg hover:border-purple-600 hover:bg-gray-100 transition-colors ${isChecked ? "border-purple-600 bg-gray-50" : ""}`}
            classNameInput="peer order-1 appearance-none w-5 h-5 border border-gray-300 rounded-md checked:border-purple-600 checked:bg-purple-600 cursor-pointer"
            type="checkbox"
            isArray
            iconCheckbox={iconCheckMark}
        >
            <div className="order-2 flex gap-4 justify-between w-full items-center">
                <div>
                    <h1 className="text-blue-950 font-bold">{name}</h1>
                    <p className="text-grey-500">{description}</p>
                </div>
                <p className="text-purple-600 text-nowrap">+${priceCents[billing]}/{DATE_VALUE[billing]}</p>
            </div>

        </ControllerInputCustom>
    );
}   