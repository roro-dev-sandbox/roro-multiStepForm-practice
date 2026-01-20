import type { Billing, PlanOption } from "../../types/form.types";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import { useFormContext } from "react-hook-form";
import { ControllerInputCustom } from "@/components/ui/form/ControllerInputCustom";
import { DATE_VALUE } from "../../constants/valuesSteps";

interface Step2SelectPlanItemProps extends PlanOption {
    billing: Billing;
    isSelected: boolean;
}

export function Step2SelectPlanItem({
    id,
    img,
    name,
    priceCents,
    description,
    billing,
    isSelected,
}: Step2SelectPlanItemProps) {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <ControllerInputCustom<FormSchemaInput, FormSchemaOutput>
            classNameLabel={`flex-1 flex sm:flex-col gap-4 md:gap-8 rounded-lg p-4 border text-sm md:text-base ${isSelected ? "bg-gray-50 border-purple-700" : "border-gray-200"} hover:bg-gray-50 hover:border-purple-700 transition-colors duration-300 cursor-pointer`}
            classNameInput="hidden w-0"
            control={control}
            name="planId"
            value={id}
        >
            <img className="size-12" src={img} alt={name} />
            <div className="mb-0">
                <h1 className="text-blue-950 font-medium">{name}</h1>
                <p className="text-grey-500">${priceCents[billing]}/{DATE_VALUE[billing]}</p>
                {billing === "yearly" && <p className="text-blue-950">{description}</p>}
            </div>
        </ControllerInputCustom>
    );
}
