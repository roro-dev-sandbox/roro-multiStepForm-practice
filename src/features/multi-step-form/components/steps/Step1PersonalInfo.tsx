import { ControllerInput } from "@/components/ui/form/ControllerInput";
import { useFormContext } from "react-hook-form";
import type {FormSchemaInput,FormSchemaOutput } from "../../schemas/formSchema";
import { StepHeader } from "../StepHeader";

export function Step1PersonalInfo() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <div className="space-y-4">
            <StepHeader
                title="Personal Info"
                description="Please provide your name, email address, and phone number."
            />
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"personal.name"}
                label="Name"
                placeholder="e.g. Stephen King"
            />
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"personal.email"}
                label="Email Address"
                placeholder="e.g. stephenking@lorem.com"
            />
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"personal.phone"}
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
            />
        </div>
    );
}
