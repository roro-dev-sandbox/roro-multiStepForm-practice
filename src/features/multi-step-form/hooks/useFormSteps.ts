import { useState } from "react";
import { type FormStep } from "../types/form.types";

const MAX_STEP = 4;
const MIN_STEP = 1;

export const useFormSteps = (initialStep: FormStep = 1) => {
    const [currentStep, setCurrentStep] = useState<FormStep>(initialStep);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, MAX_STEP) as FormStep);
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, MIN_STEP) as FormStep);
    };

    const goToStep = (step: FormStep) => {
        setCurrentStep(step);
    };

    return {
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        isFirstStep: currentStep === MIN_STEP,
        isLastStep: currentStep === MAX_STEP,
    };
};
