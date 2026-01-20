import { useFormContext, useWatch } from "react-hook-form";
import type { AddOn } from "../../types/form.types";
import { StepHeader } from "../StepHeader";
import { Step3AddOnsItem } from "./Step3AddOnsItem";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";

export const ADDONS: AddOn[] = [
    {
        id: "online-service",
        name: "Online service",
        description: "Access to multiplayer games",
        priceCents: { monthly: 1, yearly: 10 },
    },
    {
        id: "larger-storage",
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        priceCents: { monthly: 2, yearly: 20 },
    },
    {
        id: "custom-profile",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        priceCents: { monthly: 2, yearly: 20 },
    },
];

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
