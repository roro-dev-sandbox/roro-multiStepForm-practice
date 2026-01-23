import { useFormContext, useWatch } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import { Step2SelectPlanItem } from "./Step2SelectPlanItem";
import { Step2SelectPlanBilling } from "./Step2SelectPlanBilling";
import { StepHeader } from "../StepHeader";
import { PLANS } from "../../constants/valuesSteps";

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
