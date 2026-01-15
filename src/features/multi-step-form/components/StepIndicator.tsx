import { type FormStep } from "../types/form.types";
import StepIndicatorItem from "./StepIndicatorItem";

interface StepIndicatorProps {
    currentStep: FormStep;
    onStepClick?: (step: FormStep) => void;
}

const STEPS = [
    { step: 1 as FormStep, title: "YOUR INFO" },
    { step: 2 as FormStep, title: "SELECT PLAN" },
    { step: 3 as FormStep, title: "ADD-ONS" },
    { step: 4 as FormStep, title: "SUMMARY" },
];

export function StepIndicator({
    currentStep,
    onStepClick,
}: StepIndicatorProps) {
    return (
        <aside className="rounded-xl bg-[url(/assets/images/bg-sidebar-mobile.svg)] md:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover bg-blue-950 p-6 md:p-10 w-full md:w-64 lg:w-80">
            <nav className="space-y-6" aria-label="Form progress">
                {STEPS.map(({ step, title }) => (
                    <StepIndicatorItem
                        key={step}
                        step={step}
                        title={title}
                        isActive={currentStep === step}
                        onClick={onStepClick ? () => onStepClick(step) : undefined}
                    />
                ))}
            </nav>
        </aside>
    );
}
