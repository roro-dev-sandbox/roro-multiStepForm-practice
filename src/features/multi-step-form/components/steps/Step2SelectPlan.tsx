import { useFormContext, useWatch } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import iconArcade from "@/assets/images/icon-arcade.svg";
import iconAdvanced from "@/assets/images/icon-advanced.svg";
import iconPro from "@/assets/images/icon-pro.svg";
import type { PlanOption } from "../../types/form.types";
import { Step2SelectPlanItem } from "./Step2SelectPlanItem";
import { Step2SelectPlanBilling } from "./Step2SelectPlanBilling";
import { StepHeader } from "../StepHeader";

export const PLANS: PlanOption[] = [
    {
        id: "arcade",
        name: "Arcade",
        priceCents: { monthly: 9, yearly: 90 },
        img: iconArcade,
        description: "2 months free",
    },
    {
        id: "advanced",
        name: "Advanced",
        priceCents: { monthly: 12, yearly: 120 },
        img: iconAdvanced,
        description: "2 months free",
    },
    {
        id: "pro",
        name: "Pro",
        priceCents: { monthly: 15, yearly: 150 },
        img: iconPro,
        description: "2 months free",
    },
];

export function Step2SelectPlan() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const [billing, planCurrently] = useWatch({
        control,
        name: ["billing", "planId"],
    });
    const isYearly = billing === "yearly";

    return (
        <div className="space-y-6">
            <StepHeader
                title="Select Your Plan"
                description="You have the option of monthly or yearly billing."
            />
            <div className="flex flex-col sm:flex-row justify-between gap-4 ">
                {PLANS.map((plan) => (
                    <Step2SelectPlanItem
                        key={plan.id}
                        billing={billing}
                        isSelected={planCurrently === plan.id}
                        {...plan}
                    />
                ))}
            </div>
            <Step2SelectPlanBilling billing={billing} isYearly={isYearly} />
        </div>
    );
}
