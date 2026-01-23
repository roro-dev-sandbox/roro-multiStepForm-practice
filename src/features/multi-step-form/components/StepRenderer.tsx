import type { FormStep } from "../types/form.types";
import { Step1PersonalInfo } from "./steps/Step1PersonalInfo";
import { Step2SelectPlan } from "./steps/Step2SelectPlan";
import { Step3AddOns } from "./steps/Step3AddOns";
import { Step4Summary } from "./steps/Step4Summary";

type StepType = {
  [key in FormStep]: React.ComponentType<{ onStepClick?: (step: FormStep) => void }>;
};

const STEPS: StepType = {
  1: Step1PersonalInfo,
  2: Step2SelectPlan,
  3: Step3AddOns,
  4: Step4Summary,
};

interface StepRendererProps {
  currentStep: FormStep;
  onStepClick?: (step: FormStep) => void;
}

export function StepRenderer({ currentStep, onStepClick }: StepRendererProps) {
  const StepComponent = STEPS[currentStep];
  return (<StepComponent onStepClick={onStepClick} />);
}
