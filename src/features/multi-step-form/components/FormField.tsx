import type { FormStep } from "../types/form.types";
import { Step1PersonalInfo } from "./steps/Step1PersonalInfo";
import { Step2SelectPlan } from "./steps/Step2SelectPlan";
import { Step3AddOns } from "./steps/Step3AddOns";
import { Step4Summary } from "./steps/Step4Summary";

type StepType = {
  [key in FormStep]: React.ComponentType;
};

const STEPS: StepType = {
  1: Step1PersonalInfo,
  2: Step2SelectPlan,
  3: Step3AddOns,
  4: Step4Summary,
};

interface FormFieldProps {
  currentStep: FormStep;
}

export function FormField({ currentStep }: FormFieldProps) {
  const StepComponent = STEPS[currentStep];
  return (<StepComponent />);
}
