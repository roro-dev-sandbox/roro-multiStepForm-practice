import { useFormContext } from "react-hook-form";
import type { FormSchemaInput, FormSchemaOutput } from "../schemas/formSchema";
import { Button } from "@/components/ui/Button";

type StepFieldsMap = {
    [key: number]: readonly string[];
};

const STEP_FIELDS = {
    1: ["personal.name", "personal.email", "personal.phone"],
    2: ["planId", "billing"],
    3: ["addOnIds"],
} as const satisfies StepFieldsMap;

type StepFieldsKey = keyof typeof STEP_FIELDS;

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
    const { handleSubmit, trigger } = useFormContext<FormSchemaInput, any, FormSchemaOutput>();

    const handleNext = async () => {
        if (isLastStep) {
            handleSubmit(onSubmit)();
            return;
        }
        const isValid = await trigger(STEP_FIELDS[currentStep as StepFieldsKey]);

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
            className={`bg-white w-full fixed bottom-0 left-0 sm:static p-4 sm:p-0 flex items-center ${!isFirstStep ? "justify-between" : "justify-end"}`}
        >
            {!isFirstStep && (
                <Button type="button" variant="secondary" onClick={handleBack} ariaLabel={`Go Back to Step ${currentStep - 1}`}>
                    Go Back
                </Button>
            )}
            <Button type="button" onClick={handleNext} ariaLabel={isLastStep ? "Submit Form" : `Go to Step ${currentStep + 1}`}>
                {isLastStep ? "Confirm" : "Next Step"}
            </Button>
        </div>
    );
}
