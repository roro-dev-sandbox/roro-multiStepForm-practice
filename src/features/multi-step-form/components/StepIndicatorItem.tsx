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
            className={`flex sm:flex-row items-center gap-4 h-max ${onClick ? "cursor-pointer" : ""}`}
            onClick={onClick}
        >
            <div
                className={`px-3 py-1 rounded-full font-bold border ${isActive
                        ? "bg-blue-200 text-blue-950 border-blue-200"
                        : "bg-transparent text-white border-white"
                    }`}
            >
                {step}
            </div>
            <div className="hidden sm:block">
                <p className="text-grey-500 text-xs uppercase tracking-wide">
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
