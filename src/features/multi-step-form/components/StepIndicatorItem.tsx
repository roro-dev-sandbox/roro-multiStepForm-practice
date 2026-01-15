interface StepIndicatorItemProps {
    step: number;
    title: string;
    isActive: boolean;
    onClick?: () => void;
}

const StepIndicatorItem = ({
    step,
    title,
    isActive,
    onClick,
}: StepIndicatorItemProps) => {
    return (
        <div
            className={`flex items-center gap-4 ${onClick ? "cursor-pointer" : ""}`}
            onClick={onClick}
        >
            {/* Círculo del número */}
            <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 ${isActive
                        ? "bg-blue-300 text-blue-950 border-blue-300"
                        : "bg-transparent text-white border-white hover:border-blue-300"
                    }`}
            >
                {step}
            </div>

            {/* Texto del step (oculto en móvil) */}
            <div className="hidden md:block">
                <p className="text-blue-200 text-xs font-normal uppercase tracking-wide">
                    STEP {step}
                </p>
                <p className="text-white font-bold text-sm uppercase tracking-wide">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default StepIndicatorItem;
