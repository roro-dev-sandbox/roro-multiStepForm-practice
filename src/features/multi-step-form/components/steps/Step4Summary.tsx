import { useFormContext, useWatch } from "react-hook-form";
import { StepHeader } from "../StepHeader";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import {
    calculateTotalPrice,
    findAddOns,
    findPlan,
    firstWordUpperCase,
    transformAdverbToNoun,
} from "../../helpers/formCalculationStep";
import { ADDONS, DATE_VALUE, PLANS } from "../../constants/valuesSteps";
import type { FormStep } from "../../types/form.types";

export interface Step4SummaryProps {
    onStepClick?: (step: FormStep) => void;
}

export function Step4Summary({ onStepClick }: Step4SummaryProps) {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const [planId, addOnIds, billing] = useWatch({
        control,
        name: ["planId", "addOnIds", "billing"],
    });
    const plan = findPlan(PLANS, planId);
    const addOns = findAddOns(ADDONS, addOnIds);
    const totalPrice = calculateTotalPrice(plan!, addOns, billing);

    return (
        <div className="space-y-6">
            <StepHeader
                title="Finishing up"
                description="Double-check everything looks OK before confirming."
            />
            <div className="p-6 space-y-6 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                    <div>
                        <h2 className="text-blue-950 font-medium">
                            {plan?.name}({firstWordUpperCase(billing)})
                        </h2>
                        <button className="underline text-grey-500 cursor-pointer" onClick={() => onStepClick?.(2)}>
                            change
                        </button>
                    </div>
                    <p className="text-blue-950 font-medium">
                        ${plan?.priceCents[billing]}/{DATE_VALUE[billing]}
                    </p>
                </div>
                <div className="space-y-2">
                    {addOns.length === 0 ? (
                        <p className="text-grey-500">No add-ons selected</p>
                    ) : null}
                    {addOns.map((addOn) => (
                        <p className="flex justify-between items-center" key={addOn.id}>
                            <span className="text-grey-500">{addOn.name}</span>
                            <span className="text-blue-950">
                                +${addOn.priceCents[billing]}/{DATE_VALUE[billing]}
                            </span>
                        </p>
                    ))}
                </div>
                <p className="flex justify-between items-center">
                    <span className="text-grey-500">Total (per {transformAdverbToNoun(billing)})</span>
                    <span className="text-purple-600 font-bold text-lg">
                        ${totalPrice}/{DATE_VALUE[billing]}
                    </span>
                </p>
            </div>
        </div>
    );
}
