import { ControllerInput } from "@/components/ui/form/ControllerInput";
import { useFormContext } from "react-hook-form";
import type {
    FormSchemaInput,
    FormSchemaOutput,
} from "../../schemas/formSchema";

export function Step1PersonalInfo() {
    const { control } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-blue-950 font-bold text-2xl mb-1">Step 1: Personal Info</h1>
            <p className="text-gray-500">Please provide your name, email address, and phone number.</p>
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"name"}
                label="Name"
                placeholder="e.g.Stephen King"
            />
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"email"}
                label="Email"
                placeholder="e.g.stephenking@lorem.com"
            />
            <ControllerInput<FormSchemaInput, FormSchemaOutput>
                control={control}
                name={"phone"}
                label="Phone"
                placeholder="e.g. +1 234 567 890"
            />
        </div>
    );
}
