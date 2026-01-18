import { ControllerInputRadio } from "@/components/ui/form/ControllerInputRadio";
import type { PlanOption } from "../../types/form.types";
import type {
    FormSchemaInput,
    FormSchemaOutput,
} from "../../schemas/formSchema";
import { useFormContext } from "react-hook-form";

interface Step2SelectPlanItemProps extends PlanOption {
    isYearly: boolean;
    isSelected: boolean;
}

export function Step2SelectPlanItem({
    img,
    name,
    priceMonthly,
    priceYearly,
    isYearly,
    isSelected,
}: Step2SelectPlanItemProps) {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <ControllerInputRadio
            className={`flex-1 flex sm:flex-col gap-4 md:gap-8 rounded-lg p-4 border text-sm md:text-base ${isSelected ? "bg-gray-50 border-purple-700" : "border-gray-200"} hover:bg-gray-50 hover:border-purple-700 transition-colors duration-300 cursor-pointer`}
            control={control}
            name="plan"
            value={name.toLowerCase()}
        >
            <img className="size-12" src={img} alt={name} />
            <div className="mb-0">
                <h1 className="text-blue-950 font-medium">{name}</h1>
                <p className="text-grey-500">${isYearly ? `${priceYearly}/yr` : `${priceMonthly}/mo`}</p>
                {isYearly && <p className="text-blue-950">2 months free</p>}
            </div>
        </ControllerInputRadio>
    );
}
