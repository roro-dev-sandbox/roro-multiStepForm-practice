import { ControllerInput } from "@/components/ui/form/ControllerInput";
import { useFormContext } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../../schemas/formSchema";

export function Step1PersonalInfo() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <div>
            <h1>Step 1: Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <ControllerInput<FormSchemaInput, FormSchemaOutput> control={control} name={"name"} label="Name" />
            <ControllerInput<FormSchemaInput, FormSchemaOutput> control={control} name={"email"} label="Email" />
            <ControllerInput<FormSchemaInput, FormSchemaOutput> control={control} name={"phone"} label="Phone" />
        </div>
    )
}