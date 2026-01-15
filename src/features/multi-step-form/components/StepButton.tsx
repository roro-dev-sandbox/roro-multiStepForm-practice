import { useFormContext } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../schemas/formSchema";

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
        <div>
            StepButton
            {!isFirstStep && (
                <button type="button" onClick={handleBack}>
                    Go Back
                </button>
            )}
            <button type="button" onClick={handleNext}>
                {isLastStep ? "Confirm" : "Next Step"}
            </button>
        </div>
    );
}
