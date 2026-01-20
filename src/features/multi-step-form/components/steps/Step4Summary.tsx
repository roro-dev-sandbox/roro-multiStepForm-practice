import { useFormContext, useWatch } from "react-hook-form";
import { StepHeader } from "../StepHeader";
import type {
    FormSchemaInput,
    FormSchemaOutput,
} from "../../schemas/formSchema";
import {
    calculateTotalPrice,
    findAddOns,
    findPlan,
    firstWordUpperCase,
} from "../../helpers/formCalculationStep";
import { ADDONS, DATE_VALUE, PLANS } from "../../constants/valuesSteps";

export interface Step4SummaryProps {
    prop: string;
}

export function Step4Summary() {
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
            <div className="p-7 space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-blue-950 font-medium">
                            {plan?.name}({firstWordUpperCase(billing)})
                        </h2>
                        <a className="underline text-grey-500" href="#">
                            change
                        </a>
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
                    <span className="text-grey-500">Total (per {billing})</span>
                    <span className="text-purple-600 font-bold text-lg">
                        +${totalPrice}/{DATE_VALUE[billing]}
                    </span>
                </p>
            </div>
        </div>
    );
}
