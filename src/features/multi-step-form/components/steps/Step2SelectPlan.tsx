import { useFormContext, useWatch } from "react-hook-form";
import type {
    FormSchemaInput,
    FormSchemaOutput,
} from "../../schemas/formSchema";
import iconArcade from "@/assets/images/icon-arcade.svg";
import iconAdvanced from "@/assets/images/icon-advanced.svg";
import iconPro from "@/assets/images/icon-pro.svg";
import type { PlanOption } from "../../types/form.types";
import { Step2SelectPlanItem } from "./Step2SelectPlanItem";
import { Step2SelectPlanBilling } from "./Step2SelectPlanBilling";

const PlanOptions: PlanOption[] = [
    {
        id: "1-arcade",
        img: iconArcade,
        name: "Arcade",
        priceMonthly: 9,
        priceYearly: 90,
    },
    {
        id: "2-advanced",
        img: iconAdvanced,
        name: "Advanced",
        priceMonthly: 12,
        priceYearly: 120,
    },
    {
        id: "3-pro",
        img: iconPro,
        name: "Pro",
        priceMonthly: 15,
        priceYearly: 150,
    },
];

export function Step2SelectPlan() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const [billing, planCurrently] = useWatch({
        control,
        name: ["billing", "plan"],
    });
    const isYearly = billing === "yearly";

    return (
        <div className="space-y-6">
            <h1 className="text-blue-950 font-bold text-2xl mb-1">
                Select Your Plan
            </h1>
            <p className="text-grey-500">
                You have the option of monthly or yearly billing.
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-4 ">
                {PlanOptions.map((plan) => (
                    <Step2SelectPlanItem
                        key={plan.id}
                        isYearly={isYearly}
                        isSelected={planCurrently === plan.name.toLowerCase()}
                        {...plan}
                    />
                ))}
            </div>
            <Step2SelectPlanBilling billing={billing} isYearly={isYearly} />
        </div>
    );
}
