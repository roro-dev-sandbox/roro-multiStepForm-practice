import type { ComponentProps } from "react";

const BUTTON_STYLES = {
    primary: "bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors cursor-pointer",
    secondary: "text-grey-500 py-2 hover:text-blue-950 transition-colors cursor-pointer",
};

type ButtonType = ComponentProps<"button">["type"];

interface ButtonProps {
    variant?: "primary" | "secondary";
    ariaLabel?: string;
    type: ButtonType;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({ variant = "primary", type, ariaLabel, className = "", children, onClick }: ButtonProps) {
    return (
        <button type={type} aria-label={ariaLabel} className={`${BUTTON_STYLES[variant]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
