import { useState } from "react";
import { type FormStep } from "../types/form.types";

export const useFormSteps = (initialStep: FormStep = 1) => {
    const [currentStep, setCurrentStep] = useState<FormStep>(initialStep);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 4) as FormStep);
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1) as FormStep);
    };

    const goToStep = (step: FormStep) => {
        setCurrentStep(step);
    };

    return {
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        isFirstStep: currentStep === 1,
        isLastStep: currentStep === 4,
    };
};
