import { useFormContext } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import type { Billing } from "../../types/form.types";

interface Step2SelectPlanBillingProps {
    billing: Billing;
    isYearly: boolean;
}

export function Step2SelectPlanBilling({ billing, isYearly }: Step2SelectPlanBillingProps) {
    const { setValue } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    const onChangeBilling = () => {
        const newBilling = billing === "monthly" ? "yearly" : "monthly";
        setValue("billing", newBilling);
    }

    return (
        <div className="flex justify-center items-center gap-6 p-2 bg-gray-50 rounded-md font-medium">
            <span className={!isYearly ? "text-blue-950" : "text-grey-500"}>Monthly</span>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={onChangeBilling} checked={billing === "yearly"} />
                <div className="relative w-10 h-6 bg-blue-950 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            </label>
            <span className={isYearly ? "text-blue-950" : "text-grey-500"}>Yearly</span>
        </div>
    );
}
