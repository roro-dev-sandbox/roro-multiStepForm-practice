export interface Step2SelectPlanProps {
    prop: string;
}

export function Step2SelectPlan() {

    return (
        <div>
            <h1 className="text-blue-950 font-bold text-2xl mb-1">Select Your Plan</h1>
            <p className="text-grey-500">You have the option of monthly or yearly billing.</p>
        </div>
    )
}