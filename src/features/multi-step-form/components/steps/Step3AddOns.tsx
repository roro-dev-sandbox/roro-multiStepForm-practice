import { useFormContext, useWatch } from "react-hook-form";
import { StepHeader } from "../StepHeader";
import { Step3AddOnsItem } from "./Step3AddOnsItem";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";
import { ADDONS } from "../../constants/valuesSteps";


export function Step3AddOns() {
    const { control} = useFormContext<FormSchemaInput, any, FormSchemaOutput>();
    const [addOnIds, billing] = useWatch({ control, name: ["addOnIds", "billing"] });

    return (
        <div className="space-y-6">
            <StepHeader
                title="Pick Add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <div className="space-y-4">
                {ADDONS.map((addon) => (
                    <Step3AddOnsItem key={addon.id} addOnIds={addOnIds} {...addon} billing={billing} />
                ))}
            </div>
        </div>
    );
}
