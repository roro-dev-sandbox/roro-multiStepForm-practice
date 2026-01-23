interface StepHeaderProps {
    title: string;
    description: string;
}

export function StepHeader({ title, description }: StepHeaderProps) {
    return (
        <>
            <h1 className="text-blue-950 font-bold text-2xl mb-1">{title}</h1>
            <p className="text-grey-500">
                {description}
            </p>
        </>
    );
}
