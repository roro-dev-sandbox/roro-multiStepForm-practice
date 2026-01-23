import { type FormStep } from "../types/form.types";
import { StepIndicatorItem } from "./StepIndicatorItem";
import imgSidebarMobile from "../../../assets/images/bg-sidebar-mobile.svg";
import imgSidebarDesktop from "../../../assets/images/bg-sidebar-desktop.svg";

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
        <aside className="fixed inset-0 sm:relative w-full sm:max-w-60 rounded-xl -z-10 sm:z-0">
            <img className="block sm:hidden w-full" src={imgSidebarMobile} alt="Sidebar Mobile Background" />
            <img className="hidden sm:block" src={imgSidebarDesktop} alt="Sidebar Desktop Background" />
            <nav className="absolute inset-0 sm:block space-y-6 p-6 flex justify-center gap-2" aria-label="Form progress">
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
