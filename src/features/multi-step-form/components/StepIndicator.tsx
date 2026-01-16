import { type FormStep } from "../types/form.types";
import StepIndicatorItem from "./StepIndicatorItem";
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
        <aside className="relative inset-0 rounded-xl w-full max-w-60">
            <img className="block md:hidden" src={imgSidebarMobile} alt="Sidebar Mobile Background" />
            <img className="hidden md:block" src={imgSidebarDesktop} alt="Sidebar Desktop Background" />
            <nav className="absolute inset-0 space-y-6 p-6" aria-label="Form progress">
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
