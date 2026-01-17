import { useFormContext } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../schemas/formSchema";
import { Button } from "@/components/ui/Button";

interface StepButtonProps {
    currentStep: number;
    nextStep: () => void;
    prevStep: () => void;
    isFirstStep: boolean;
    isLastStep?: boolean;
    onSubmit: (data: FormSchemaOutput) => void;
}

export function StepButton({
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    onSubmit,
}: StepButtonProps) {
    const { handleSubmit, trigger } = useFormContext<
        FormSchemaInput,
        any,
        FormSchemaOutput
    >();

    const handleNext = async () => {
        let isValid = false;

        switch (currentStep) {
            case 1:
                isValid = await trigger(["name", "email", "phone"]);
                break;
            case 2:
                isValid = await trigger(["plan", "billing"]);
                break;
            case 3:
                isValid = await trigger(["addOns"]);
                break;
            case 4:
                handleSubmit(onSubmit)();
                return;
        }

        if (isValid) {
            nextStep();
        }
    };

    const handleBack = () => {
        if (!isFirstStep) {
            prevStep();
        }
    };

    return (
        <div
            className={`w-full fixed bottom-0 left-0 sm:static p-4 sm:p-0 flex items-center ${!isFirstStep ? "justify-between" : "justify-end"}`}
        >
            {!isFirstStep && (
                <Button type="button" variant="secondary" onClick={handleBack}>
                    Go Back
                </Button>
            )}
            <Button type="button" onClick={handleNext}>
                {isLastStep ? "Confirm" : "Next Step"}
            </Button>
        </div>
    );
}
